import React from 'react';
import fbLogo from '../assets/Socialize_app_logo.jpg';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineHome } from 'react-icons/hi';
import { RiFlag2Line } from 'react-icons/ri';
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md';
import { AiFillBell, AiFillMessage, AiOutlineShop } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';

export const Header = () => {
    return (
        <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
            {/* Left */}
            <div className='flex min-w-fit'>
                <img src={fbLogo} alt='Facebook Logo' width={40} height={40} />
                <div className='flex items-center space-x-2 ml-2 px-2 rounded-full bg-gray-100 text-gray-500'>
                    <HiOutlineSearch size={20} />
                    <input type='text' placeholder='Search People' className='hidden lg:inline-flex bg-transparent focus:outline-none' />
                </div>
            </div>
            {/* Center */}
            <div className='flex flex-grow justify-center mx-2'>
                <div className='flex items-center'>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <HiOutlineHome size={25} className='mx-auto' />
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <RiFlag2Line size={25} className='mx-auto' />
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineOndemandVideo size={25} className='mx-auto' />
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <AiOutlineShop size={25} className='mx-auto' />
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <IoGameControllerOutline size={25} className='mx-auto' />
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className='flex items-center space-x-2'>
                <img src={fbLogo} alt='Facebook Logo' width={40} height={40} />
                <p className='hidden xl:inline-flex font-semibold whitespace-nowrap p-3 max-w-xs'>Kamalraj</p>
                <CgMenuGridO size={20} className='hidden lg:inline-flex w-10 h-10 bg-gray-200 text-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                <AiFillMessage size={20} className='hidden lg:inline-flex w-10 h-10 bg-gray-200 text-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                <AiFillBell size={20} className='hidden lg:inline-flex w-10 h-10 bg-gray-200 text-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                <MdOutlineExpandMore size={20} className='hidden lg:inline-flex w-10 h-10 bg-gray-200 text-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
            </div>
        </div>
    )
}
