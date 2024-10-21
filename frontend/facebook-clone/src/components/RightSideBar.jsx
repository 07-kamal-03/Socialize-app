import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import { RiVideoAddFill } from 'react-icons/ri'
import { Contacts } from './Contacts'
import fbLogo from '../assets/Facebook_f_logo_(2021).svg';

export const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex-grow text-lg font-semibold'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='p-2 rounded-full cursor-pointer hover:bg-gray-200'>
                    <RiVideoAddFill />
                </div>
                <div className='p-2 rounded-full cursor-pointer hover:bg-gray-200'>
                    <BiSearch />
                </div>
                <div className='p-2 rounded-full cursor-pointer hover:bg-gray-200'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
        {/* Contact List */}
        <Contacts src={fbLogo} name="Kamalraj" status="Online" />
        <Contacts src={fbLogo} name="Kamalraj" status="Offline" />
        <Contacts src={fbLogo} name="Kamalraj" status="Online" />
    </div>
  )
}