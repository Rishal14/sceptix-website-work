import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import Image from "./L1.png";
const HandleClick = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
const Footer = () => {
  const socialIcons = [
    {
      name: "Github",
      link: "https://github.com/sceptix-club",
      icon: <AiFillGithub size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/sceptix/",
      icon: <AiFillLinkedin size={24} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sceptix_sjec/",
      icon: <AiFillInstagram size={24} />,
    },
    {
      name: "Mail",
      link: "mailto:sceptix@sjec.ac.in",
      icon: <AiFillMail size={24} />,
    },
  ];

  return (
    <footer className="bg-black-700 py-4 text-white ">
      {" "}
      <hr className="border-t border-gray-1000 my-6" />{" "}
      {/* <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </div> */}
      <div className="container mx-auto px-6 md:px-10 mt-4 text-center"></div>
      <div className="container mx-auto pr-4 pl-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
              <img
                src={Image}
                alt="logo"
                className="max-w-full h-auto w-21 mx-auto mb-4"
              />
              <p className="text-xl  font-semibold ">
                St. Joseph Engineering College
              </p>
              <p className="text-sm">Vamanjoor, Mangaluru, Karnataka 575028</p>
            </div>
          
            <div className="md:mt-6 lg:mt-0 justify-self-center ">
              <br />
              <br />
              <br />
              <br />
              <div className="mb-6" onClick={HandleClick}>
                <h1 className="text-3xl font-semibold">About Us</h1>
                <br />
                <Link
                  to="/"
                  className={`text-2xl cursor-pointer block ${
                    location.pathname === "/"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Home
                </Link>
              </div>
              <div onClick={HandleClick} className="mb-6">
                <Link
                  to="/events"
                  className={`text-2xl cursor-pointer block ${
                    location.pathname === "/events"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Events
                </Link>
              </div>
              <div onClick={HandleClick} className="mb-6">
                <Link
                  to="/members"
                  className={`text-2xl cursor-pointer block ${
                    location.pathname === "/members"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Members
                </Link>
              </div>
            </div>

          <div className="md:mt-6 lg:mt-0">
            <br />
            <br />
            <br />
            <br />
            <div className="mb-6">
              <h1 className="text-3xl font-semibold">Contact Us</h1>
            </div>
            <div className="flex flex-col space-y-7">
              {socialIcons.map((socialIcon) => (
                <a
                  className="flex items-center hover:text-blue-500 transition-colors duration-300"
                  href={socialIcon.link}
                  key={socialIcon.name}
                >
                  {socialIcon.icon}
                  <br />
                  <span className="ml-2 text-2xl">{socialIcon.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-10 pt-8 text-center">
        <p className="text-md">
          @{new Date().getFullYear()} Sceptixclub. All rights reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
