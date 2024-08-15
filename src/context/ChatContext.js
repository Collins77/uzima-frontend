import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const BACKEND = 'http://localhost:5000'
// const BACKEND = 'https://uzima-backe.vercel.app'

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [threadId, setThreadId] = useState(null);

  const createThread = async () => {
    const response = await axios.get(`${BACKEND}/api/assistant/create-thread`);
    return response.data;
  };

  const sendMessage = async (message) => {
    if (!threadId) return;
    const response = await axios.post(`${BACKEND}/api/assistant/add`, {
      message,
      threadId,
    });
    setMessages((prevMessages) => [...prevMessages, ...response.data.messages]);
  };

  return (
    <ChatContext.Provider value={{ createThread, sendMessage, messages, setThreadId }}>
      {children}
    </ChatContext.Provider>
  );
};
