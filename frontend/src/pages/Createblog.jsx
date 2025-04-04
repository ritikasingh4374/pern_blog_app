import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Createblog() {
    const [value, setValue] = useState('');
    
    const menu = [
        { text: 'Nature', path: '/' },
        { text: 'Travel', path: '/' },
        { text: 'Technology', path: '/' },
        { text: 'Politics', path: '/' },
    ];

    return (
        <div className='flex w-full items-center justify-center'>
            <div className="bg-slate-200 w-[60%] p-5 rounded-2xl">
                <h1 className='text -2xl mb-5'>Create blog post</h1>
                <div className="flex flex-col">
                    <label className='ml-1 text-gray-500'>Title</label>
                    <input type="text" className='h-10 border-gray-300 rounded my-2 p-2' />

                    <label className='ml-1 text-gray-500'>Category</label>
                    <select className='h-10 border-gray-300 rounded my-2 p-2'>
                        {menu.map((x, index) => (
                            <option key={index} value={x.text}>{x.text}</option>
                        ))}
                    </select>

                    <label className='ml-1 text-gray-500'>Image</label>
                    <input type="file" className='h-10 border-gray-300 rounded my-2 p-2' />

                    <label className='ml-1 text-gray-500'>Content</label>
                    <ReactQuill className = 'bg-white rounded mb-2 mt-2 editingarea'theme="snow" value={value} onChange={setValue} />

                    <hr />
                    <button className='bg-slate-500 text-white h-8 w-[100px] mt-2 rounded'>Submit</button>
                </div>
            </div>
        </div>
    );
}
