import React, { useState } from "react";
import FileInputCover from "../../components/FileInput";
import CircleAvatar from "../../components/CircleAvatar";
import MultipleFileInput from "../../components/MultipleFileInput";

export default function AddGallery() {
  const [galleryName, setGalleryName] = useState("");
  const [coverImg, setCoverImg] = useState(null);

  const [galleryImages, setGalleryImages] = useState([]);

  const addToGallery = (img) => {
    if (img) {
      for (let index = 0; index < galleryImages.length; index++) {
        if (img === galleryImages[index]) {
          return;
        }
      }
      setGalleryImages((prev) => [...prev, img]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl">הוספת גלריה חדשה</h1>
      <div className="flex flex-row-reverse items-center my-10 justify-evenly">
        <div>
          <input
            dir="rtl"
            type="text"
            className="border bg-inherit p-2 rounded-lg placeholder:text-white w-[8rem]"
            placeholder="שם הגלריה"
            onChange={(e) => {
              setGalleryName(e.target.value);
            }}
          />
        </div>
        <div>
          <FileInputCover
            text={"תמונת גלריה"}
            setCoverImg={setCoverImg}
            coverImg={coverImg}
          />
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex justify-center">
        <CircleAvatar galleryName={galleryName} coverImg={coverImg} />
      </div>
      <div className="mt-4 flex justify-center p-4">
        <MultipleFileInput text={"הוסף תמונה"} addToGallery={addToGallery} />
      </div>

      <div className="mt-10 flex gap-3 flex-wrap justify-center">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
