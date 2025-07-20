"use client";

import React from 'react'
import { JetBrains_Mono } from 'next/font/google';


const jetBrains = JetBrains_Mono({
  subsets:["latin"],
  weight : "400",
  variable : "--font-jetBrains",
});

function HeroSection() {
  return (
    <div className="mt-10 flex justify-center">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="heroChild w-250 px-5 text-center">
        {/* <p className={`font-bold ${jetBrains.variable} text-3xl`}>About Me</p> */}
        <div className={`font-bold text-3xl ${jetBrains.variable} `}> About Me</div>
        <div className="aboutMeMsg text-2xl">
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>
              A Full Stack Developer with expertise in ReactJS, NodeJS and
              ExpressJS
            </li>
            <li>
              I use MySQL or MongoDB for data storage depending on the project
              requirments
            </li>
            <li>
              I prefer using TypeScript to ensure no bugs come up in production
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection ;