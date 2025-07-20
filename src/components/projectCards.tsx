"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  link: string;
  descriptionPoints: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  descriptionPoints,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[90%] sm:max-w-3xl mx-auto mt-4 sm:mt-6 px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-2 border-blue-500 rounded-xl shadow-md  duration-300 hover:shadow-lg"
    >
      <div className="flex justify-around items-center">
        <h1 className="text-2xl font-semibold text-white">
          {title}
        </h1>
        <a
          href={link}
          className="text-emerald-500 underline text-2xl transition-colors hover:text-emerald-600 focus:text-emerald-700"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          Live Link
        </a>
      </div>
      <p className="mt-2 font-medium text-xl text-white">
        Description
      </p>
      <div className="mt-2">
        <ul className="list-disc list-inside space-y-1 text-base text-white">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="break-words">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
