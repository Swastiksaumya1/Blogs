import React, { useId } from 'react'

function Select({ 
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
      <div className='w-full'>
          {label && <label htmlFor={id} className='inline-block mb-1.5 pl-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors'>{label}</label>}
          <select
              {...props}
              id={id}
              ref={ref}
              className={`px-4 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white dark:focus:bg-zinc-800 transition-all duration-200 border border-zinc-200 dark:border-zinc-700/50 w-full cursor-pointer appearance-none ${className}`}>
              {options?.map((option) => (
                  <option key={option} value={option} className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      {option}
                  </option>
             ))}
          </select>
      </div>
  )
}

export default React.forwardRef(Select)