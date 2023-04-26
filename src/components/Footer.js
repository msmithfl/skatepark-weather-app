import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-black/[.7] z-10 p-4">
      <div className="flex justify-around">
        <i className="fa-solid fa-magnifying-glass text-lg"></i>
        <i className="fa-solid fa-map text-lg"></i>
        <i className="fa-solid fa-heart text-lg"></i>
      </div>
    </div>
  );
}

export default Footer;
