import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Home from './Home'

export default function Layout() {

    const menu = [
        {text : 'Nature', path : '/'},
        {text : 'Travel', path : '/'},
        {text : 'Technology', path : '/'},
        {text : 'Politics', path : '/'},
    ]
  return (
    <div>
        {/* {<header></header>} */}
        <div className="border-b">
            <div className="container px-5 py-5 flex justify-between">
                <Link to = '/'></Link>
                <span className='font-extrabold text-2xl'>BLOGGER</span>
                <div className="flex">
                    <ul className='flex'>
                        { menu.map( x => {
                            return <li><Link className='p-2' items-center justify-center flex><span>{x.text}</span></Link></li>
                        })}
                    </ul>
                    <button className='bg-slate-500 text-white px-2 py-1 rounded'>
                       <Link to='/create'> + new post</Link>
                    </button>
                </div>
            </div>
        </div>
        {/* {<body></body>} */}
         <div className="flex mx-auto px-5 md:px-20">
            <div className="mt-5 mb-5 min-h-[500px] w-full">
            <Outlet></Outlet>
            </div>
         </div>
        {/* {<footer></footer>} */}
        <div className="flex bg-slate-800">
            <div className="flex mx-auto px-20 py-20 items-center justify-center">
                <h3 className='text-gray-400'>
                            BLOGGER
                </h3>
            </div>
        </div>
    </div>
  )
}
