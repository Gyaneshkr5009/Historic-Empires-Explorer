import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import countries from '../Services/countries';

const SideBar = ({ selectedCountry, setSelectedCountry }) => {
  const [search, setSearch] = useState("");

  const handleCountrySelect = (country) => {
    setSearch(country.name); // show country name in input
    setSelectedCountry(country.name); // update parent state
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
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
      <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-1 scroll-smooth">
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
  );
};

export default SideBar;