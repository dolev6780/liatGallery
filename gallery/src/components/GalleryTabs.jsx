import React from "react";
import '../App.css';
export default function GalleryTabs() {
  return (
    <div>
      <div className="gap-10 flex flex-row-reverse justify-center">
        <button className="w-32 rounded-md bg-gradient-to-b from-[#99a18a] to-[#d09279] p-0.5 hover:scale-105 transition-all animate-gradient">
          <p className="bg-black rounded-md p-1 font-normal">רקעים לבחירה</p>
        </button>
        <button className="w-32 rounded-md bg-gradient-to-b from-[#99a18a] to-[#d09279] p-0.5 hover:scale-105 transition-all animate-gradient">
          <p className="bg-black rounded-md p-1 font-normal">הריון</p>
        </button>
        <button className="w-32 rounded-md bg-gradient-to-b from-[#99a18a] to-[#d09279] p-0.5 hover:scale-105 transition-all animate-gradient">
          <p className="bg-black rounded-md p-1 font-normal">גיל שנה</p>
        </button>
        <button className="w-32 rounded-md bg-gradient-to-b from-[#99a18a] to-[#d09279] p-0.5 hover:scale-105 transition-all animate-gradient">
          <p className="bg-black p-1 rounded-md font-normal">פורים</p>
        </button>
        <button className="w-32 rounded-md bg-gradient-to-b from-[#99a18a] to-[#d09279] p-0.5 hover:scale-105 transition-all animate-gradient">
          <p className="bg-black p-1 rounded-md font-normal">כללי</p>
        </button>
      </div>
    </div>
  );
}
