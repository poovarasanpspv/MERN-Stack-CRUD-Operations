import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
function UpdateUser() {
    const {id} = useParams();
    const [name, setName]= useState();
    const [email, setEmail]= useState();
    const [age, setAge]= useState();
    const navigate = useNavigate();
   useEffect(()=>{
    axios.get('http://localhost:3001/getuser/'+id)
    .then(result =>{ console.log(result.data)
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
    })
    .catch(err=>console.log(err))
   },[]);

   const Update = (e)=>{
        e.preventDefault();
        console.log('pass data');
        axios.put('http://localhost:3001/updateUser/'+id,{name, email,age})
        .then(result =>{ console.log(result)
            navigate('/');
        })
        .catch(err=>console.log(err))
   }
  return (
       <div className='d-flex w-100 bg-primary justify-content-center aling-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Edit user</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter Name' onChange={(e)=> setName(e.target.value)} id='name' className='form-control' value={name}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' id='email' onChange={(e)=> setEmail(e.target.value)} className='form-control' value={email}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter Age' id='age' onChange={(e)=> setAge(e.target.value)} className='form-control' value={age}/>
                </div>
                <button className='btn btn-success'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser;