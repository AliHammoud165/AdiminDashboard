import React, { useEffect, useState } from 'react'
import { Users } from '../core/Users'
import { userType } from '../../Types/userType'
import {fetchAllUsers, searchUsersByName} from '../../api/api';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';




function List() {
  const [users, setUsers] = useState<userType[]>([]);

  const searchQuery = useSelector((state: RootState) => state.string.stringValue);


  useEffect(() => {
    const getUsers = async () => {
        try {
            let data;
            if (!searchQuery) {
                data = await fetchAllUsers(); // Fetch all users if searchQuery is null or empty
            } else {
                data = await searchUsersByName(searchQuery); // Fetch users based on searchQuery
            }
            if (data) {
                setUsers(data);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    getUsers();
}, [searchQuery]);

  return (
    <div className='rounded-[10px] bg-[#046AF3] w-full h-fit pt-[15px]'>
      <div className='flex w-full h-full text-white px-[15px]'>
        <div className='w-[40%] m:w-[30%] h-full '>NAME</div>
        <div className='w-[27.5%]  m:w-[17.5%]'>ROLE</div>
        <div className='w-[27.5%]  m:w-[17.5%]'>STATUS</div>
        <div className='w-[10%] m:w-[25%]'>ACTIONS</div>
      </div>
      <div className='bg-white min-h-[50px] h-fit rounded-[10px] pb-[10px]'>
      {users.map(user => (
        <Users
        role_id={user.role_id}
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          role_name={user.role_name}
          active={user.active}
          image={user.image}         />
      ))}

      </div>
    </div>
  )
}

export  {List}
