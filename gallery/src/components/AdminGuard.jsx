import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const AdminGuard = ({ element }) => {
  const [password, setPassword] = useState("");
  const [sigendIn, setSignedIn] = useState(false);
  const email = "liatphotography.portfolio@gmail.com";
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignedIn(false);
      });
  };

  return (
    <>
      {sigendIn ? (
        element
      ) : (
        <div className="p-4 h-[80vh] items-center grid">
          <div>
            <p className="font-bold text-3xl">הכנס סיסמת מנהל</p>
            <div>
              <input
                dir="rtl"
                className="bg-inherit border-2 rounded p-2 px-4 mt-4"
                type="password"
                placeholder="הכנס סיסמא"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
            onClick={handleSubmit}
            className="border-2 p-1 px-6 mt-4 rounded font-bold">
              שלח
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminGuard;
