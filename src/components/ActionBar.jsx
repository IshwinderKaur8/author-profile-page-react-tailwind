import React, { useState } from 'react';
import { FaEnvelope, FaUserPlus, FaUserMinus } from 'react-icons/fa'; // Icons for message and follow

const ActionBar = () => {
  const [isFollowing, setIsFollowing] = useState(false); // State for follow button

  const handleRequestCollaboration = () => {
    alert('Collaboration request sent!'); // Placeholder for actual logic
  };

  const handleSendMessage = () => {
    alert('Opening message dialog...'); // Placeholder for actual logic
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    alert(isFollowing ? 'Unfollowed!' : 'Followed!'); // Placeholder for actual logic
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap justify-center md:justify-start gap-4">
      {/* Request Collaboration Button */}
      <button
        onClick={handleRequestCollaboration}
        className="bg-electric-blue text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-sky-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50"
      >
        Request Collaboration
      </button>

      {/* Message/Direct Message Icon */}
      <button
        onClick={handleSendMessage}
        className="bg-gray-200 text-dark-grey p-3 rounded-full shadow-sm hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        title="Send Message"
      >
        <FaEnvelope size={20} />
      </button>

      {/* Follow/Unfollow Button */}
      <button
        onClick={handleFollowToggle}
        className={`font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 ${
          isFollowing
            ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
            : 'bg-seafoam-green text-white hover:bg-turquoise focus:ring-seafoam-green'
        } focus:ring-opacity-50`}
      >
        {isFollowing ? (
          <>
            <FaUserMinus className="inline-block mr-2" /> Unfollow
          </>
        ) : (
          <>
            <FaUserPlus className="inline-block mr-2" /> Follow
          </>
        )}
      </button>
    </div>
  );
};

export default ActionBar;