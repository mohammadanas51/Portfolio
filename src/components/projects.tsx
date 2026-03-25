"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./projectCards";
import { fadeUpItemVariants, sectionRevealVariants, viewportOnce } from "@/lib/motion";
import { useEntranceReady } from "@/lib/useEntranceReady";

const projects = [
  {
    title: "Retrieval-Augmented Generation (RAG)",
    summary: "AI-powered document Q&A app using RAG for accurate, context-aware answers.",
    descriptionPoints: [
      "Built a full-stack RAG system enabling users to upload documents and get context-aware AI answers.",
      "Used Groq's and HuggingFace RAG API to build a context-aware AI chatbot that can answer questions based on the uploaded documents.",
      "Implemented embedding-based retrieval with semantic search for accurate and relevant responses.",
      "Designed a modern AI dashboard for document management, querying, and real-time results.",
    ],
    githubUrl: "https://github.com/mohammadanas51/RAG-Backend",
    liveUrl: "https://rag-frontend-jade.vercel.app/",
    tags: ["RAG", "LLM", "MERN"],
  },
  {
    title: "Restaurant Management System",
    summary: "Full-stack restaurant management system for a local restaurant.",
    descriptionPoints: [
      "Built a full-stack restaurant management system for a local restaurant.",
      "Developed using React, Node.js, Express, and MongoDB. Includes role-based access control for admins and customers",
    ],
    githubUrl: "https://github.com/mohammadanas51/woxro-restaurant-task",
    liveUrl: "https://woxro-restaurant-task-vercel.vercel.app/",
    tags: ["MERN", "Admin Panel", "Dynamic"],
  },
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
  const reduce = useReducedMotion();
  const entranceReady = useEntranceReady();

  const cardList = {
    hidden: {},
    show: {
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  return (
    <motion.section
      variants={sectionRevealVariants(reduce)}
      initial="hidden"
      animate={entranceReady ? undefined : "hidden"}
      whileInView={entranceReady ? "show" : undefined}
      viewport={viewportOnce}
      style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}
    >
      <motion.p
        variants={fadeUpItemVariants(reduce)}
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "20px",
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Projects
      </motion.p>

      <motion.div variants={cardList}>
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUpItemVariants(reduce)}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
