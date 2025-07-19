import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

function NavBar() {
  return (
    <div className="navParent flex justify-center">
      <div className="navChild h-10 bg-white/10 backdrop-blur text-white flex justify-center items-center mt-5 w-110 sm:w-110 md:w-100 rounded">
        <div className="navContents">
          <ul className="flex justify-center items-center space-x-6 cursor-pointer">

            {/* GitHub */}
            <li className="relative group flex flex-col items-center">
              <a
                href="https://github.com/mohammadanas51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubBadge size={24} />
              </a>
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                GitHub
              </span>
            </li>

            {/* LinkedIn */}
            <li className="relative group flex flex-col items-center">
              <a
                href="https://www.linkedin.com/in/mohammadanas51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                LinkedIn
              </span>
            </li>

            {/* Twitter */}
            <li className="relative group flex flex-col items-center">
              <a
                href="https://x.com/MA76305"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Twitter
              </span>
            </li>

            {/* Resume */}
            <li className="relative group flex flex-col items-center">
              <a href="https://drive.google.com/file/d/1PXhTzrtkVTC9MpNYy01sL0SyFfWTYn6g/view" target="_blank"
                rel="noopener noreferrer">
                <IoIosDocument size={22} />
              </a>
              
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Resume
              </span>
            </li>
    
            {/* Contact */}
            <li className="relative group flex flex-col items-center">
              <span className="text-sm">Contact</span>
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Contact
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
