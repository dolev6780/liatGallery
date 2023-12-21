import React, { useState } from "react";
import MainAdminPage from "./adminDisplays/MainAdminPage";
import AddGallery from "./adminDisplays/AddGallery";
export default function Admin() {
  const [whichDisplay, setWhichDisplay] = useState("main");
  const handleDisplay = (whichDisplay) => {
    setWhichDisplay(whichDisplay);
  };
  const showDisplay = (whichDisplay) => {
    switch (whichDisplay) {
      case "main":
        return <MainAdminPage handleDisplay={handleDisplay} />;
      case "addGallery":
        return <AddGallery handleDisplay={handleDisplay} />;
      default:
        break;
    }
  };
  return <div className="h-screen">{showDisplay(whichDisplay)}</div>;
}
