import React from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const MileageInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <label className="text-gray-500 text-sm mb-2 font-medium">
        ENTER ODOMETER READING
      </label>
      <div className="relative flex items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="text-4xl font-bold text-center w-48 border-b-2 border-blue-600 focus:outline-none focus:border-blue-800 transition-colors bg-transparent text-gray-800"
        />
        <span className="absolute right-0 translate-x-full ml-2 text-xl text-gray-400 font-bold">
          km
        </span>
      </div>
    </div>
  );
};

export default MileageInput;