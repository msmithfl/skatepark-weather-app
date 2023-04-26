import React from "react";
import CityForm from "./SearchForm";

export default function Search() {
  return (
    <div className="flex flex-col gap-2 mx-2 sm:flex-row sm:justify-center">
      <CityForm />
      {/* <input className="border outline-none rounded" placeholder="Enter city" />
      <input
        className="border outline-none rounded"
        placeholder="Enter radius"
      />
      <button className="bg-slate-100 p-1 rounded hover:duration-100 hover:bg-slate-200">
        Search
      </button> */}
    </div>
  );
}
