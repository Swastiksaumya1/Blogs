import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    error = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1.5 pl-1 text-sm font-medium text-zinc-300'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-4 py-2.5 rounded-lg bg-zinc-800/50 text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-zinc-800 duration-200 border ${error ? 'border-rose-500/50' : 'border-zinc-700/50'} w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            {error && (
                <p className="text-rose-400 text-xs mt-1.5 pl-1">{error}</p>
            )}
        </div>
    )
})

export default Input