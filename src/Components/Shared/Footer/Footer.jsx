import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Logo from "../../Common/Logo/Logo";

const Footer = () => {
  return (
    <>
      <footer className="text-indigo-500 custom-bg  footers text-center py-4">
        <div className="mx-auto ">
          <h1 className="text-center flex justify-center">
            <Logo></Logo>
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2
           lg:grid-cols-3 gap-3 md:gap-0 lg:gap-3 "
          >
            {/* Nav links */}
            <div className="lg:mt-7 ">
              <h3
                className="text-lg 
              text-black font-semibold mb-2 "
              >
                Quick Links
              </h3>
              <ul className="space-y-2 font-medium ">
                <li>
                  <button
                    className="hover:text-red-800 hover:underline  
                    "
                  >
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-red-800 hover:underline  
                    "
                  >
                    <Link to="/all-products">Products</Link>
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-red-800 hover:underline  
                    "
                  >
                    <Link to="/about">About</Link>
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal  */}
            <div className="lg:mt-7 my-3 md:mt-0">
              <h3 className="text-lg text-black font-semibold mb-4 ">
                Legal & Services
              </h3>
              <ul className="space-y-2 font-medium">
                <li>
                  <button
                    className="hover:text-red-800 hover:underline
                      "
                  >
                    <Link to="/contact">Contact</Link>
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-red-800 hover:underline  
                    "
                  >
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-red-800 hover:underline
                      "
                  >
                    <Link to="/terms-condition">Terms & Conditions</Link>
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center md:col-span-2
             lg:col-span-1 lg:mt-7"
            >
              {/* Social Media Links*/}
              <h3 className="text-lg text-black font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <div
                  className="text-sm gap-2
                 font-bold flex 
                   flex-col hover:text-red-800  
                  duration-300  "
                >
                  <SocialIcon
                    url="https://www.youtube.com/"
                    className="hover:text-red-800 w-14  ml-2
                   h-14 bg-blue-800 rounded-full flex items-center justify-center"
                  ></SocialIcon>

                  <span className="lg:mt-2"> Youtube</span>
                </div>

                <div
                  className=" text-sm gap-2
                 font-bold flex
                   flex-col hover:text-red-800  
                  duration-300  "
                >
                  <SocialIcon
                    url="https://x.com"
                    className="hover:text-red-800 w-14 
                   h-14 bg-blue-800 rounded-full flex items-center justify-center"
                  ></SocialIcon>

                  <span className="lg:mt-2">Twitter</span>
                </div>

                <div
                  className="text-sm gap-2
                 font-bold flex
                   flex-col hover:text-red-800  
                  duration-300  "
                >
                  <SocialIcon
                    url="https://github.com/shehabislam99"
                    className="hover:text-red-800 w-14 
                   h-14 bg-blue-800 rounded-full flex items-center justify-center"
                  ></SocialIcon>

                  <span className="lg:mt-2"> GitHub</span>
                </div>

                <div
                  className="text-sm gap-2
                 font-bold flex
                   flex-col hover:text-red-800 
                  duration-300  "
                >
                  <SocialIcon
                    url="https://www.linkedin.com/"
                    className="hover:text-red-800 w-14   
                   h-14 bg-blue-800 rounded-full flex items-center justify-center"
                  ></SocialIcon>

                  <span className="lg:mt-2 "> LinkedIn </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center bg-indigo-500 items-center p-2 font-semibold ">
        @ {new Date().getFullYear()} Textile Flow. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

