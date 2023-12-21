import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function FullScreenDialog({ imageList, i }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(i);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (idx < imageList.length - 1) {
      setIdx(idx + 1);
    }
  };

  const handlePrev = () => {
    if (idx > 0) {
      setIdx(idx - 1);
    }
  };
  return (
    <div>
      <img
        onClick={handleClickOpen}
        className={`cursor-pointer w-full relative ${
          i % 2 === 0 ? "h-40 xl: xl:h-96" : "h-36 xl:h-[23rem] top-2"
        } col-span-1 rounded object-fill`}
        src={imageList[i].img}
        alt={imageList[i].title}
        loading="lazy"
      />
      <Dialog open={open} onClose={handleClose}>
        <div className="overflow-hidden">
          <div className="absolute z-50 text-white flex justify-end w-full">
            <IconButton onClick={handleClose} color="inherit">
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="absolute text-white flex justify-between items-center h-full w-full">
            <IconButton onClick={handlePrev} color="inherit">
              <ArrowBackIosIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={handleNext} color="inherit">
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </div>
          <img className=" w-full" src={imageList[idx].img} alt="" />
        </div>
      </Dialog>
    </div>
  );
}
