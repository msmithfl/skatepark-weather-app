import React from "react";
import "../App.css";

export default function Search() {
  return (
    <div className="flex justify-center gap-1">
      <input className="border outline-none rounded" placeholder="Enter city" />
      <input
        className="border outline-none rounded"
        placeholder="Enter radius"
      />
      <button className="bg-slate-100 p-1 rounded hover:duration-100 hover:bg-slate-200">
        Search
      </button>
    </div>
  );
}
