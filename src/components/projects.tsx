import React from "react";
import ProjectCard from "./projectCards";
const Projects: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <p className="font-bold mr-65">Proof Of Work</p>
      <div className="cards">
        <ProjectCard
          title="CommitPay"
          link="https://commitpay-mvp.web.app/"
          descriptionPoints={[
            "A bootstrapped SaaS platform that helps open-source maintainers post paid beginner-friendly issues, making it easier for new developers to earn through real-world contributions.",
            "Launched the MVP using React, Firebase, and Firestore, and grew to 35+ signups with early adopter maintainers listing paid tasks — all within the first few weeks.",
            "Built with a product-first mindset, CommitPay reflects my entrepreneurial drive to solve real developer problems through lean, user-focused iteration.",
          ]}
        />

        <ProjectCard
          title="CommitPay Waitlist"
          link="https://commit-pay-waitlist.netlify.app/"
          descriptionPoints={[
            "Launched a pre-MVP waitlist for CommitPay to validate the idea and gauge interest from both developers and open-source maintainers.",
            "Collected 35+ organic signups through direct outreach and community sharing — helping shape the product direction and feature priorities.",
            "Built with React, the landing page stores the email IDs of signed-up users in MongoDB and is deployed using Firebase. It reflects my product-first mindset and ability to execute lean validation strategies.",
          ]}
        />
      </div>
      
    </div>
  );
};

export default Projects;
