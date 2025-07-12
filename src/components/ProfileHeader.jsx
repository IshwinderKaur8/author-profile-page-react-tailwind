import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'; // For social media icons

const ProfileHeader = ({ author }) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Dummy data for demonstration
  const defaultAuthor = {
    avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
    displayName: 'Aria Montgomery',
    handle: '@ariamontgomery',
    badges: [
      { name: 'Top Author', tooltip: 'Recognized for consistent high-quality content.' },
      { name: 'Community Contributor', tooltip: 'Active participant in community discussions.' },
      { name: 'Verified', tooltip: 'Identity verified by the platform.' }
    ],
    bio: `Aria Montgomery is a passionate storyteller with a knack for weaving intricate narratives that explore the depths of human emotion. With a background in literature and a keen eye for detail, Aria crafts worlds that resonate with readers long after the last page is turned. Her works often delve into themes of mystery, self-discovery, and the power of connection. She believes in the magic of words and strives to create stories that inspire, entertain, and provoke thought. Beyond writing, Aria enjoys hiking, experimenting with new recipes, and spending time with her rescue dog, Pip.`,
    socialLinks: {
      twitter: 'https://twitter.com/yourhandle',
      linkedin: 'https://linkedin.com/in/yourprofile',
      github: 'https://github.com/yourprofile',
      website: 'https://yourwebsite.com'
    }
  };

  const currentAuthor = author || defaultAuthor; // Use provided author data or default

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col items-center md:items-start text-center md:text-left">
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-electric-blue ring-opacity-50">
        <img src={currentAuthor.avatar} alt={`${currentAuthor.displayName}'s Avatar`} className="w-full h-full object-cover" />
      </div>

      {/* Display Name and Handle */}
      <h2 className="text-3xl font-bold text-dark-grey mb-1">{currentAuthor.displayName}</h2>
      <p className="text-gray-500 text-lg mb-4">{currentAuthor.handle}</p>

      {/* Badges */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
        {currentAuthor.badges.map((badge, index) => (
          <span
            key={index}
            className="bg-seafoam-green text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200 relative group"
          >
            {badge.name}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max p-2 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {badge.tooltip}
            </div>
          </span>
        ))}
      </div>

      {/* Bio Section */}
      <div className="w-full mb-4">
        <p className={`text-gray-700 leading-relaxed ${isBioExpanded ? '' : 'line-clamp-3'}`}>
          {currentAuthor.bio}
        </p>
        {currentAuthor.bio.length > 150 && ( // Simple check for expand/collapse
          <button
            onClick={() => setIsBioExpanded(!isBioExpanded)}
            className="text-electric-blue hover:underline mt-2 focus:outline-none"
          >
            {isBioExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4">
        {currentAuthor.socialLinks.twitter && (
          <a href={currentAuthor.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-electric-blue transition-colors">
            <FaTwitter size={24} />
          </a>
        )}
        {currentAuthor.socialLinks.linkedin && (
          <a href={currentAuthor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-electric-blue transition-colors">
            <FaLinkedin size={24} />
          </a>
        )}
        {currentAuthor.socialLinks.github && (
          <a href={currentAuthor.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-electric-blue transition-colors">
            <FaGithub size={24} />
          </a>
        )}
        {currentAuthor.socialLinks.website && (
          <a href={currentAuthor.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-electric-blue transition-colors">
            <FaGlobe size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;