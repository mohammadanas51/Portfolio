"use client";
import React from "react";
import { motion } from "framer-motion";
import { JetBrains_Mono } from 'next/font/google';
import {Space_Grotesk} from 'next/font/google' ;

const jetBrains = JetBrains_Mono({
  subsets:["latin"],
  weight : "400",
  variable : "--font-jetBrains",
});

const spaceGrotesk = Space_Grotesk({
  subsets:["latin"],
  weight : "400",
  variable : "--font-spaceGrotesk",
})

interface OpenSourceCardProps {
  title: string;
  link: string;
  descriptionPoints: string[];
}

const OpenSourceCard : React.FC<OpenSourceCardProps> = ({
  title,
  link,
  descriptionPoints,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-[90%] sm:max-w-3xl mx-auto mt-4 sm:mt-6 px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-2 border-blue-500 rounded-xl shadow-md  duration-300 hover:shadow-lg"
    >
      <div className={`flex justify-around items-center ${jetBrains.variable}`}>
        <h1 className="text-2xl font-semibold text-white font-heading">
          {title}
        </h1>
        <a
          href={link}
          className="text-emerald-500 underline text-2xl transition-colors hover:text-emerald-600 focus:text-emerald-700 font-heading"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          View PR
        </a>
      </div>
      <div className={`${spaceGrotesk.variable}`}>
        <p className="mt-2 text-xl text-white font-body">
        Description
      </p>  
      </div>
      
      <div className={`mt-2 ${spaceGrotesk.variable}`}>
        <ul className="list-disc list-inside space-y-1 text-base text-white font-body">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="break-words">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default OpenSourceCard 