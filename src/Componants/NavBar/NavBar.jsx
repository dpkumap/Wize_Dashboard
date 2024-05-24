
import React from 'react';
import logo from '../../assets/logo.png';
import bellLogo from '../../assets/bell.png';
import user from '../../assets/user.png';
import menu from '../../assets/menu.png';

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between'>
      <div className="left flex gap-3 my-4 mx-6 items-center">
        <div>
          <img className='h-10 w-10' src={logo} alt="ourlogo" />
        </div>
        <h1 className='font-semibold text-4xl hidden md:block'><span className='text-violet-600'>wiZ</span>e</h1>
      </div>
      <div className="right flex gap-5 my-3 mx-3 items-center">
        <div className='border-2 border-violet-600 rounded-full p-2 cursor-pointer'>
          <img src={bellLogo} alt="notify" />
        </div>
        <div className='flex border-violet-600 border-2 rounded-full gap-3 justify-center p-2'>
          <h2 className="hidden md:block">Account</h2>
          <div><img src={user} alt="user" /></div>
        </div>
        <div className='flex border-violet-600 border-2 rounded-full gap-3 justify-center p-2'>
          <h2 className="hidden md:block">Menu</h2>
          <div><img src={menu} alt="menu" /></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

