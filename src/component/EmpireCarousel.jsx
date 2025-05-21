// EmpireCarousel.jsx
import React from 'react';

const EmpireCarousel = ({ empires }) => {
  if (!empires || empires.length === 0) return null;

  return (
    <div className="absolute bottom-4 left-0 right-0 px-4">
      <div className="flex gap-4 overflow-x-auto backdrop-blur-sm bg-black/30 p-3 rounded-xl">
        {empires.map((empire, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <img src={empire.emblem} alt={`${empire.name} Emblem`} className="w-10 h-10 mb-2" />
            <h3 className="text-yellow-400 font-bold">{empire.name}</h3>
            <p className="text-white/70 text-sm">{empire.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpireCarousel;
