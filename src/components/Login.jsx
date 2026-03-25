import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    
  return (
    <div className='flex items-center justify-center w-full py-12 px-4'>
      <div className='w-full max-w-md animate-fade-in'>
        <div className='bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl shadow-black/20'>
          <div className="mb-6 flex justify-center">
            <Logo width="140px" />
          </div>
          <h2 className="text-center text-2xl font-bold text-zinc-100 mb-1">Welcome back</h2>
          <p className="text-center text-sm text-zinc-500 mb-8">
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </p>
          
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3 mb-6">
              <p className="text-rose-400 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(login)}>
            <div className='space-y-4'>
              <Input
                label="Email"
                placeholder='Enter your email'
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                  }
                })}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button
                type="submit"
                className="w-full mt-2"
              >Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login