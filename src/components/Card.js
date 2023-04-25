import React from "react";

export default function Card() {
  return (
    <div className="flex items-center justify-between h-20 mb-1 p-2 bg-slate-200 rounded-sm">
      <div>
        <p>Skatepark Name</p>
        <p>Distance: 15 mi.</p>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <img className="w-11" alt="weather-icon" src="icons/01d.png" />
          <p>76°F</p>
        </div>
        <i className="fa-solid fa-plus text-slate-600"></i>
      </div>
    </div>
  );
}
