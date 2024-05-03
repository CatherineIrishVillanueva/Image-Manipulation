import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center bg-white border-b border-gray-300 shadow-lg px-4 h-24 text-[#00df9a]' style={{ fontFamily: 'Poppins' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Poppins' }}>
                <FontAwesomeIcon icon={faPhotoFilm} className="text-gray-600 h-8 w-auto mr-2" style={{ width: '35px', height: '35px', marginLeft: '55px' }} />
                <h1 className='text-3xl font-bold m-0 text-gray-600'>image<span className='text-gray-400'>UVD </span></h1>
            </div>

            <ul className='hidden md:flex'>
                <li className='p-4 text-[#8a9491] relative font-bold text-lg'>Home
                    <span className="absolute bottom-2 left-4 w-[55px] h-1 bg-[#00df9a] rounded-full text-lg"></span>
                </li>
                <li className='p-4 text-black font-bold text-lg'>About</li>
                <li className='p-4 text-black font-bold text-lg'>How to use</li>
                <li className='p-4 text-black font-bold text-lg'>Tools & API</li>
                <li className='p-4 text-black font-bold text-lg'>Pricing</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-black" />}
            </div>
            <div className={nav ? 'fixed inset-0 bg-white bg-opacity-90 z-50' : 'fixed left-[-100%]'} onClick={handleNav}>
                <div className='w-[60%] h-full border-r border-gray-300 bg-white shadow-lg'>
                    <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Poppins', marginTop: '30px', marginLeft: '16px' }}>
                        <FontAwesomeIcon icon={faPhotoFilm} className="text-gray-600 h-8 w-auto mr-2" style={{ width: '35px', height: '35px', marginLeft: '55px' }} />
                        <h1 className='text-3xl font-bold m-0 text-gray-600'>image<span className='text-gray-400'>UVD </span></h1>
                    </div>
                    <ul className='uppercase'>
                        <li className='p-4 text-[#8a9491] font-bold'>Home</li>
                        <li className='p-4 text-black font-bold'>About</li>
                        <li className='p-4 text-black font-bold'>How to use</li>
                        <li className='p-4 text-black font-bold'>Tools & API</li>
                        <li className='p-4 text-black font-bold'>Pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
