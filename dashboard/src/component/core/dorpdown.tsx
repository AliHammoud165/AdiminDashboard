import React, { useState } from 'react';
import { cn } from "../../utilts";
import { RoleType } from './sigmantingbutton';
import { changeRoel } from '../../api/api';

interface RoleTypes {
  text: RoleType;
  allRoles: RoleType[];
  id:number
}

const Role: React.FC<RoleTypes> = ({ text, allRoles,id }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RoleType>(text);

  const handleRoleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(() => role); // Update state using functional form
    setShowDropdown(false);
    console.log(id, role.id);
    changeRoel(id, role.id); // Call your API function with the updated role ID
  };

  return (
    <div className={cn("w-full h-full px-[10px] py-[5px] text-[13px] cursor-pointer rounded-[20px]", {
      "bg-blue-100 text-blue-700": selectedRole.text === 'Guest',
      'bg-yellow-100 text-yellow-700': selectedRole .text=== 'Registered',
      'bg-green-100 text-green-700': selectedRole.text === 'Admin',
      'bg-red-100 text-red-700': selectedRole.text === 'Super Admin',
    })} onClick={handleRoleClick}>

      {selectedRole.text}

      {showDropdown && (
        <div className="absolute mt-1 w-40 bg-white shadow-lg rounded-lg py-1">
          {allRoles.map(role => (
            <div key={role.id} className={`cursor-pointer px-4 py-2 ${selectedRole.text === role.text ? 'bg-gray-200' : 'hover:bg-gray-200'}`} onClick={() => handleRoleSelect(role)}>
              {role.text}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export { Role };
