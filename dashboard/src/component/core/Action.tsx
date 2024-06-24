import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteUser } from '../../api/api';
import { toggle } from '../../Redux/swich/swichSlice'; 
import {setType} from '../../Redux/type/typeSlicer'
import { AppDispatch, RootState } from '../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserForm } from '../UI/AddUserForm';

interface ActionType {
  id: number;
}

function Action({ id }: ActionType) {
  const switchValue = useSelector((state: RootState) => state.counter.value);
  const typevalue = useSelector((state: RootState) => state.type.value);

  const dispatch: AppDispatch = useDispatch();

  const handelclick = () => {
    deleteUser(id);
  }

  const handelresetpass = () => {
    dispatch(setType("Reset")); // Dispatching setType action with "Reset" payload
    dispatch(toggle());
  }

  return (
    <div className='flex items-center justify-between'>
      <div onClick={handelresetpass} className="flex items-center cursor-pointer hover:text-blue-500 ">
        <div className="mr-2 hover:text-blue-500 ">
          <FontAwesomeIcon icon={faKey} size="sm" />
        </div>
        <p className='text-[14px] m:flex hidden '>Reset Password</p>
      </div>
      <div onClick={handelclick} className="flex items-center cursor-pointer hover:text-red-500">
        <div className="mr-2 ">
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </div>
        <p className='text-[14px] m:flex hidden'>Delete</p>
      </div>
      {switchValue && <AddUserForm text={typevalue} id={id} />}
    </div>
  );
}

export { Action };
