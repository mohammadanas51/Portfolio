"use client";

import React from "react";
import ProjectCard from "./projectCards";

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
      <div className="cards">
        <ProjectCard
          title="freeCodeCamp"
          link="https://github.com/freeCodeCamp/contribute/pull/743"
          descriptionPoints={[
            "Added hover effects to the cards in the landing page.",
          ]}
        />

        <ProjectCard
          title="Kestra-io"
          link="https://github.com/kestra-io/plugin-notifications/pull/243"
          descriptionPoints={[
            "Fixed the Slack icon's padding to make it consistent across pages.",
          ]}
        />
        <ProjectCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/42"
          descriptionPoints={[
            "Added a testimonial page to their platform.",
          ]}
        />
        <ProjectCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/47"
          descriptionPoints={[
            "Redesigned the 404 Not Found Page.",
          ]}
        />
        <ProjectCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/63"
          descriptionPoints={[
            "Added Confirm Password input field to the Signup Page.",
          ]}
        />
      </div>
    </div>
  );
}

export default OpenSource;
