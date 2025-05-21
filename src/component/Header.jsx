import React from 'react'
import Crown from "../assets/crown2.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
        HISTORIC EMPIRES EXPLORER
      </div>
      <img src={Crown} alt="Crown Logo" className="w-16 h-16" />
    </header>
  )
}

export default Header
