import React, {useState} from 'react'

export default function PopContactUs() {

  const [closePopContact, setClosePopContact] = useState(false);

  const closePop = () => {
    setClosePopContact(!closePopContact);
  }
  return (
    <div className=" w-full fixed flex justify-end p-10">
      <button
        hidden={!closePopContact}
        className={`${
          !closePopContact ? "" : ""
        } bg-pink-200 fixed p-2 rounded-3xl`}
        onClick={closePop}
      >
       ליצירת קשר
      </button>
      <div
        className={`${
          closePopContact ? "hidden" : ""
        } bg-pink-200 text-neutral-800 px-5 py-8 rounded-lg grid grid-flow-row justify-center items-center fixed`}
      >
        <button
          className="absolute right-0 top-0 mr-2 text-2xl font-semibold"
          onClick={closePop}
        >
          x
        </button>
        <h1 className="mb-5 text-2xl">ליצירת קשר</h1>
        <div className="gap-2 flex flex-col">
          <div dir="rtl" className="flex justify-between items-center">
            <label className="ml-2">שם מלא:</label>
            <input
              type="text"
              className="border-2 border-black rounded-md p-1"
            />
          </div>
          <div dir="rtl" className="flex justify-between items-center">
            <label className="ml-2">טלפון:</label>
            <input
              type="text"
              className="border-2 border-black rounded-md p-1"
            />
          </div>
          <div dir="rtl" className="flex justify-between items-center">
            <label className="ml-2">אימייל:</label>
            <input
              type="text"
              className="border-2 border-black rounded-md p-1"
            />
          </div>
        </div>
        <div className="text-left">
          <button className="w-24 py-1 mt-5 border-2 border-black rounded-md hover:bg-pink-300">
            שלח
          </button>
        </div>
      </div>
    </div>
  );
}
