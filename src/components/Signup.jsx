import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState("")

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl shadow-black/20">
          <div className="mb-6 flex justify-center">
            <Logo width="140px" />
          </div>
          <h2 className="text-center text-2xl font-bold text-zinc-100 mb-1">Create your account</h2>
          <p className="text-center text-sm text-zinc-500 mb-8">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>
          
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3 mb-6">
              <p className="text-rose-400 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(create)}>
            <div className='space-y-4'>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                error={errors.name?.message}
                {...register("name", {
                  required: "Full name is required",
                })}
              />
              <Input
                label="Email"
                placeholder="Enter your Gmail address"
                type="email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    isGmail: (value) =>
                      /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) ||
                      "Only Gmail addresses (@gmail.com) are allowed",
                  }
                })}
              />
              <div>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a strong password"
                  error={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) || "Must include at least one uppercase letter",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) || "Must include at least one lowercase letter",
                      hasNumber: (value) =>
                        /[0-9]/.test(value) || "Must include at least one number",
                      hasSpecial: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Must include at least one special character (!@#$%^&*...)",
                    },
                  })}
                />
                {!errors.password && (
                  <p className="text-zinc-600 text-xs mt-1.5 pl-1">
                    Min 8 chars, uppercase, lowercase, number & special character
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full mt-2">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup