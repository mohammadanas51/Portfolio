"use client";

import React from 'react'
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



function HeroSection() {
  return (
    <div className="mt-10 flex justify-center">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className={`heroChild w-250 px-5 text-center ${jetBrains.variable}`}>
        
        <div className={`font-bold text-3xl font-heading `}> About Me</div>

        <div className={`aboutMeMsg text-2xl ${spaceGrotesk.variable}`}>
          <ul className="mt-2 list-disc list-inside space-y-2 font-body">
            <li>
              Open Source Contributor
            </li>
            <li>
              A Full Stack Developer with expertise in ReactJS, NodeJS and
              ExpressJS.
            </li>
            
            <li>
              I use MySQL or MongoDB for data storage depending on the project
              requirments.
            </li>
            <li>
              I prefer using TypeScript to ensure no bugs come up in production.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection ;