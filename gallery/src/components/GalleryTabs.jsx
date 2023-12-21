import React from "react";

export default function GalleryTabs() {
  return (
    <div className="grid grid-flow-col px-32 gap-10">
      <button className="border rounded py-1 bg-blue-500">רקעים לבחירה</button>
      <button className="border rounded py-1 bg-blue-500">הריון</button>
      <button className="border rounded py-1 bg-blue-500">גיל שנה</button>
      <button className="border rounded py-1 bg-blue-500">פורים</button>
      <button className="border rounded py-1 bg-blue-500">כללי</button>
    </div>
  );
}
