import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);

  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = (message) => {
    const userMessage = { user: true, message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = generateChatbotResponse(message);
    const botMessage = { user: false, message: botResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    document.getElementById("user-input").value = "";
  };

  const generateChatbotResponse = (userMessage) => {
    const predefinedQA = {
      "Hello": "Hello, how can I help you?",
      "hii": "Hello, how can I help you?",
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
      "Can I use a fire extinguisher on any type of fire?":
        "No, fire extinguishers are designed for specific types of fires. Using the wrong type of extinguisher on a fire can be ineffective or even dangerous. Make sure you know the type of fire you're dealing with before using an extinguisher.",
      "What are the different fire classes?":
        "Fires are classified into different classes, including Class A (ordinary combustibles like wood and paper), Class B (flammable liquids), Class C (electrical fires), Class D (metal fires), and Class K (kitchen fires involving cooking oils and fats).",
      "How do I use a fire extinguisher?":
        "To use a fire extinguisher, remember the acronym 'PASS': Pull the pin, Aim the nozzle at the base of the fire, Squeeze the handle, and Sweep the nozzle from side to side.",
      "What is the shelf life of a fire extinguisher?":
        "The shelf life of a fire extinguisher varies depending on the type and manufacturer. It's typically 5 to 15 years. Check the label for the expiration date.",
      "How can I maintain my fire extinguisher?":
        "Regular maintenance includes checking the pressure gauge, inspecting for visible damage, and ensuring the extinguisher is easily accessible. Refer to the manufacturer's guidelines for specific maintenance instructions.",
      "Can I recharge a used fire extinguisher?":
        "Yes, many fire extinguishers can be refilled and recharged after use. Consult a professional fire equipment service to handle the recharge process.",
      "What should I do if my fire extinguisher is damaged or expired?":
        "If your fire extinguisher is damaged or expired, it should be replaced or serviced immediately. Do not use an expired or damaged extinguisher.",
      "Are there different sizes of fire extinguishers?":
        "Yes, fire extinguishers come in various sizes and capacities to suit different applications. Common sizes include 2.5 lb, 5 lb, 10 lb, and larger.",
      "What is the difference between a fire extinguisher and a fire hose reel?":
        "A fire extinguisher is a portable device for putting out small fires, while a fire hose reel is a fixed firefighting equipment typically used for larger fires or to provide a water source in emergency situations.",
      "Can I test my fire extinguisher myself?":
        "It's not recommended to test a fire extinguisher yourself. Leave testing and maintenance to professionals to ensure it's done correctly.",
      "Is it necessary to have fire extinguishers in a commercial building?":
        "Yes, most commercial buildings are required to have fire extinguishers to comply with fire safety regulations and ensure the safety of occupants.",
      "Are there any legal requirements for fire extinguishers at home?":
        "In many places, there are no specific legal requirements for fire extinguishers in residential homes, but having one is strongly recommended for safety.",
      "What should I do in case of a large or spreading fire?":
        "For large or spreading fires, it's important to evacuate the area immediately and call emergency services. A fire extinguisher is only suitable for small, contained fires.",
      "How can I dispose of an old fire extinguisher?":
        "Old fire extinguishers should be disposed of properly. Contact your local hazardous waste disposal center for guidance on safe disposal.",
      "Can I refill a fire extinguisher myself?":
        "Refilling a fire extinguisher should be done by professionals to ensure it's filled correctly and pressurized to the appropriate level.",
      "How do I know when to use a fire extinguisher and when to call 911?":
        "In the event of a fire, always prioritize safety. If the fire is small and manageable, you can attempt to use a fire extinguisher. However, if the fire is large, spreading quickly, or poses a significant risk, call 911 immediately and evacuate the area.",
      "What are the common fire extinguisher labels and their meanings?":
        "Fire extinguishers have labels indicating the types of fires they are suitable for and their intended use. Common labels include A (for Class A fires), B (for Class B fires), C (for Class C fires), D (for Class D fires), and K (for Class K fires). Familiarize yourself with these labels to choose the right extinguisher for specific fire types.",
      "What is the difference between a fire extinguisher and a fire blanket?":
        "A fire extinguisher is a device that sprays a fire-suppressing agent to extinguish a fire, while a fire blanket is used to smother small fires or wrap around a person on fire to extinguish flames. Fire blankets are typically used for small kitchen fires and personal safety.",
      "What are the main components of a fire extinguisher?":
        "A typical fire extinguisher consists of a cylinder, a pressure gauge, a safety pin, a handle, a nozzle, and the fire-suppressing agent inside.",
      "Can a fire extinguisher be used multiple times?":
        "It depends on the type of fire extinguisher. Some can be used multiple times if they are refillable, while others are single-use extinguishers and cannot be reused.",
      "What is the difference between a fire extinguisher and a fire alarm system?":
        "A fire extinguisher is a device used to suppress fires, while a fire alarm system is designed to detect fires and provide early warning to occupants. They serve different purposes in fire safety.",
      "Do fire extinguishers have expiration dates?":
        "Yes, fire extinguishers typically have expiration dates. Check the label for the date, and replace or service the extinguisher when it expires.",
      "Can I use a fire extinguisher on a gas fire or propane fire?":
        "Using a fire extinguisher on a gas or propane fire can be dangerous. It's best to shut off the gas supply and call the fire department for such fires.",
      "How do I store a fire extinguisher in a car or vehicle?":
        "If you keep a fire extinguisher in a vehicle, store it securely in a bracket or holder to prevent it from rolling around. Ensure it is easily accessible in case of emergencies.",
      "Are there fire extinguishers specifically for automotive use?":
        "Yes, there are fire extinguishers designed for automotive use. They are typically smaller and suitable for extinguishing vehicle-related fires.",
      "What is the proper way to dispose of an expired fire extinguisher?":
        "To dispose of an expired fire extinguisher, contact your local hazardous waste disposal center or a fire equipment service for guidance on safe disposal methods.",
      "Can fire extinguishers be used on wildfires or forest fires?":
        "Fire extinguishers are not effective for extinguishing large-scale wildfires or forest fires. Such fires require the expertise of trained firefighters and specialized equipment.",
      "What is the importance of fire safety training?":
        "Fire safety training is crucial to educate individuals on how to prevent fires, use fire safety equipment like extinguishers, and evacuate safely in case of fire emergencies.",
      "Are there different types of fire extinguisher nozzles?":
        "Yes, fire extinguishers may have different nozzle types, such as spray nozzles for wide coverage and cone nozzles for concentrated discharge. The nozzle type depends on the extinguisher's intended use.",
      "Can I use a fire extinguisher on an oil fire or grease fire?":
        "For oil or grease fires, use a Class K fire extinguisher designed for kitchen fires. Never use water on these fires, as it can worsen the situation.",
      "What is the difference between a fire extinguisher and a fire suppressor system?":
        "A fire extinguisher is a portable device used to put out fires manually, while a fire suppressor system is an automated system that activates when it detects a fire to suppress it.",
      "How do I choose the right fire extinguisher for my home or business?":
        "To choose the right fire extinguisher, consider the potential fire hazards in your environment and select an extinguisher that matches the types of fires you might encounter.",
      "Are there special considerations for fire extinguishers in industrial settings?":
        "In industrial settings, fire extinguishers may need to meet specific regulations and be tailored to the types of hazards present. Consult with experts in industrial fire safety.",
      "What are the limitations of fire extinguishers?":
        "Fire extinguishers have limitations, including limited capacity and range. They are most effective on small, contained fires. Large or rapidly spreading fires may require professional firefighting equipment.",
      "Can I use a fire extinguisher on an electrical fire involving live wires?":
        "No, using a fire extinguisher on electrical fires with live wires can be dangerous due to the risk of electrical shock. For such fires, de-energize the power source or call the fire department.",
      "Are there fire extinguishers designed for specific industries or applications?":
        "Yes, specialized fire extinguishers are available for specific industries, such as the aviation industry, chemical plants, and laboratories, tailored to their unique fire risks.",
      "What are the key features to look for when buying a fire extinguisher?":
        "When buying a fire extinguisher, consider factors like the extinguisher's type, size, fire class ratings, and ease of use to ensure it meets your specific needs and requirements.",

      // Add more questions and answers here
    };

    // Check if the user's message matches a predefined question
    for (const question in predefinedQA) {
      if (userMessage.toLowerCase() === question.toLowerCase()) {
        return predefinedQA[question];
      }
    }

    // If no matching question was found, provide a default response
    return "I'm sorry, I don't understand. Please ask another question.";
  };

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
                className="text-gray-300 hover-text-gray-400 focus-outline-none focus-text-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              id="chatbox"
              className="p-4 h-80 overflow-y-auto flex flex-col justify-end"
              ref={chatboxRef}
            >
              <div className="overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    className={`mb-2 ${message.user ? "text-right" : ""}`}
                    key={index}
                  >
                    <p
                      className={`rounded-lg py-2 px-4 inline-block ${
                        message.user
                          ? "bg-orange-200"
                          : "border border-orange-200"
                      }`}
                    >
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t flex">
              <input
                id="user-input"
                style={{ color: "black" }}
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus-outline-none focus-ring-2 focus-ring-orange-500"
              />
              <button
                id="send-button"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover-bg-orange-600 transition duration-300"
                onClick={() => {
                  const userInput = document.getElementById("user-input").value;
                  if (userInput) {
                    handleSendMessage(userInput);
                  }
                }}
              >
                Send
              </button>
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