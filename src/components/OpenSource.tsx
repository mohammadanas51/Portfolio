"use client";

import React from "react";
import ProjectCard from "./projectCards";

import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import OpenSourceCard from "./OpenSourceCards";

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

        <OpenSourceCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/96"
          descriptionPoints={[
            "Fixed a UI bug where the content behind the sidebar would become black",
          ]}
        />
        <OpenSourceCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/95"
          descriptionPoints={[
            "Fixed a UI bug where the navbar was causing bad UX in mobile view.",
          ]}
        />

        <OpenSourceCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/63"
          descriptionPoints={[
            "Added Confirm Password input field to the Signup Page.",
          ]}
        />

        <OpenSourceCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/47"
          descriptionPoints={[
            "Redesigned the 404 Not Found Page.",
          ]}
        />


        <OpenSourceCard
          title="Prepnerdz"
          link="https://github.com/Shubhashish-Chakraborty/prepnerdz/pull/42"
          descriptionPoints={[
            "Added a testimonial page to their platform.",
          ]}
        />

        <OpenSourceCard
          title="Kestra-io"
          link="https://github.com/kestra-io/plugin-notifications/pull/243"
          descriptionPoints={[
            "Fixed the Slack icon's padding to make it consistent across pages.",
          ]}
        />

        <OpenSourceCard
          title="freeCodeCamp"
          link="https://github.com/freeCodeCamp/contribute/pull/743"
          descriptionPoints={[
            "Added hover effects to the cards in the landing page.",
          ]}
        />

      </div>
    </div>
  );
}

export default OpenSource;
