import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)
    
    useEffect(() => { 
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-24 px-4">
                <Container>
                    <div className="max-w-2xl mx-auto text-center animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient">Share your stories</span>
                            <br />
                            <span className="text-zinc-300">with the world</span>
                        </h1>
                        <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                            A modern blogging platform for creators. Sign in to discover amazing content or create your own posts.
                        </p>
                        {!authStatus && (
                            <div className="flex gap-4 justify-center">
                                <Link
                                    to="/login"
                                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-6 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-700 hover:text-zinc-100 transition-all duration-200"
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
        <div className='w-full py-12 px-4'>
            <Container>
                <h1 className="text-3xl font-bold text-zinc-100 mb-8">Latest Posts</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className="animate-fade-in">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home