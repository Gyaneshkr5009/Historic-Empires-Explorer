import React from 'react';
import { FaSearch } from 'react-icons/fa';

const countries = [
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'China', flag: '🇨🇳' },
];

const SideBar = () => {
  return (
    <div className="bg-[#061322] text-white p-6 w-64 rounded-xl shadow-xl h-full">
      {/* Scroll Icon and Title */}
      <div className="mb-6">
        <div className="text-yellow-400 text-3xl mb-1">📜</div>
        <h1 className="text-xl font-semibold text-blue-300 leading-tight">
          HISTORIC <span className="text-yellow-400">EMPIRES</span><br />EXPLORER
        </h1>
        <p className="text-sm text-gray-400 mt-2">Dive into the stories of the greatest empires in history</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#0B1B2B] w-full p-2 pl-10 rounded-lg text-sm placeholder-gray-400 outline-none"
        />
        <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
      </div>

      {/* Country List */}
      <ul className="space-y-3">
        {countries.map((country, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
              country.name === 'Greece'
                ? 'bg-blue-900 border border-blue-400'
                : 'hover:bg-blue-800 transition'
            }`}
          >
            <span className="text-xl">{country.flag}</span>
            <span className="text-white">{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar