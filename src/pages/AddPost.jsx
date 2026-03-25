import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12 px-4'>
        <Container>
            <h1 className="text-3xl font-bold text-zinc-100 mb-8">Create New Post</h1>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost