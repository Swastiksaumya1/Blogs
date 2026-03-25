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
          {label && <label htmlFor={id} className='inline-block mb-1.5 pl-1 text-sm font-medium text-zinc-300'>{label}</label>}
          <select
              {...props}
              id={id}
              ref={ref}
              className={`px-4 py-2.5 rounded-lg bg-zinc-800/50 text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-zinc-800 duration-200 border border-zinc-700/50 w-full cursor-pointer ${className}`}>
              {options?.map((option) => (
                  <option key={option} value={option} className="bg-zinc-800 text-zinc-100">
                      {option}
                  </option>
             ))}
          </select>
      </div>
  )
}

export default React.forwardRef(Select)