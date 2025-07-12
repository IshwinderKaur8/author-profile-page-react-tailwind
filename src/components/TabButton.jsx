import React from 'react';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none ${
        isActive
          ? 'bg-electric-blue text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;