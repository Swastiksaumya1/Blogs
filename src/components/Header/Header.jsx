import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchQuery } from '../../store/searchSlice'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const searchQuery = useSelector((state) => state.search.query)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value))
  }

  return (
    <header className='sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-200'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between py-3 md:h-16'>
          <div className="flex items-center gap-4">
            <Link to="/" className="shrink-0 hover:opacity-80 transition-opacity">
              <Logo width='120px' />
            </Link>

            {/* Search Bar - Visible when logged in or out */}
            <div className="hidden sm:block relative ml-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input 
                type="text" 
                className="block w-full sm:w-48 lg:w-64 p-2 pl-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors" 
                placeholder="Search posts..." 
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className='flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end mt-3 sm:mt-0'>
            {/* Mobile Search Bar */}
            <div className="sm:hidden relative flex-1 mr-2">
               <input 
                type="text" 
                className="block w-full p-2 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white transition-colors" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <ul className='flex items-center gap-1 shrink-0'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="hidden lg:block">
                    <button
                      onClick={() => navigate(item.slug)}
                      className='px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-lg transition-all duration-200 cursor-pointer'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              
              {authStatus && userData && (
                <li className="ml-1 flex items-center">
                  <Link to="/profile" className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold uppercase">
                      {userData.name ? userData.name.charAt(0) : 'U'}
                    </div>
                    <span className="text-sm font-semibold hidden md:block whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">
                      {userData.name}
                    </span>
                  </Link>
                </li>
              )}
              
              {authStatus && (
                <li className="ml-2 hidden sm:block">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header


