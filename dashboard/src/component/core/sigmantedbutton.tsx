import  { useState } from 'react';

export interface RoleType {
  text: string;
  id: number;
}

interface sigmantedbuttonProps {
  array: RoleType[];
  onSelect: (role: RoleType) => void;
}

function Sigmantedbutton({ array, onSelect }: sigmantedbuttonProps) {
  const [selectedRole, setSelectedRole] = useState<RoleType>(array[0]);

  const handleClick = (role: RoleType) => {
    const newSelectedRole = role === selectedRole ? array[0] : role;
    setSelectedRole(newSelectedRole);
    onSelect(newSelectedRole); 
    console.log(role.id);
  };

  return (
    <div className="inline m:flex items-center justify-between h-full w-full rounded-lg overflow-clip">
      {array.map((role) => (
        <div
          key={role.id}
          className={`h-full  w-full p-[10px] cursor-pointer flex items-center justify-center ${
            selectedRole.id === role.id ? 'bg-[#046AF3] text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handleClick(role)}
          style={{ transition: 'background-color 0.3s, color 0.3s' }}
        >
          {role.text}
        </div>
      ))}
    </div>
  );
}

export { Sigmantedbutton };
