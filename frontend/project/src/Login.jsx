import React from 'react';
import {useState} from 'react';
import axios from 'axios';

export default function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email,password})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
    }
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button >Login</button>
        </form>

    </div>
</>
  )
}
