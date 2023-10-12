"use client";
import Chat from "./components/chat";
import { useState } from "react";

export default function Home() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const handleOpenChatbox = () => {
    if (isChatboxOpen) {
      setIsChatboxOpen(false);
    } else {
      setIsChatboxOpen(true);
    }
  };

  return (
    <main className="min-h-screen">
      <nav className="bg-white px-24 py-2 flex justify-between">
        <div className="flex items-center">
          <img className="nav-logo h-16" src="/img/logo.png" />
        </div>
        <ul className="flex font-sans items-center space-x-11 py-3 px-48">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex justify-center items-center">
          <button className="py-2 px-5 border rounded-xl bg-gray-600 text-white border-white hover:bg-orange-600">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="upper-body bg-gray-200 p-8">
        <div className="main-body flex m-24">
          <div className="home-body flex-1">
            <div className="content text-6xl font-bold mr-52">
              Ultra Safe: AI-Powered Fire Safety Solutions
            </div>
            <div className="sub-cotent mr-52 mt-8">
              Ultra Safe is a cutting-edge fire safety consultancy that
              leverages AI-powered chatbots to enhance fire safety in building
              and factory construction. Our services help construction companies
              ensure fire safety compliance, reduce risks, and create safer
              environments for occupants.
            </div>
            <div className="home-body-get-staeted mt-8">
              <button className="button bg-orange-400 hover:bg-orange-600 text-white font-bold p-4 px-8 rounded-xl">
                Get Start
              </button>
            </div>
          </div>
          <div className="body-img">
            <img className="nav-logo h-96" src="/img/home-gif.gif" />
          </div>
        </div>
      </div>

      <div className="our-services bg-white p-8">
        <div className="service-upper text-4xl font-bold p-8">
          Our Services
        </div>
      </div>

      {/* CHatbot Button  */}
      <div className="flex flex-col justify-center items-center">
        <button
          className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
          onClick={handleOpenChatbox}
        >
          Chat with Expert
        </button>
        {isChatboxOpen && <Chat />}
      </div>
    </main>
  );
}
