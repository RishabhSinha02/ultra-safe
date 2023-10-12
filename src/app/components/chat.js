'use client'
import React from "react";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [responseMessages, setResponseMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { user: true, message }]);

    // Replace this with your chatbot logic
    setTimeout(() => {
      setResponseMessages([...responseMessages, { user: false, message: "This is a response from the chatbot." }]);
    }, 500);
  };

  const [isChatboxOpen, setIsChatboxOpen] = useState(true);

  const handleCloseChatbox = () => {
    setIsChatboxOpen(false);
  };

  return (
    <>
    {isChatboxOpen ?
    <div className="fixed bottom-16 right-4 w-96">
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
        <div className="p-4 border-b bg-gray-500 text-white rounded-t-lg flex justify-between items-center">
          <p className="text-lg font-semibold">Expert Bot</p>
          <button id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-white" onClick={handleCloseChatbox}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div id="chatbox" className="p-4 h-80 overflow-y-auto flex flex-col justify-end">
          <div className="overflow-y-auto">
          {messages.map((message, index) => (
            <div className={`mb-2 ${message.user ? "text-right" : ""}`} key={index}>
              <p className="bg-orange-200 rounded-lg py-2 px-4 inline-block">{message.message}</p>
            </div>
          ))}
          {responseMessages.map((message, index) => (
            <div className={`mb-2 ${message.user ? "text-right" : ""}`} key={index}>
              <p className="border border-orange-200 rounded-lg py-2 px-4 inline-block">{message.message}</p>
            </div>
          ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              id="send-button"
              className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300"
              onClick={() => handleSendMessage(document.getElementById("user-input").value)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>: <div></div>}
    </>
  );
};

export default Chat;
