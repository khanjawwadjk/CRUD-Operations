import axios from "axios";

const url = 'http://localhost:3003/users';


//called by two components adduser and edituser reagrding their arguments........
export const getUsers = async(id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`); //'http://localhost:3003/users/id';
}

export const addUsers= async(addUser) =>{
    return await axios.post(url, addUser);
}

export const editUsers = async(id, userInitials) =>{
    return await axios.put(`${url}/${id}`, userInitials);

}

export const deleteUser = async(id) => {
   return await axios.delete(`${url}/${id}`);
}