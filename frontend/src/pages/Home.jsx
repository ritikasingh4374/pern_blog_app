import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../../api/Api';
import { useSearchParams } from "react-router-dom";

const Home = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[]);

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