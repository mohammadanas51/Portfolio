"use client";

import React from "react";
import { motion } from "framer-motion";
import { Source_Code_Pro } from "next/font/google";
import { JetBrains_Mono } from 'next/font/google';


const sourceCodeFont = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sourceCode",
});

const jetBrains = JetBrains_Mono({
  subsets:["latin"],
  weight : "400",
  variable : "--font-jetBrains",
});

const Skills = () => {
  return (
    <div className="text-center">
      <p className={`${jetBrains.variable}`}>
        Skills
      </p>
    </div>
  );
};

export default Skills;
