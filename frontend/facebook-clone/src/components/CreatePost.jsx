import React, { useRef, useState } from 'react';
import fbLogo from '../assets/Facebook_f_logo_(2021).svg';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '../../public/src/features/postSlice';

export const CreatePost = () => {
    const [imageToPost, setImageToPost] = useState(null);
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const dispatch = useDispatch();
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]);
        {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setImageToPost(reader.result);
            };
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) {
            return;
        }
        const formData = new FormData();
        formData.append('post_text', inputRef.current.value);
        formData.append('post_image', imageToPost);

        axios.post("", formData, {
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                inputRef.current.value = '';
                dispatch(addPost(response.data));
                setImageToPost(null);
            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }
    return (
        <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
            <div className='flex p-4 items-center space-x-2'>
                <img src={fbLogo} alt='Facebook Logo' width={40} height={40} />
                <form className='flex flex-1'>
                    <input type="text" ref={inputRef} placeholder="What's on your mind?" className='flex-grow focus:outline-none bg-gray-100 px-4 h-12 font-medium rounded-full border-none ' />
                    <button type="submit" onClick={handleSubmit} hidden className='w-24 h-12 text-white bg-blue-500 rounded-md'>Post</button>
                </form>
            </div>
            {imageToPost &&
                <div className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer'>
                    <img src={imageToPost} className='h-20 object-contain' alt='image' />
                    <RiDeleteBin6Line className="hover:text-red-500 h-8" onClick={() => (setImageToPost(null))} />
                </div>}
            <div className='flex justify-evenly py-2'>
                <div className='flex justify-center items-center space-x-1 p-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                    <HiOutlineVideoCamera size={20} className='text-red-500' />
                    <p className='font-semibold text-gray-600'>Live</p>
                </div>
                <div onChange={addImageToPost} onClick={handleClick} className='flex justify-center items-center space-x-1 p-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                    <IoMdPhotos size={20} className='text-green-500' />
                    <p className='font-semibold text-gray-600'>Photo/Video</p>
                    <input type='file' ref={hiddenFileInput} hidden />
                </div>
                <div className='flex justify-center items-center space-x-1 p-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                    <BsEmojiSmile size={20} className='text-yellow-500' />
                    <p className='font-semibold text-gray-600'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}
