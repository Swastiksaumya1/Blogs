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
                className='inline-block mb-1.5 pl-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-4 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white dark:focus:bg-zinc-800 transition-all duration-200 border ${error ? 'border-rose-500/50' : 'border-zinc-200 dark:border-zinc-700/50'} w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            {error && (
                <p className="text-rose-600 dark:text-rose-400 text-xs mt-1.5 pl-1">{error}</p>
            )}
        </div>
    )
})

export default Input