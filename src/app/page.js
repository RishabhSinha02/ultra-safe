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
      <Footer />


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
      <div className="tutorial-upper text-4xl font-bold mx-16 mt-8">
        Tutorials
      </div>
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 mb-8">
  <div className="relative z-10 max-w-screen-xl px-4 sm:py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-justify font-medium text-lg sm:ml-auto">
      Our safety tips service provides essential guidelines and recommendations to enhance safety in various settings. These tips cover a wide range of safety topics, including fire safety, to help individuals and organizations minimize risks and ensure the well-being of occupants and employees.
    </div>
  </div>
  <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
    <div className="relative z-20 video rounded-2xl">
      <iframe className="rounded-2xl" allow='autoplay' width="560" height="315" src="https://www.youtube.com/embed/Q3LDGOFxJAE?si=9cR_qC1Ni4kyWFC_?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</aside>
      
    </div>
  );
};

const Footer = () => {
  return(
    <div className="footer">
      <div>
        {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <footer className="relative pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Find us on any of these platforms, we respond 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-twitter" /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-github" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © <span id="get-current-year">2021</span><a href="/" className="text-blueGray-500 hover:text-gray-800" target="_blank"> ULTRA SAFE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};