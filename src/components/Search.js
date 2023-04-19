import React from "react";
import "../App.css";

export default function Search() {
  return (
    <div className="search-container">
      <input className="search-bar" placeholder="Search city" />
      <button className="search-btn">Search</button>
    </div>
  );
}
