import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { BASE_URL } from '../services/helper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {setUserInfo} = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    });
    
    if(response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setRedirect(true);
      });
    } 
    else {
      alert('Enter valid username and password');
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form action="" className='login' onSubmit={login}>
      <h1>Login</h1>
      <input 
        type="text" 
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
      <button>Login</button>
    </form>
  )
}

export default Login