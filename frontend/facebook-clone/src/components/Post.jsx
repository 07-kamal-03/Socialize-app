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
        <p className='py-4'>Kamalraj<br></br>
          Salem, Tamil Nadu - 636116, India<br></br>
          +91 9344821633<br></br>
          kamalprs50@gmail.com<br></br>
          10/26/2024<br></br><br></br>

          <b>Dear Hiring Team,</b><br></br><br></br>

          I am writing to express my interest in the Software Engineer position. With a Bachelor’s degree in Electronics and Communication Engineering and a year of experience in software development, I am eager to contribute my skills and passion for technology to your team.<br></br><br></br>

          Throughout my internship at Moonraft Innovation Labs, I successfully led the development of a CMS-based healthcare platform, resulting in a 25% increase in website traffic. This experience honed my proficiency in technologies such as Java, Spring Boot, and React.js, allowing me to build scalable, high-performance applications that meet user needs.<br></br><br></br>

          I am particularly drawn to this opportunity because of the commitment to innovation and excellence in software solutions. I admire the values of the organization and am excited about the opportunity to contribute to such impactful work. My collaborative approach, combined with strong problem-solving skills, enables me to work effectively in cross-functional teams to achieve project goals.<br></br><br></br>

          I am passionate about continuous learning and growth in the tech industry, and I am confident that my technical skills and dedication will allow me to make a positive impact. I look forward to the possibility of discussing how my background, skills, and enthusiasm align with the needs of your team.<br></br><br></br>

          Thank you for considering my application. I have attached my resume for your review and would welcome the opportunity to discuss my candidacy further.<br></br><br></br>

          Warm regards,<br></br>
          Kamalraj</p>
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
