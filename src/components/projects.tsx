"use client";

import React from "react";
import { motion } from "motion/react";
import ProjectCard from "./projectCards";

const projects = [
  {
    title: "CommitPay",
    summary: "Bootstrapped SaaS connecting open-source maintainers with beginner devs through paid issues.",
    descriptionPoints: [
      "A bootstrapped SaaS platform that helps open-source maintainers post paid beginner-friendly issues, making it easier for new developers to earn through real-world contributions.",
      "Launched the MVP using React, Firebase, and Firestore, and grew to 35+ signups with early adopter maintainers listing paid tasks — all within the first few weeks.",
      "Built with a product-first mindset, CommitPay reflects my entrepreneurial drive to solve real developer problems through lean, user-focused iteration.",
    ],
    githubUrl: "https://github.com/mohammadanas51/CommitPay-MVP",
    liveUrl: "https://commitpay.dev",
    tags: ["SaaS", "React", "Firebase"],
  },
  {
    title: "CommitPay Waitlist",
    summary: "Pre-launch waitlist landing page that collected 35+ organic signups to validate the idea.",
    descriptionPoints: [
      "Launched a pre-MVP waitlist for CommitPay to validate the idea and gauge interest from both developers and open-source maintainers.",
      "Collected 35+ organic signups through direct outreach and community sharing — helping shape the product direction and feature priorities.",
      "Built with React; stores email IDs in MongoDB and deployed on Firebase. Reflects a product-first mindset and lean validation strategy.",
    ],
    liveUrl: "https://commit-pay-waitlist.netlify.app/",
    tags: ["React", "MongoDB"],
  },
  {
    title: "Event Management System",
    summary: "Full-stack app for a local mosque committee to digitise event scheduling and speaker management.",
    descriptionPoints: [
      "A full-stack application built for a local mosque committee to manage religious events, speaker schedules, and announcements.",
      "Developed using React, Node.js, Express, and MongoDB. Includes role-based access control for admins and speakers.",
      "Built as a pro bono project — demonstrates my ability to deliver real-world solutions for local communities, working closely with stakeholders.",
    ],
    githubUrl: "https://github.com/mohammadanas51/Bayan-App-full",
    liveUrl: "https://bayan-portal-tntj.web.app/",
    tags: ["MERN", "Pro Bono"],
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "20px",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Projects
      </p>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
