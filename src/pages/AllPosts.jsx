import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const searchQuery = useSelector((state) => state.search.query)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const filteredPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className='w-full py-12 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors min-h-screen'>
        <Container>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">
                    {searchQuery ? `Search results for "${searchQuery}"` : "All Posts"}
                </h1>
                <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {filteredPosts.length} posts
                </span>
            </div>

            {filteredPosts.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredPosts.map((post) => (
                        <div key={post.$id} className="animate-fade-in">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 transition-colors">
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        {searchQuery ? `No posts found matching "${searchQuery}"` : "No posts available."}
                    </p>
                </div>
            )}
        </Container>
    </div>
  )
}

export default AllPosts