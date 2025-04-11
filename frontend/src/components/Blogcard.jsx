// The Blogcard.jsx component is responsible for rendering a single blog post preview. 
// It displays the blog's title, image, and category, and links to the full post page."
import React from 'react';
import { Link } from 'react-router-dom';
import { IoApps } from "react-icons/io5";

const Blogcard = ({ blogdata }) => {
    
    const apiURL = 'http://localhost:3000/';

    return (
        <div className='bg-white shadow-md overflow-hidden rounded-xl'>
            <Link to={`/blog/${blogdata.id}`} className="block">
                <div className="flex flex-col w-full">
                    {/* Blog Image */}
                    <div 
                        className="w-full h-[250px] bg-no-repeat bg-cover bg-center" 
                        style={{ backgroundImage: `url(${blogdata.image.startsWith('http') ? blogdata.image : apiURL + blogdata.image.replace(/\\/g, '/')})` }}
                    >
                        <img 
                            src={blogdata.image.startsWith('http') ? blogdata.image : `${apiURL}${blogdata.image.replace(/\\/g, '/')}`} 
                            alt={blogdata.title} 
                            className="w-full h-full object-cover rounded-t-xl" 
                        />
                    </div>

                    {/* Blog Content */}
                    <div className='p-4'>
                        <h5 className='text-lg font-semibold text-gray-800'>{blogdata.title}</h5>
                        <p className='flex items-center text-gray-600 mt-2'>
                            <IoApps className="text-gray-500 mr-2" />
                            <span className='text-sm'>{blogdata.category}</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Blogcard;
