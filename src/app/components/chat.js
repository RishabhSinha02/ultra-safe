'use client'
import React, { useState } from "react";
import nlp from "compromise";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [responseMessages, setResponseMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { user: true, message }]);

    // Process user input and generate a response using predefined questions and answers
    const response = generateChatbotResponse(message);
    document.getElementById("user-input").value = "";
    setTimeout(() => {
      setResponseMessages([
        ...responseMessages,
        { user: false, message: response },
      ]);
    }, 500);
  };

  const generateChatbotResponse = (userMessage) => {
    // Define predefined questions and answers
    const predefinedQA = {
      "What is a fire extinguisher?":
        "A fire extinguisher is a crucial safety device for putting out small fires.",
      "How does a fire extinguisher work?":
        "A fire extinguisher works by releasing a fire-suppressing agent, such as water or foam, to extinguish a fire. The specific mechanism depends on the type of fire extinguisher.",
      "What types of fire extinguishers are there?":
        "There are several types of fire extinguishers, including water, foam, CO2, dry powder, and more. Each type is designed to extinguish specific types of fires.",
      "Where should I place a fire extinguisher at home?":
        "It's recommended to place a fire extinguisher in easily accessible areas of your home, such as the kitchen, garage, and near any potential fire hazards.",
      "How often should I inspect my fire extinguisher?":
        "You should inspect your fire extinguisher at least once a month to ensure it's in good working condition.",
      // Add more questions and answers here
    };

    // Process the user message using the compromise library
    const doc = nlp(userMessage);
    console.log("doc: " + doc);
    console.log(userMessage);
    // Check if the user's message matches a predefined question
    for (const question in predefinedQA) {
      if (doc.has(question.toLowerCase())) {
        return predefinedQA[question];
      }
    }

    // If no matching question was found, provide a default response
    return "I'm sorry, I don't understand. Please ask another question.";
  };

  const [isChatboxOpen, setIsChatboxOpen] = useState(true);

  const handleCloseChatbox = () => {
    setIsChatboxOpen(false);
  };

  return (
    <>
      {isChatboxOpen ? (
        <div className="fixed bottom-16 right-4 w-96">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-gray-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Expert Bot</p>
              <button
                id="close-chat"
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-white"
                onClick={handleCloseChatbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              id="chatbox"
              className="p-4 h-80 overflow-y-auto flex flex-col justify-end"
            >
              <div className="overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    className={`mb-2 ${message.user ? "text-right" : ""}`}
                    key={index}
                  >
                    <p className="bg-orange-200 rounded-lg py-2 px-4 inline-block">
                      {message.message}
                    </p>
                  </div>
                ))}
                {responseMessages.map((message, index) => (
                  <div
                    className={`mb-2 ${message.user ? "text-right" : ""}`}
                    key={index}
                  >
                    <p
                      className="border border-orange-200 rounded-lg py-2 px-4 inline-block"
                      style={{ color: "black" }}
                    >
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t flex">
                <input
                  id="user-input"
                  type="text"
                  style={{ color: "black" }}
                  placeholder="Type a message"
                  className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  id="send-button"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300"
                  onClick={() =>
                    handleSendMessage(
                      document.getElementById("user-input").value
                    )
                  }
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Chat;