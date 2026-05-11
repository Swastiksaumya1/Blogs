import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed transition-colors">
              Share your ideas with the world. A modern blogging platform built for creators.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 transition-colors">
              Company
            </h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 transition-colors">
              Support
            </h3>
            <ul className="space-y-3">
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 transition-colors">
              Legals
            </h3>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors">
          <p className="text-sm text-zinc-500 dark:text-zinc-600 text-center transition-colors">
            &copy; {new Date().getFullYear()} MegaBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer