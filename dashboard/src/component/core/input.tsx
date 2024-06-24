import React, { ChangeEvent } from 'react';

interface IStyledInputProps {
  placeholder: string;
  value: string;
  icon?: React.ReactElement;
  label?: string;
  type?: string;
  onChange: (value: string) => void;
}

const StyleInput = ({ placeholder, icon, label, value, type, onChange }: IStyledInputProps) => {
  const inputType = type ? (type.toLowerCase() === 'password' ? 'password' : 'text') : 'text';

  return (
    <>
      <div className="w-full h-full text-2xl">
        {label && <p className="text-black text-base w-full text-start pb-1">{label}</p>}
        <div className="flex items-center justify-between h-full w-full p-2.5 bg-white bg-opacity-90 text-black border-2 border-gray-300 rounded-lg">
          {icon && React.cloneElement(icon)}
          <input
            type={inputType}
            value={value}
            className="w-full border-0 pl-2.5 focus:outline-none"
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export { StyleInput };
