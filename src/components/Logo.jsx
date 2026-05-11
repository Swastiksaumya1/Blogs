import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center gap-2" style={{width}}>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-gradient">Mega</span>
        <span className="text-zinc-900 dark:text-zinc-100 transition-colors">Blog</span>
      </span>
    </div>
  )
}

export default Logo