import { get } from 'http';
import React from 'react'

interface Projects{
  title: string;
  description: string;
  liveUrl: string;
  githubRepo: string;
}



// async function getProjects(): Promise<Projects[]>{
//   const result = await fetch('http://localhost:4000/projects');
//   return result.json() ;
// }


async function Projects() {
  // const projects = await getProjects() ;


  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <p className="font-bold mr-65">Proof Of Work</p>
      <div className="cards">
        <div className="cardOne outline-2 outline-offset-2 outline-blue-500 ">
          <div className="titleLink flex justify-between">
            <h1>CommitPay</h1>
            <a
              href="https://commitpay-mvp.web.app/"
              className="text-emerald-300"
              target='_blank'
            >
              Live Link
            </a>
          </div>
          <p>Description</p>
          <div className="desc">
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>
                A bootstrapped SaaS platform that helps open-source maintainers
                post paid beginner-friendly issues, making it easier for new
                developers to earn through real-world contributions.
              </li>

              <li>
                Launched the MVP using React, Firebase, and Firestore, and grew
                to 35+ signups with early adopter maintainers listing paid tasks
                — all within the first few weeks.
              </li>

              <li>
                Built with a product-first mindset, CommitPay reflects my
                entrepreneurial drive to solve real developer problems through
                lean, user-focused iteration.
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects