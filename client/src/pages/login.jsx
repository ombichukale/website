import React from 'react'

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-xl">
      <h1 className="text-white text-3xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Enter email"
        className="w-full p-3 rounded-lg bg-zinc-800 text-white mb-4 outline-none"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="w-full p-3 rounded-lg bg-zinc-800 text-white mb-4 outline-none"
      />

      <button className="w-full bg-white text-black py-3 rounded-lg font-semibold">
        Login
      </button>
    </div>
  )
}

export default Login