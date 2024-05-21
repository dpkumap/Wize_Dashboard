import React from 'react'
import logo from '../../assets/logo.png'
import bellLogo from '../../assets/bell.png'
import user from '../../assets/user.png'
import menu from '../../assets/menu.png'
const NavBar = () => {
  return (
    <>
      <div className='flex justify-between bg-white shadow-md'>
        <div className="left flex gap-3 my-4 mx-6 ">
              <div>
                <img className='h-10 w-10' src={logo} alt="ourlogo" />
              </div>
              <h1 className='font-semibold text-4xl'><span className='text-violet-600'>wiZ</span>e</h1>
        </div>
        <div className="right flex gap-5 my-3 mx-3 ">
          <div className='border-2 border-violet-600 rounded-full p-2 cursor-pointer'><img src={bellLogo} alt="notify" /></div>
              <div className='flex border-violet-600 border-2 rounded-full gap-3 justify-center p-2'>
                <h2>Account</h2>
                <div><img src={user} alt="user" /></div>
              </div>
              <div className='flex border-violet-600 border-2 rounded-full  gap-3 justify-center p-2'>
                <h2>Menu</h2>
                <div><img src={menu} alt="menu" /></div>
              </div>

        </div>
      </div>
    </>
  )
}

export default NavBar