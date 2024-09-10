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
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-grow p-6 overflow-y-auto">
                <div className="bg-blue-500 text-white p-3 rounded-md text-center mb-4">
                    <p className="text-sm">You are on a free plan. Upgrade <a href="/billing" className="underline">here</a> to access more services.</p>
                </div>

                <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                    {loading ? (
                        <div className="text-center w-full">
                            <div className="ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    ) : (
                        messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                                <div className={`rounded-lg p-4 max-w-[80%] ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'}`}>
                                    {msg.content.map((part, idx) => (
                                        <ReactMarkdown key={idx} children={part.text?.value || 'No content available'} remarkPlugins={[remarkGfm]} />
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="fixed bottom-0 w-[85%] p-4 bg-white border-t border-gray-300">
                <div className="flex items-center">
                    <textarea
                        ref={textareaRef}
                        value={question}
                        onChange={handleTextareaChange}
                        onKeyDown={handleKeyDown}
                        rows={1}
                        className="resize-none w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ask me anything..."
                        disabled={loading}
                    />
                    <button type="submit" className="ml-4 text-blue-500 text-2xl">
                        <IoSend />
                    </button>
                </div>
            </form>

            {error && (
                <div className="mt-2 text-center text-red-600">{error}</div>
            )}
        </div>
    )
}

export default ChatPage