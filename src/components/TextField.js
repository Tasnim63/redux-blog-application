import React from 'react'

export default function TextField({label ,inputProps ,onChange ,value}) {
  return (
   <div className=' flex flex-col'>
   <label className=' mb-2 text-base '>{label}</label>
   <input type="text"
   className='bg-slate-200 py-2 px-3 border-2 out'
   {...inputProps}
   onChange={onChange}
   value={value}
   />
   </div>
  )
}
