import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard.jsx'
import { getBlogs } from '../../api/Api.jsx'


export default function Home() {

  const [blogs,setBlogs] = useState(null);

  useEffect(() => {
      async function fetchData(){
          const allBlogs = await getBlogs();
          setBlogs(allBlogs.data);
      }
      fetchData();
  },[]);


  const data = [
    {
      title : 'title',
      image : 'https://picsum.photos/id/237/300/200',eatedon : '24 jan, 2024',
      comments : '0'
    },
    {
      title : 'title',
      image : 'https://picsum.photos/id/242/300/200',
      description : 'description',
      createdon : '24 jan, 2024',
      comments : '0'
    },
    {
      title : 'title',
      image : 'https://picsum.photos/id/239/300/200',
      description : 'description',
      createdon : '24 jan, 2024',
      comments : '0'
    },
    {
      title : 'title',
      image : 'https://picsum.photos/id/244/300/200',
      description : 'description',
      createdon : '24 jan, 2024',
      comments : '0'
    },
    {
      title : 'title',
      image : 'https://picsum.photos/id/243/300/200',
      description : 'description',
      createdon : '24 jan, 2024',
      comments : '0'
    },
    {
      title : 'title',
      image : 'https://picsum.photos/id/238/300/200',
      description : 'description',
      createdon : '24 jan, 2024',
      comments : '0'
    },
  ]
  return (
    <div>
      <p>{JSON.stringify(blogs)}</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map( x => {
          return <Blogcard blogdata = {x}/>
        })}
      </div>
    </div>
  )
}
