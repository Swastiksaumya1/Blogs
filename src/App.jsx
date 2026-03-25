import React from 'react'
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login , logout } from "./store/authSlice"
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'




function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
        
        
      })
      .finally(() => setLoading(false))
    
  }, [])
    
  return !loading ? (
    <div className='min-h-screen flex flex-col bg-zinc-950 text-zinc-100'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-zinc-400 text-sm font-medium tracking-wide">Loading...</p>
      </div>
    </div>
  )
}

export default App
