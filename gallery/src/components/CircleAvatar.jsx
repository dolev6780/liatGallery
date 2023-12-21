import React from "react";

export default function CircleAvatar({galleryName, coverImg}) {
  return (
    <div className="my-5">
      <div className="border-2 mx-4 rounded-full w-20 h-20 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 flex items-center justify-center">
        <img className="rounded-full w-full h-full" src={coverImg} alt={galleryName} />
      </div>
      <label className="text-sm">{galleryName}</label>
    </div>
  );
}
