import React from 'react'
import SideBar from './component/SideBar'
import Crown from "./assets/crown2.svg"

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-2 ml-4 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
          Historic Empires <span className="text-white">Explorer</span>
        </div>
        <img src={Crown} alt="Crown Logo" className="w-20 h-20" />
        
      </header>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row h-[90vh]">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-black/40 border-r border-white/10 p-2 overflow-y-auto">
          <SideBar />
        </aside>

        {/* Map and Empire Cards */}
        <main className="flex-1 relative">
          {/* Google Map container */}
          <div id="map" className="h-full w-full">
            {/* This is where you will initialize Google Map or Mapbox */}
          </div>

          {/* Empire Carousel */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="flex gap-4 overflow-x-auto backdrop-blur-sm bg-black/30 p-3 rounded-xl">
              {/* Example Empire Card */}
              <div className="min-w-[200px] bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
                <img src="/emblem.png" alt="Empire Emblem" className="w-10 h-10 mb-2" />
                <h3 className="text-yellow-400 font-bold">Roman Empire</h3>
                <p className="text-white/70 text-sm">27 BC - 476 AD</p>
              </div>
              {/* Repeat more cards dynamically */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
