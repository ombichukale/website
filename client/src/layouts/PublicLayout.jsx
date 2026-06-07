import React from 'react'
import Navbar from '../components/Navbar'

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="p-8">
        {children}
      </div>
    </div>
  )
}

export default PublicLayout