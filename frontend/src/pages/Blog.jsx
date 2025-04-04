import React from 'react'

export default function Blog() {
  return (
    <div className='flex justify-center items-center'>
        <div className="flex flex-col w-[60%] overflow-hidden">
            <h1 className='mt-1 text-3xl font-extrabold'>The Future of AI: Will Robots Steal Our Jobs or Just Our Coffee?</h1>
            <div className="flex mt-4 mb-4">
                <small>24 jan, 2023</small>
            </div>
            <img className = 'rounded-lg' src="https://picsum.photos/id/243/300/200" alt="" />
            <div>
                <h2 className='text-2xl mt-2 mb-2'> What is Lorem Ipsum?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                     like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h2 className='text-2xl mt-2 mb-2'>Why do we use it?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                     like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    </div>
  )
}
