import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
   const[users, setuser] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setuser(result.data))
    .catch(err=>console.log(err))
   },[]);
const handleDelete = (id)=>{
    // let result = confirm("Are you sure to delete?");
    // if(result){
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(result =>{ console.log(result.data)
        window.location.reload();
        })
        .catch(err=>console.log(err))
    // }
}
  return (
    <div className='d-flex w-100 bg-primary justify-content-center aling-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=>{
                       return <tr key={i}>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.age} </td>
                            <td> 
                                <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Edit +</Link>
                                <button className='btn btn-danger ms-1' onClick={(e)=> handleDelete(user._id)}>delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users;