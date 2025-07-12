import React from 'react';
import { FaCodeBranch, FaStar } from 'react-icons/fa';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-dark-grey mb-2">{story.title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{story.excerpt}</p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <FaCodeBranch /> {story.forks}
          <FaStar /> {story.stars}
        </div>
        <a href="#" className="text-electric-blue hover:underline text-sm">Read More</a>
      </div>
    </div>
  );
};

export default StoryCard;