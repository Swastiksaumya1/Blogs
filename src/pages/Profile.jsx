import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, PostCard, ThemeToggle } from '../components'
import appwriteService from '../appwrite/config'
import { Query } from 'appwrite'

function Profile() {
    const userData = useSelector((state) => state.auth.userData)
    const searchQuery = useSelector((state) => state.search.query)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts([
                Query.equal('userId', userData.$id)
            ]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
                setLoading(false)
            })
        }
    }, [userData])

    const filteredPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (!userData) {
        return (
            <div className="w-full py-24 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">Please login to view your profile</h1>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-12">
            <Container>
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 p-8 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                            {userData.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{userData.name}</h1>
                            <p className="text-zinc-500 dark:text-zinc-400">{userData.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Theme Preference</span>
                        <ThemeToggle />
                    </div>
                </div>

                {/* My Posts Section */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">My Posts</h2>
                        <span className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-sm font-medium">
                            {posts.length} {posts.length === 1 ? 'Post' : 'Posts'}
                        </span>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className="h-64 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-xl"></div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {filteredPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPosts.map((post) => (
                                        <div key={post.$id} className="animate-fade-in">
                                            <PostCard {...post} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800">
                                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                                        {searchQuery ? `No posts found matching "${searchQuery}"` : "You haven't created any posts yet."}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Profile
