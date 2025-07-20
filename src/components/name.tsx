"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Source_Code_Pro } from 'next/font/google';

const sourceCodeFont = Source_Code_Pro({
  subsets:["latin"],
  weight : "400",
  variable : "--font-sourceCode",
})

function Name() {
  return (
    <div className={`text-center mt-5 text-4xl ${sourceCodeFont.variable}`}>
       <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" text-white font-main"
      >
        Hi, I'm Mohammad Anas!
      </motion.button> 
    </div>
  )
}

export default Name