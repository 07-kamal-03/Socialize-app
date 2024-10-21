import React from 'react'

export const Contacts = ({src, name, status}) => {
    
  return (
    <div className='flex items-center space-x-2 py-2 pl-1 rounded-l-xl hover:bg-gray-200 cursor-pointer relative'>
        <img src={src} className='w-[40px] h-[40px] rounded-full cursor-pointer' alt='profile'/>
        <p className='hidden sm:inline-flex text-sm font-semibold'>{name}</p>
        { status === 'Online' ? <div className={`w-4 h-4 bg-green-500 rounded-full border-2 absolute left-5 bottom-2`}></div> : <div className={`w-4 h-4 bg-gray-500 rounded-full border-2 absolute left-5 bottom-2`}></div> }
        
    </div>
  )
}
