import React from 'react';

const FollowerAvatar = ({ follower }) => {
  return (
    <div className="relative group flex flex-col items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 group-hover:border-electric-blue transition-colors duration-200">
        <img src={follower.avatar} alt={follower.name} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm mt-1 text-gray-700 group-hover:text-electric-blue">{follower.name}</p>
      {/* Hover Preview Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        <h4 className="font-bold text-white mb-1">{follower.name}</h4>
        <p className="line-clamp-2">{follower.bio}</p>
      </div>
    </div>
  );
};

export default FollowerAvatar;