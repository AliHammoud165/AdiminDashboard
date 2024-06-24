import React from 'react';

interface avatarProps {
  name: string;
  image: string;
}

const Avatar: React.FC<avatarProps> = ({ name, image }) => {
  return (
    <div className='h-full w-full flex items-center justify-between'>
   <div className='cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis'>
        {name}
      </div>      
      <div className='h-full w-[40px] flex justify-end items-center rounded-[50%]'>
        <img src={image} alt='avatar' className='h-full w-auto rounded-[50%] max-w-full object-contain' />
      </div>
    </div>
  );
}

export { Avatar };
