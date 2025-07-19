import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


function NavBar() {
  return (
    <div className="navParent flex justify-center ">
        <div className="navChild h-10 bg-white/10 backdrop-blur text-white flex justify-center items-center mt-5 w-110 sm:w-110 md:w-100 rounded">

        <div className="navContents">
            <ul className="flex justify-center items-center space-x-4 cursor-pointer">
                <li><DiGithubBadge /></li>
                <li><FaLinkedin /></li>
                <li><FaTwitter /></li>
                <li><IoIosDocument /></li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </div>
    
       
  )
}

export default NavBar