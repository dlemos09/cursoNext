import Link from 'next/link';
import React from 'react'

const PostsPage = () => {

    const postsIds = [1,2,3];
    // Em um caso real, esses dados viriam de uma API ou banco de dados.

return (
    <div>
        <Link href={"/"} className='text-amber-300'>Home</Link>

        <h1>Blog</h1>

        <ul>
            {postsIds.map((id)=>(
                <li key={id}>
                    <Link href={`/posts/${id}`}>Ver post {id}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostsPage