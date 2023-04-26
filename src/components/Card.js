import React from "react";

export default function Card() {
  return (
    <div className="flex items-center justify-between h-20 mb-1 p-2 bg-slate-100/[.3] rounded-sm">
      <div>
        <p className="text-black">Skatepark Name</p>
        <p className="text-sm text-black">Distance: 15 mi.</p>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <img className="w-12" alt="weather-icon" src="icons/01d.png" />
          <p className="font-bold text-black">76°F</p>
        </div>
        <i className="fa-regular fa-heart text-slate-100/[.4] text-lg pl-3 pr-1"></i>
      </div>
    </div>
  );
}
