import React from 'react';

const ProfileCardTailwind = ({ name, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">{bio}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCardTailwind;
