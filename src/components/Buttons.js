import React from 'react'

export default function Buttons({onClick, children}) {
  return (
  <button className=' bg-indigo-600 text-white px-6 py-2 my-10 rounded hover:bg-pink-500' onClick={onClick}>
      {children}
  </button>
  )
}
