import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import countries from '../Services/countries';
import { PanelLeftOpen } from 'lucide-react';

const SideBar = ({ selectedCountry, setSelectedCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleCountrySelect = (country) => {
    setSearch(country.name);
    setSelectedCountry(country.name);
    if (window.innerWidth < 768) {
      setIsOpen(false); // auto close on mobile
    }
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Burger Button - only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-24 right-4 z-50 p-2 bg-[#253030] text-white rounded-lg shadow-md hover:bg-[#0e1624] transition"
        aria-label="Toggle sidebar"
      >
        <PanelLeftOpen size={24} />
      </button>

      {/* Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 z-40 w-64 h-full bg-[#101820] text-white p-4 space-y-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:h-[calc(100vh-80px)] md:block overflow-y-auto
        `}
      >
        {/* Header */}
        <div className="mb-6">
          <div className='flex flex-row'>
            <div className="text-yellow-400 text-3xl mb-1">📜</div>
            <h1 className="text-xl font-semibold text-blue-300 leading-tight">
              HISTORIC <span className="text-yellow-400">EMPIRES</span> EXPLORER
            </h1>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Dive into the stories of the greatest empires in history
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedCountry(null);
            }}
            className="w-full bg-black/30 text-white border border-white/20 rounded-full px-4 py-2 pl-10 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-white/60" />
        </div>

        {/* Country List */}
        <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 scroll-smooth">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <li
                key={country.name}
                onClick={() => handleCountrySelect(country)}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                  bg-white/10 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-lg
                  transition duration-200 ease-in-out transform hover:scale-105
                  ${selectedCountry === country.name ? "ring-2 ring-blue-400" : ""}
                  hover:z-10`}
                style={{ willChange: 'transform, background-color, box-shadow' }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-10 h-10 rounded-md border border-white/30 shadow-sm"
                />
                <span className="text-base font-semibold tracking-wide">{country.name}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-400 px-4">No countries found.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
