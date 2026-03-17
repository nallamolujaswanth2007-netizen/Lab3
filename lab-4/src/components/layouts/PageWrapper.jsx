import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Profile Dashboard
        </h1>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
