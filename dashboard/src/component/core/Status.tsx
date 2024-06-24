import React, { useState } from 'react';
import { cn } from '../../utilts'; 
import { changeStatus } from '../../api/api';

interface StatusProps {
    text: boolean;
    id:number
}

const Status: React.FC<StatusProps> = ({ text,id }) => {

const [satatus,set_status]=useState<boolean>(text)


const handelclicke=async ()=>{
    console.log(id)
    changeStatus(id)
set_status(!satatus)
}

    return (
        <p onClick={handelclicke} className={cn(' cursor-pointer', {
            'text-green-700': satatus,
            'text-red-700': !satatus
        })}>
            {satatus ? 'Active' : 'Inactive'}
        </p>
    );
};

export { Status };
