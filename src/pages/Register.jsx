import React, { useState } from 'react'
import { BASE_URL } from '../services/helper';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(e) {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    });
    if(response.status === 200) {
      alert('registration successful');
    }
    else {
      alert('registration failed');
    }
  }

  return (
    <form action="" className='register' onSubmit={register}>
        <h1>Register</h1>
      <input type="text" 
        placeholder='Username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  )
}

export default Register