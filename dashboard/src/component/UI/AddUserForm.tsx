import { useState } from 'react';
import { StyleInput } from '../core/input';
import { Sigmantingbutton, RoleType } from '../core/sigmantingbutton';
import { Button } from '../core/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import { toggle } from '../../Redux/swich/swichSlice';
import { addUserType } from '../../Types/userType';
import { addUser, changepass } from '../../api/api';

export const Roles: RoleType[] = [
  { id: 1, text: 'Guest' },
  { id: 2, text: 'Registered' },
  { id: 3, text: 'Admin' },
  { id: 4, text: 'Super Admin' }
];

interface FormType {
  text: "Add" | "Reset";
  id: number;
}

function AddUserForm({ text, id }: FormType) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null);

  const switchValue = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordsMatch(value === repeatPassword);
  };

  const handleRepeatPasswordChange = (value: string) => {
    setRepeatPassword(value);
    setPasswordsMatch(value === password);
  };

  const handleRoleSelect = (role: RoleType | null) => {
    setSelectedRole(role);
  };

  const handleAddUser = async () => {
    if (firstName && lastName && email && password && repeatPassword && passwordsMatch && selectedRole) {
      const user: addUserType = {
        name: `${firstName} ${lastName}`,
        email: email,
        active: false,
        password: password,
        role_id: selectedRole.id,
        image: '//'
      };
      try {
        await addUser(user);
        dispatch(toggle());
        window.location.reload(); 
      } catch (error) {
        console.error("Failed to add user:", error);
      }
    } else {
      alert('Please fill in all fields, ensure passwords match, and select a role');
    }
  };

  const handleCancel = () => {
    dispatch(toggle());
  };

  const handleResetPasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleResetNewPasswordChange = (value: string) => {
    setRepeatPassword(value);
  };

  const handelRestpassword = () => {
    console.log(id); 
    console.log(password); 
    console.log(repeatPassword);
    changepass(id, password, repeatPassword)
    dispatch(toggle());
  };

  return (
    <div className="full-screen-overlay fixed top-0 left-0 w-full h-full z-50 bg-[#00000080] flex justify-center items-center">
      {text === "Add" && (
        <div className='py-[20px] px-[30px] h-[fit] m:h-[60%] w-[40%] bg-white rounded-[20px]'>
          <p className='font-bold w-full h-[40px] border-b-gray-300 border-b-[2px]'>Add User Form</p>
          <div className='mt-3 w-full h-[40px] flex items-center justify-between'>
            <div className='h-full w-[47%]'><StyleInput placeholder='Enter First Name' onChange={handleFirstNameChange} value={firstName} /></div>
            <div className='h-full w-[47%]'><StyleInput placeholder='Enter Last Name' onChange={handleLastNameChange} value={lastName} /></div>
          </div>
          <div className='h-[40px] w-[100%] mt-3'><StyleInput placeholder='Enter Email' onChange={handleEmailChange} value={email} /></div>
          <div className='h-[40px] w-[100%] mt-3'><StyleInput placeholder='Password' type='password' onChange={handlePasswordChange} value={password} /></div>
          <div className='h-[40px] w-[100%] mt-3'><StyleInput placeholder='Repeat Password' type='password' onChange={handleRepeatPasswordChange} value={repeatPassword} /></div>
          
          <div className='h-[40px] w-full mt-4'><Sigmantingbutton array={Roles} onSelect={handleRoleSelect} /></div>
          
          <div className='flex items-center justify-between w-full h-[230px] m:h-[40px] mt-10'>
            <div onClick={handleCancel}><Button type='cancel' text='Cancel' /></div>
            <div onClick={handleAddUser}><Button type='Add' text='Add New User' /></div>
          </div>
        </div>
      )}
      
      {text === "Reset" && (
        <div className='py-[20px] px-[50px] h-[40%] w-[40%] bg-white rounded-[20px]'>
          <div className='h-[40px] w-[100%] mt-3'><StyleInput placeholder='Password' type='password' onChange={handleResetPasswordChange} value={password} /></div>
          <div className='h-[40px] w-[100%] mt-3'><StyleInput placeholder='New password' type='password' onChange={handleResetNewPasswordChange} value={repeatPassword} /></div>
          <div className='mt-3' onClick={handleCancel}><Button type='cancel' text='Cancel' /></div>
          <div className='mt-3' onClick={handelRestpassword}><Button type='Add' text='Reset the password' /></div>
        </div>
      )}
    </div>
  );
}

export { AddUserForm };
