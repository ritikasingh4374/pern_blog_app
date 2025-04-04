import React from 'react'
import { Link } from 'react-router-dom';

export default function Blogcard(props) {
    let blogdata = props.blogdata;
  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
        {/* <Link to = '/blog'> */}
        <div className="flex flex-col w-full">
            <img src={blogdata.image} alt="" />
            <div className="p-2">
                <h2 className='mt-1 text-xl text-left'>{blogdata.title}</h2>
                <p className='text-sm text-left opacity-70'>{blogdata.description}</p>
            </div>
        </div>
        {/* </Link> */}
    </div>
  );
}
