import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors min-h-screen'>
        <Container>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 transition-colors">Create New Post</h1>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost