import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { BASE_URL } from '../services/helper';

const EditPost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`${BASE_URL}/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setSummary(postInfo.summary);
                    setContent(postInfo.content);
                })
            })
    })

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('id', id);
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if(files?.[0]) {
            data.set('file', files?.[0]);
        }

        const response = await fetch(`${BASE_URL}/post`, {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });

        if(response.ok) {
            setRedirect(true)
        }
    }

    if(redirect) {
        return ( <Navigate to={`/post/${id}`} /> )
    }

    return (
    <form onSubmit={updatePost}>
        <input type="title" 
               placeholder='Title' 
               value={title} 
               onChange={(e) => {setTitle(e.target.value)}} />

        <input type="summary" 
               placeholder='Summary' 
               value={summary}
               onChange={(e) => {setSummary(e.target.value)}} />

        <input type="file"
               onChange={(e) => {setFiles(e.target.files)}} />

        <Editor value={content} onChange={(newValue) => {setContent(newValue)}} />

        <button style={{marginTop: '5px'}}>Update Post</button>
    </form>
  )
}

export default EditPost