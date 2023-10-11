'use client'
import Chat from './components/chat';
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
      <nav className="bg-white px-4 py-2 flex justify-between">
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
          <button className="py-2 px-5 border rounded-xl bg-red-600 text-white border-white hover:bg-orange-600">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center">
      <button
        className="fixed bottom-0 right-0 mb-4 mr-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
        onClick={handleOpenChatbox}
      >
        Chat with Expert
      </button>
      {isChatboxOpen && <Chat />}
    </div>
    </main>
  )
}
