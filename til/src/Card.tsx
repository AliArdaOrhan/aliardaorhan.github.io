import React from "react";
import ReactMarkdown from "react-markdown";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, tags, date }) => (
  <div className="bg-white shadow-md rounded p-16 m-8 min-w-[60%] max-w-[60%] ">
    <section className="flex flex-col">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>

        <ReactMarkdown className="prose text-gray-600 text-base mb-8 min-w-[100%]">{description}</ReactMarkdown>

      <div className="flex justify-between">
        <div className="space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 inline-block">{date}</p>
        </div>
      </div>
    </section>
  </div>
);

export default Card;
