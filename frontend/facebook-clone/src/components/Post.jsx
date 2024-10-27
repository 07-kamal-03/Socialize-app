import React from 'react';
import fbLogo from '../assets/featured-small-circular.webp';
import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

export const Post = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white mt-4 p-4 rounded-md'>
        <div className='flex items-center space-x-2'>
          <img src={fbLogo} alt='Facebook Logo' className='w-10 h-10 rounded-full' />
          <div>
            <p className='font-medium'>Kamalraj</p>
            <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p>
          </div>
        </div>
        <p className='py-4'>llaal</p>
      </div>
      <div className='relative bg-white'>
        <img src='https://images.pexels.com/photos/19989453/pexels-photo-19989453/free-photo-of-gardskagaviti-lighthouse-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full object-cover' />
      </div>
      <div className='flex items-center justify-center bg-white p-2'>
        <div className='flex items-center space-x-1 justify-center p-2 rounded-xl flex-grow hover:bg-gray-100 cursor-pointer'>
          <FiThumbsUp className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='flex items-center space-x-1 justify-center p-2 rounded-xl flex-grow hover:bg-gray-100 cursor-pointer'>
          <FaRegCommentAlt className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='flex items-center space-x-1 justify-center p-2 rounded-xl flex-grow hover:bg-gray-100 cursor-pointer'>
          <RiShareForwardLine className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}
