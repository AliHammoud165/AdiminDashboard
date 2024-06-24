import React from 'react'

interface UserscounterType{
    count:number
}

function Usercounter({count}:UserscounterType) {
  return (
    <div className='flex'>
      <div className='text-[18px] font-bold pr-[5px]'> All Users</div>
      <div className='flex items-center '>
      <div className='border-l-[2px] h-fit border-gray-300 pl-[5px] text-[14px]'>{count}</div>
    </div>
    </div>
  )
}

export default Usercounter
