import React from 'react'
import Link from "next/link"

const PostPage = ({params}) => {
  return (
    <div className='p-8'>
      <Link href={"/"} className='text-amber-300'>Home</Link>
      <h1>PostsPage</h1>
       <p className='text-2xl font-bold text-red-500'>Post ID: {params.id}</p>
    </div>

  )
}

export default PostPage