import React from 'react'

function HeroSection() {
  return (
    <div className="mt-10 flex justify-center">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="heroChild w-110 sm:w-90 px-5 md:w-100">
        <p className="font-bold">About Me</p>
        <div className="aboutMeMsg">
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>A Full Stack Developer with expertise in ReactJS, NodeJS and ExpressJS</li>
            <li>I use MySQL or MongoDB for data storage depending on the project requirments</li>
            <li>I prefer using TypeScript to ensure no bugs come up in production</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroSection ;