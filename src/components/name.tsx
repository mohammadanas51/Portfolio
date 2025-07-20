"use client";

import React from 'react'
import { motion } from "framer-motion"

function Name() {
  return (
    <div className="text-center mt-5 text-4xl">
       <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" text-white"
      >
        Hi, I'm Mohammad Anas!
      </motion.button> 
    </div>
  )
}

export default Name