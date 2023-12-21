import React from "react";

export default function MultipleFileInput({ text, addToGallery }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        addToGallery(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input
        type="file"
        id="files"
        name="files"
        className="hidden"
        onChange={handleImageChange}
      />
      <div>
        <label
          htmlFor="files"
          className={`cursor-pointer bg-inherit rounded-lg border pl-8 pr-2 py-2`}
        >
          {text}
        </label>
      </div>
    </div>
  );
}
