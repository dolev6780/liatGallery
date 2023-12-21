import React from "react";
import logo from "../assets/logo.png";
export default function Logo() {
  return (
    <div className="p-4 flex justify-end">
      <img className="w-32" src={logo} alt="" />
    </div>
  );
}
