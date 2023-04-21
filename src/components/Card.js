import React from "react";

export default function Card() {
  return (
    <div className="flex justify-center h-20 m-2 bg-slate-300">
      <div>
        <p className="text-2xl">Skatepark Name</p>
        <p>Distance: 15 mi.</p>
      </div>
      <div className="flex items-center">
        <img className="w-20" alt="weather-icon" src="icons/01d.png" />
        <p className="text-4xl text-right">76°F</p>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}
