import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import {Button } from '../core/button';
import { toggle } from '../../Redux/swich/swichSlice'; 
import { setType } from '../../Redux/type/typeSlicer';

function Subnavbar() {
  const switchValue = useSelector((state: RootState) => state.counter.value);
  const Type = useSelector((state: RootState) => state.type.value); 
 const dispatch: AppDispatch = useDispatch();

  const handleAddUser = () => {    
    dispatch(setType("Add")); 
    console.log(switchValue)
    console.log(Type)
    dispatch(toggle()); 
  };

  return (
    <div className='flex items-center justify-between h-[80px] py-[20px] px-[10px] w-full'>
      <div>    <div className='flex'>
      <div className='text-[18px] font-bold pr-[5px]'> All Users</div>
      <div className='flex items-center '>
      <div className='border-l-[2px] h-fit border-gray-300 pl-[5px] text-[14px]'>172</div>
    </div>
    </div></div>
      <div onClick={handleAddUser} className='h-full w-[120px]'>
        <Button text='+ Add New User' type='Add'/>
      </div>
      
    </div>
  );
}

export { Subnavbar };
