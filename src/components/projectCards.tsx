import React from "react";

interface ProjectCardProps {
  title: string;
  link: string;
  descriptionPoints: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, descriptionPoints }) => {
  return (
    <div className="cardOne outline-2 outline-offset-2 outline-blue-500 md:w-150 ml-56 mt-3">
      <div className="titleLink flex justify-between">
        <h1>{title}</h1>
        <a href={link} className="text-emerald-300" target="_blank" rel="noopener noreferrer">
          Live Link
        </a>
      </div>
      <p>Description</p>
      <div className="desc">
        <ul className="mt-2 list-disc list-inside space-y-2">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
