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
              <DiGithubBadge size={24} />
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                GitHub
              </span>
            </li>

            {/* LinkedIn */}
            <li className="relative group flex flex-col items-center">
              <FaLinkedin size={20} />
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                LinkedIn
              </span>
            </li>

            {/* Twitter */}
            <li className="relative group flex flex-col items-center">
              <FaTwitter size={20} />
              <span className="absolute -top-6 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                Twitter
              </span>
            </li>

            {/* Resume */}
            <li className="relative group flex flex-col items-center">
              <IoIosDocument size={22} />
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
  