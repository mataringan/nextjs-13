"use client";
import React from "react";

export default function Button() {
  const handleOnClick = () => {
    alert("Ok");
  };
  return (
    <div>
      <button onClick={handleOnClick} className="bg-yellow-400 w-11">
        Click
      </button>
    </div>
  );
}
