"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Source_Code_Pro } from 'next/font/google';
import { div } from 'motion/react-client';

const sourceCodeFont = Source_Code_Pro({
  subsets:["latin"],
  weight : "400",
  variable : "--font-sourceCode",
})



const Skills = () =>{
    return(
        <div className={`text-center mt-5 text-4xl ${sourceCodeFont.variable}`}>
        Skills
    </div>
    )
    
}


export default Skills 