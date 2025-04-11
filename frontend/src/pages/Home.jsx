// "The Home.jsx component is responsible for fetching and displaying blogs. 
// It listens for changes in the URL's query parameters to filter blogs by category.

import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../../api/Api';
import { useSearchParams } from "react-router-dom";

const Home = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs,setBlogs] = useState(null);


    // On the initial render, we fetch all blogs using the getBlogs() function and store them in state. 
    // The empty dependency array [] ensures this runs only once."
    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[]);


    // This runs whenever searchParams changes. 
    // If a user selects a category, it fetches blogs for that category using getBlogs(searchParams.get('category')).
    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[searchParams]);

    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {blogs && blogs.map((x,i) => {
                    return <Blogcard key={i} blogdata={x} />
                })}
                
            </div>
        </div>
    );
}

export default Home;