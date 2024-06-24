import axios from 'axios';
import { addUserType, userType } from '../Types/userType';

const fetchAllUsers = async (): Promise<userType[]> => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; 
    }
};

const addUser = async (user:addUserType):Promise<userType[]> => {
    try{
        const response =await axios.post('http://127.0.0.1:8000/api/users',user)
        return response.data;
    }catch(error){
             console.error('Error fetching data:', error);
             return []; 
    };
    

}

const changeStatus = async (id: number): Promise<void> => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/users/status', { id });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const deleteUser = async (id: number): Promise<void> => {
    try {
        const response = await axios.delete('http://127.0.0.1:8000/api/users/delete', {
            data: { id }
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

const changeRoel = async (id: number, id_role: number): Promise<void> => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/users/role/${id_role}`, {
        id: id 
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error changing role:', error);
    }
  };
  

  const changepass = async (id: number, oldPassword: string, newPassword: string): Promise<void> => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/users/changepassword', {
            id: id,
            old_password: oldPassword,
            new_password: newPassword
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("password is wrong try again")
    }
};


const searchUsersByName = async (name: string): Promise<userType[]> => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/users/search', {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching users:', error);
        return []; 
    }
};

export  { searchUsersByName,fetchAllUsers,addUser,changeStatus,deleteUser,changeRoel,changepass};
