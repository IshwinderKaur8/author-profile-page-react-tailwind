import React from 'react';
import { FaCodeBranch, FaStar, FaAward, FaComment, FaUpload } from 'react-icons/fa';

const iconMap = {
  fork: <FaCodeBranch className="text-seafoam-green" />,
  star: <FaStar className="text-sky-blue" />,
  badge: <FaAward className="text-electric-blue" />,
  comment: <FaComment className="text-turquoise" />,
  upload: <FaUpload className="text-purple-500" />, // Using a different color for upload
};

const ActivityFeedItem = ({ activity }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-shrink-0 text-xl">
        {iconMap[activity.type]}
      </div>
      <div className="flex-grow">
        <p className="text-gray-800">{activity.message}</p>
        <p className="text-gray-500 text-sm mt-1">{activity.timestamp}</p>
      </div>
    </div>
  );
};

export default ActivityFeedItem;