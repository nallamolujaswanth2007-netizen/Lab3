import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Controlled Input</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <p className="mt-2 text-sm text-gray-600">
        Current value: <span className="font-mono bg-gray-100 px-1 rounded">{value}</span>
      </p>
      <p className="mt-1 text-xs text-gray-500">
        This input is controlled by React state. Changes are immediately reflected.
      </p>
    </div>
  );
};

export default ControlledInput;
