import React, { useState } from 'react';
import { SideBar, Header } from './component';
import EmpireCarousel from './component/EmpireCarousel';
import empireData from './Services/Emperiors';
import Map from './component/Map'

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const empires = empireData[selectedCountry] || [];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <SideBar
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        {/* Right Content */}
        <div className="w-full md:w-3/4 flex flex-col h-[calc(100vh-80px)] overflow-y-auto relative">
          {selectedCountry ? (
            // Content when country is selected
            <div className="p-4 md:ml-64"> {/* Added margin to account for vertical carousel */}
              {/* Your main content here */}
              {/* EmpireCarousel is now positioned independently */}
              <EmpireCarousel empires={empires} />
            </div>
          ) : (
            // Placeholder when no country is selected
            <div className="flex-1 flex items-center justify-center">
              <p className="text-center text-xl text-gray-400">
                <Map />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;