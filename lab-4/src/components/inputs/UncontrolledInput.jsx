import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleShowValue = () => {
    const value = inputRef.current.value;
    alert(`Current value: ${value}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Uncontrolled Input</h3>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
      />
      <button
        onClick={handleShowValue}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
      >
        Show Value
      </button>
      <p className="mt-2 text-xs text-gray-500">
        This input is uncontrolled. Value is accessed via ref when needed.
      </p>
    </div>
  );
};

export default UncontrolledInput;
