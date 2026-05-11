import React from 'react'
import appwriteService from "../appwrite/config.js"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className='bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-200 dark:hover:border-zinc-700/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1'>
        <div className='w-full aspect-[16/10] overflow-hidden'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <div className="p-5">
          <h2 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2'>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard