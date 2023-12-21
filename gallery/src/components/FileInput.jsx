import React from "react";

const FileInput = ({ text, setCoverImg, coverImg }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="justify-end flex items-center">
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleImageChange}
      />
      <div>
        <label
          htmlFor="fileInput"
          className={`cursor-pointer bg-inherit rounded-lg border pl-8 pr-2 py-2 ${coverImg ? "border-green-500 text-green-500 font-bold" : ""}`}
        >
          {coverImg ? "תמונה נבחרה" : text}
        </label>
      </div>
    </div>
  );
};

export default FileInput;
