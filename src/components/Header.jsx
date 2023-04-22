import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { BASE_URL } from '../services/helper';
 
const Header = () => {

  const {userInfo, setUserInfo} = useContext(UserContext)

  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      credentials: 'include'
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
      })
    })
  });

  function logout() {
    fetch(`${BASE_URL}/logout`, {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          {
            username ? 
              <>
                <Link to="/create">Create new post</Link>
                <a onClick={logout} href=''>Logout</a>
              </> :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
          }
        </nav>
    </header>
  )
}

export default Header