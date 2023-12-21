import React from 'react'

export default function MainAdminPage({handleDisplay}) {
  return (
    <div>
        <button onClick={()=> {handleDisplay("addGallery")}} className="bg-neutral-800 p-2 rounded font-bold">
          הוספת גלריה חדשה
        </button>
    </div>
  )
}
