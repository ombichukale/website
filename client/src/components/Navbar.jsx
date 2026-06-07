import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-900 border-b border-zinc-800">
      
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">
          AI Builder
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar