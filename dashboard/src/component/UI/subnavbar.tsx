import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import Usercounter from '../core/Usercounter';
import { Addbutton } from '../core/addbutton';
import { toggle } from '../../Redux/swich/swichSlice'; 
import { setType } from '../../Redux/type/typeSlicer';

function Subnavbar() {
  const switchValue = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  const handleAddUser = () => {    
    dispatch(setType("Add")); 

    dispatch(toggle()); 
  };

  return (
    <div className='flex items-center justify-between h-[80px] py-[20px] w-full'>
      <div><Usercounter count={127}/></div>
      <div onClick={handleAddUser} className='h-full w-[120px]'>
        <Addbutton text='+ Add New User' type='Add'/>
      </div>
      
    </div>
  );
}

export { Subnavbar };
