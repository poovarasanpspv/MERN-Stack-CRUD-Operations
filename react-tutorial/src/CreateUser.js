import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function CreateUser() {
    const [name, setName]= useState();
    const [email, setEmail]= useState();
    const [age, setAge]= useState();
    const navigate = useNavigate();

    const Submit = (e)=>{
        e.preventDefault();
        // if(!name && !email && !age){
            console.log('pass data');
            axios.post('http://localhost:3001/createUser',{name, email,age})
            .then(result =>{ console.log(result)
                navigate('/');
            })
            .catch(err=>console.log(err))
        // }
    }

  return (
    
    <div className='d-flex w-100 bg-primary justify-content-center aling-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>Add user</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email'  id='email' onChange={(e)=>setEmail(e.target.value)}className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter Age'  id='age' onChange={(e)=>setAge(e.target.value)}className='form-control'/>
                </div>
                <button className='btn btn-success'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser;