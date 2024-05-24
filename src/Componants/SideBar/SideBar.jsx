
import React from 'react';
import home from '../../assets/home.png';
import explore from '../../assets/explore.png';
import learn from '../../assets/learn.png';
import achieve from '../../assets/achieve.png';
import practice from '../../assets/practice.png';
import project from '../../assets/project.png';
import career from '../../assets/career.png';
import mento from '../../assets/mento.png';
import blog from '../../assets/blog.png';
import community from '../../assets/community.png';
import insta from '../../assets/instagram.png';
import discord from '../../assets/discord.png';
import whatsapp from '../../assets/whatsapp.png';
import utube from '../../assets/youtube.png';
import linkedin from '../../assets/linkedin.png';
import connect from '../../assets/connect.png';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center fixed top-16 left-0 h-full w-64 bg-white shadow-xl overflow-y-auto md:w-1/5 lg:w-1/6 xl:w-1/6">
      <div className="p-4">
        <nav>
          <ul className='text-base md:text-lg lg:text-lg xl:text-lg'>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={home} alt="home" /><span className='mx-4'>Home</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={explore} alt="" /><span className='mx-4'>Explore</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={learn} alt="" /><span className='mx-4'>Learn</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={achieve} alt="" /><span className='mx-4'>Achieve</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={practice} alt="" /><span className='mx-4'>Practice</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={project} alt="" /><span className='mx-4'>Projects</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={career} alt="" /><span className='mx-4'>Career</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={mento} alt="" /><span className='mx-4'>Mentorship</span>
            </li>
            <li className="mb-4 flex items-center">
              <img loading='lazy' src={blog} alt="" /><span className='mx-4'>Blogs</span>
            </li>
            <li className="flex items-center">
              <img loading='lazy' src={community} alt="" /><span className='mx-4'>Community</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-full p-4'>
        <img loading='lazy' src={connect} alt="Connect" className="mx-auto w-20 h-20 mb-2" />
        <h1 className='font-semibold text-black text-center mb-2'>Connect with Us</h1>
        <ul className="flex justify-center space-x-4 p-3">
          <li>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img loading='lazy' src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img loading='lazy' src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img loading='lazy' src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img loading='lazy' src={discord} alt="Discord" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img loading='lazy' src={utube} alt="YouTube" className="w-8 h-8" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
