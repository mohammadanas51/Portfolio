import React from "react";

interface ProjectCardProps {
  title: string;
  link: string;
  descriptionPoints: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, descriptionPoints }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-6 px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-2 border-blue-500 rounded-xl shadow-md  duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-3 xs:flex-row xs:justify-between xs:items-center">
        <h1 className="text-base xs:text-lg sm:text-xl font-semibold text-white">{title}</h1>
        <a
          href={link}
          className="text-emerald-500 underline text-xs xs:text-sm sm:text-base transition-colors hover:text-emerald-600 focus:text-emerald-700"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          Live Link
        </a>
      </div>
      <p className="mt-2 font-medium text-xs xs:text-sm sm:text-base text-white">Description</p>
      <div className="mt-2">
        <ul className="list-disc list-inside space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm sm:text-base md:text-lg text-white">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="break-words">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
