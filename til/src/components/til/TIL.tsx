import React from "react";
import { TILModel } from "../../models/tils";
import ReactMarkdown from "react-markdown";
import TILTag from "../til-tag/Tag";

interface TILProps {
  til: TILModel;
}

const TIL: React.FC<TILProps> = ({ til }) => (
  /* Container */
  <div className="bg-white shadow-md p-16 mb-8 min-w-[40%] max-w-[40%]" data-testid="til">
    {/* Inner Container */}
    <div className="flex flex-col">
      {/* Title */}
      <h2 className="mb-8 font-bold text-2xl hover:text-red-500 hover:cursor-pointer">{til.title}</h2>
      {/* Content */}
      <ReactMarkdown className="prose mb-8">{til.content}</ReactMarkdown>
      {/* Footer */}
      <div className="flex justify-between">
        {/* Tags */}
        <div>
          {til.tags.map((tag, index) => (<TILTag key={index} tag={tag} />))}
        </div>
        {/* Date */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-bold">{til.timestamp}</p>
        </div>
      </div>
    </div>
  </div>
);

export default TIL;
