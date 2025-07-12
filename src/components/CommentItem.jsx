import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3 mb-3">
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-dark-grey font-semibold">{comment.author} <span className="text-gray-500 text-sm ml-2">{comment.timestamp}</span></p>
        <p className="text-gray-700 mt-1">{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentItem;