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
      <div className="upper-body bg-gray-200 p-4">
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

      <OurServices />
      <Tutorial />

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




const OurServices = () => {
  return (
    <div className="our-services bg-white p-8">
      <div className="service-upper text-4xl font-bold p-8 mx-8">
        Our Services
      </div>

      <div>
        <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
        {/* ====== Cards Section Start */}
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10 text-center">
                  <img src="/img/community.svg" alt="image" className="h-60 w-full p-12" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="javascript:void(0)" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Community Forum
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                    Our community forum provides a platform for discussing fire safety topics, sharing experiences, and connecting with others interested in fire safety. It fosters a sense of community and knowledge sharing.
                   </p>
                    <a href="javascript:void(0)" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10">
                <img src="/img/tips.svg" alt="image" className="h-60 w-full p-4" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="javascript:void(0)" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Fire-Related Tips
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                    We offer valuable fire-related tips and guidance to help individuals and organizations prevent fires and respond effectively in case of emergencies. These tips cover various aspects of fire safety.
                    </p>
                    <a href="javascript:void(0)" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10">
                <img src="/img/report.svg" alt="image" className="h-60 w-full p-4" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="javascript:void(0)" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Report the Incident
                      </a>
                    </h3>
                    <p className="text-base text-body-color text-justify leading-relaxed mb-7">
                    In the event of a fire incident, our service enables users to report the incident promptly and efficiently. This reporting system can help in emergency response for analysis and prevention.
                    </p>
                    <a href="javascript:void(0)" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* ====== Cards Section End */}
      </div>
    </div>

  );
};



const Tutorial = () => {
  return(
    <div className="tutorial bg-gray-200 p-8">
      <div className="tutorial-upper text-4xl font-bold p-8 mx-8">
        Tutorials
      </div>
      <div className="video mt-4 mx-60">
      <div class="aspect-w-16 aspect-h-9">
      <iframe className="video rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/Q3LDGOFxJAE?si=9cR_qC1Ni4kyWFC_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
      </div>
      <div className="tutorial-sub text-xl mt-12 mx-16">
      Our safety tips service provides essential guidelines and recommendations to enhance safety in various settings. These tips cover a wide range of safety topics, including fire safety, to help individuals and organizations minimize risks and ensure the well-being of occupants and employees.
      </div>
      
    </div>
  );
};