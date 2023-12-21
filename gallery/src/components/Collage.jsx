import React from "react";
import Dialog from "./Dialog";

export default function Collage({ imageList }) {
  return (
    <div className="flex flex-wrap p-4 justify-center 2xl:mt-20">
      <div className="w-full sm:w-[50vw] 2xl:h-[650px] h-[450px] overflow-y-scroll grid grid-flow-row grid-cols-3 gap-1 2xl:gap-3 custom-scrollbar">
        {imageList?.map((item, i) => (
          <Dialog key={i} imageList={imageList} i={i} />
        ))}
      </div>
    </div>
  );
}
