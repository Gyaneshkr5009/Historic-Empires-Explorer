import React, { useState } from 'react';
import { SideBar, Header } from './component';
import EmpireCarousel from './component/EmpireCarousel';
import empireData from './Services/Test';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const empires = empireData[selectedCountry] || [];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Side Bar */}
        <div className="col-span-1">
          <SideBar
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>

        {/* Right Side - Google Map & Carousel */}
        <div className="col-span-1 md:col-span-3 relative">
          {/* Future Map Area */}
          <div className="h-[calc(100vh-80px)]">
            <p className="text-center pt-10 text-xl text-gray-400">
              Map and country data will appear here.
            </p>
          </div>

          {/* Empire Carousel */}
          <EmpireCarousel empires={empires} />
        </div>
      </div>
    </div>
  );
};

export default App;
