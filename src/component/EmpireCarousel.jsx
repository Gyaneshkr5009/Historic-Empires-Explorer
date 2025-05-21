import React from 'react';

const EmpireCarousel = ({ empires }) => {
  if (!empires || empires.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:right-auto md:w-[calc(100%-16rem)] md:left-64 z-40">
      <div className="flex gap-2 overflow-x-auto p-4 rounded-t-2xl bg-black/40 backdrop-blur-md shadow-lg scroll-smooth scrollbar-hide">
        {empires.map((empire, index) => (
          <div
            key={index}
            className="min-w-[220px] bg-white/5 rounded-xl p-5 flex-shrink-0 transition-transform transform hover:scale-105 hover:bg-white/10 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={empire.emblem}
                alt={`${empire.name} Emblem`}
                className="w-12 h-12 object-contain rounded-full border border-yellow-400"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">{empire.name}</h3>
                <p className="text-sm text-yellow-300">{empire.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpireCarousel;