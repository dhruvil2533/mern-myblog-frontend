import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { BASE_URL } from '../services/helper';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`${BASE_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div>
        {
          posts.length > 0 && posts.map((post) => (
            <Post {...post} /> // passed all the properties of post to <Post />
          ))
        }
    </div>
  )
}

export default Home