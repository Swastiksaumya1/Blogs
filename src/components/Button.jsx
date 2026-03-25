import React from 'react'

function Button({ 
    children,
    type = 'button',
    bgColor = 'bg-gradient-to-r from-indigo-500 to-violet-500',
    textColor = 'text-white',
    className = '',
    ...props
    
}) {
  return (
      <button
      type={type}
      className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${bgColor} ${textColor} ${className}`} {...props}>
          {children}
    </button>
  )
}

export default Button