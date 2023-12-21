import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Footer() {
  return (
    <div className='py-10'>
      <div>
      <button className='p-2 text-4xl '><FacebookOutlinedIcon fontSize='inherit'/></button>
      <button className='p-2 text-4xl '><InstagramIcon fontSize='inherit'/></button>
      <button className='p-2 text-4xl '><WhatsAppIcon fontSize='inherit'/></button>
      </div>
    </div>
  )
}
