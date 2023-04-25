import React from "react";
import "../App.css";
import Card from "./Card";

export default function Feed() {
  return (
    <div className="flex flex-col m-2">
      <Card />
      <Card />
    </div>
  );
}
