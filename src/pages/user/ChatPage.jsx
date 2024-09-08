import React, { useEffect, useRef, useState } from 'react'
import { IoSend } from "react-icons/io5";
// import model from '../../lib/gemini';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// const SERVER = "http://localhost:5000";
const SERVER = "https://uzima-backe.vercel.app";



const ChatPage = () => {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const user = useSelector((state) => state.auth.user);
    const userId = user._id;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const textareaRef = useRef(null);

    const formatMessage = (msg) => {
        // Ensure message content is always an array
        if (!Array.isArray(msg.content)) {
            return {
                ...msg,
                content: [msg.content],
            };
        }
        return msg;
    };
    const fetchThread = async () => {
        try {
            const response = await axios.get(`${SERVER}/api/assistant/thread-messages?userId=${userId}`);
            const { messages } = response.data;
            setMessages(messages);
        } catch (error) {
            console.error('Error fetching thread:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchThread();
    }, []);

    const add = async (text) => {
        setQuestion(text);
        setLoading(true);
        setError(null); 

        try {
            const response = await axios.post(`${SERVER}/api/assistant/add-message`, {
                userId,
                message: text
            });

            let { userMessage, assistantResponse } = response.data;

            // Replace stars with bold HTML tags
            assistantResponse = assistantResponse.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

            // Remove any hashes
            assistantResponse = assistantResponse.replace(/#/g, '');

            // Split the assistant's response into an array of points based on newlines
            const formattedResponse = assistantResponse.split('\n').map(point => point.trim()).filter(point => point !== '');

            // Create new message objects with the expected structure
            const newMessages = [
                { role: 'user', content: [{ type: 'text', text: { value: userMessage } }] },
                { role: 'assistant', content: formattedResponse.map(point => ({ type: 'text', text: { value: point } })) }
            ];

            // Update state with new messages
            setMessages(prevMessages => [...prevMessages, ...newMessages.map(formatMessage)]); 
            setQuestion('');
            await fetchThread()
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setError(error.response.data.error); // Set the error message from the backend
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            await fetchThread()
            setLoading(false);
        }
    };

    const handleTextareaChange = (e) => {
        setQuestion(e.target.value);
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on content
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent newline
            handleSubmit(e); // Submit the form
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return; // Avoid sending empty messages
        await add(question);
        setQuestion('');
    };

    return (
        <div className='p-2 w-full'>
            <div className='bg-gray-50 w-full h-[100vh] p-2'>
                <div className='bg-red-500 py-1 mb-4 flex items-center justify-center'>
                    <p className='text-white text-sm'>You are on a free plan. Your access to our services is limited. Kindly <a href="/billing" className='underline'>Upgrade Here</a> to access everything.</p>
                </div>
                <div>
                    <h1 className='font-bold'>Chat with Uzima AI</h1>
                    <p className='text-gray-400 text-sm'>Have a conversation with uzima about any issue you are experiencing.</p>
                    <div className='sm:w-full w-[80%] relative p-3 border border-green-500 h-[340px] sm:h-[450px] overflow-auto bg-gray-200 rounded-md'>
                        {loading ? (
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        ) : (
                            <div>
                                {/* {messages.map((msg, index) => (
                                    <div key={index} className={`mb-2 p-2  rounded-md ${msg.role === 'user' ? 'bg-black text-white float-end w-fit mt-10' : 'bg-gray-500 mt-10 w-[80%] float-start text-white'}`}>
                                        {msg.content.map((part, idx) => (
                                            <ReactMarkdown key={idx} children={part.text?.value || 'No content available'} remarkPlugins={[remarkGfm]} />
                                        ))}
                                    </div>
                                ))} */}
                                {messages.map((msg, index) => (
                                    <div key={index} className={`mb-2 p-2 rounded-md max-w-[60%] ${
                                        msg.role === 'user' ? 'bg-black text-white self-end sm:ml-auto ml-0' : 'bg-gray-500 text-white sm:self-start self-center sm:mr-auto mr-0'
                                    }`}>
                                        {msg.content.map((part, idx) => (
                                            <ReactMarkdown
                                                key={idx}
                                                children={part.text?.value || 'No content available'}
                                                remarkPlugins={[remarkGfm]}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className='fixed sm:w-[75%] flex items-center sm:bottom-[50px] bottom-[100px] sm:right-20'>
                            <form onSubmit={handleSubmit} className='w-full relative px-5'>
                                <textarea
                                    ref={textareaRef}
                                    value={question}
                                    onChange={handleTextareaChange}
                                    className='w-[100%] px-3 py-2 rounded-md bg-gray-800 text-white'
                                    placeholder='Ask me anything...'
                                    rows={1} // Initial height
                                    disabled={loading}
                                    onKeyDown={handleKeyDown}
                                />
                                <button className='absolute right-8 text-gray-500 top-3'>
                                    <IoSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {error && (
                    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-600 text-white rounded-md'>
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatPage