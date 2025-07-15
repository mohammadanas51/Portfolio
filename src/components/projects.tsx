import React from 'react'

interface Projects{
  title: string;
  description: string;
  liveUrl: string;
  githubRepo: string;
}

async function getProjects(): Promise<Projects[]>{
  const result = await fetch('http://localhost:4000/projects');
  return result.json() ;
}


function Projects() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
        <p className="font-bold mr-65">Proof Of Work</p>
        <p>Cards</p>
   </div>
  )
}

export default Projects