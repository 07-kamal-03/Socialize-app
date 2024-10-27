import React from 'react'
import fbLogo from '../assets/featured-small-circular.webp';
import { ImUsers } from 'react-icons/im';
import { SidebarItem } from './SidebarItem';
import { MdGroup, MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';


export const Sidebar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
      <div className='flex items-center py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
        <img src={fbLogo} alt='Facebook Logo' width={40} height={40} />
        <p className='hidden xl:inline-flex font-semibold whitespace-nowrap p-3 max-w-xs'>Kamalraj</p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroup} value="Group" />
      <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See More" />
    </div>
  )
}
