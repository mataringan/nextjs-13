"use client";
import React from "react";

export default function Button() {
  const handleOnClick = () => {
    alert("Ok");
  };
  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
    </div>
  );
}
