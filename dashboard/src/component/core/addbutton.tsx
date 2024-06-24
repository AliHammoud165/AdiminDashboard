import React from 'react';
import { cn } from '../../utilts';

interface AddbuttonProps {
  text: string;
  type:'Add'|'cancel'
}

const Addbutton=({ text,type }:AddbuttonProps) => {
  
  
  return (
    <div className={cn("text-white min-w-fit bg-[#046AF3] p-[10px] h-full hover:bg-blue-700 w-full rounded-[3px] duration-[0.3s] cursor-pointer flex items-center justify-center whitespace-nowrap",{
      "text-black  border-black border-[3px]  bg-white hover:bg-gray-100":type=='cancel'
    })}>
      {text}
    </div>
  );
}

export { Addbutton };
