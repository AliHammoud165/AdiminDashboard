
interface TextblockTypes{
    text:string;
}

function Textblock({text}:TextblockTypes) {
  return (
    <div className='h-fit w-fit text-gray-500'>
      {text}
    </div>
  )
}

export  {Textblock}
