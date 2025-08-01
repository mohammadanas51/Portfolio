"use client";

import React from "react";

import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetBrains",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-spaceGrotesk",
});

function OpenSource() {
  return (
    <div className={`${jetBrains.variable} text-center mt-10`}>
      <div className={`font-bold text-3xl font-heading `}> Open Source Contributions</div>
    </div>
  );
}

export default OpenSource;
