import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {

    const menu = [
        {text : 'Nature', path : '/'},
        {text : 'Travel', path : '/'},
        {text : 'Nature', path : '/'},
        {text : 'Nature', path : '/'},
    ]
  return (
    <div>
        {/* {<header></header>} */}
        <div className="border-b">
            <div className="container px-5 py-5 flex justify-between">
                <span className='font-extrabold text-2xl'>BLOGGER</span>
                <div className="flex">
                    <ul className='flex'>
                        <li>
                            <Link className='p-2' items-center justify-center flex><span>Category 1</span></Link>
                            <Link className='p-2'><span>Category 2</span></Link>
                        </li>
                    </ul>
                    <button className='bg-slate-500 text-white px-2 py-1 rounded'>
                        + new post
                    </button>
                </div>
            </div>
        </div>
        {/* {<body></body>} */}
         <div className="flex">
            <Outlet></Outlet>
         </div>
        {/* {<footer></footer>} */}
    </div>
  )
}
