import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)
    const searchQuery = useSelector((state) => state.search.query)
    
    useEffect(() => { 
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const filteredPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (posts.length === 0) {
        return (
            <div className="w-full py-24 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors">
                <Container>
                    <div className="max-w-2xl mx-auto text-center animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient">Share your stories</span>
                            <br />
                            <span className="text-zinc-600 dark:text-zinc-300 transition-colors">with the world</span>
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 leading-relaxed transition-colors">
                            A modern blogging platform for creators. Sign in to discover amazing content or create your own posts.
                        </p>
                        {!authStatus && (
                            <div className="flex gap-4 justify-center">
                                <Link
                                    to="/login"
                                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-indigo-500/20"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-6 py-2.5 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm"
                                >
                                    Create Account
                                </Link>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full py-12 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors min-h-screen'>
            <Container>
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">
                        {searchQuery ? `Search results for "${searchQuery}"` : "Latest Posts"}
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
                            No posts found matching your search.
                        </p>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Home