import React from 'react'
import ReactQuill from 'react-quill' //for text editor on the browser

const Editor = ({value, onChange}) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    }
    return (
        <ReactQuill
            modules={modules}
            value={value}
            onChange={onChange}
        />
    )
}

export default Editor