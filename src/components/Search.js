import React from "react";
import "../App.css";

export default function Search() {
  return (
    <div className="flex justify-center gap-1">
      <input
        className="border outline-none rounded"
        placeholder="Search city"
      />
      <input
        className="border outline-none rounded"
        placeholder="Enter radius"
      />
      <button className="bg-slate-100 p-1 rounded">Search</button>
    </div>
  );
}
