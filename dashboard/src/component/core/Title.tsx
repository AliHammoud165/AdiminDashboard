import React from 'react'

interface TitleTypes{
    text:string;
}

function Title({text}:TitleTypes) {
  return (
    <div className='h-fit w-fit text-gray-500'>
      {text}
    </div>
  )
}

export  {Title}
