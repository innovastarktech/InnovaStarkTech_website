import React from 'react'
import { Menu, X } from 'lucide-react'
import logoImage from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/navItems'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
        <nav className='flex items-center justify-between p-4 bg-white text-black shadow-md fixed w-full h-18'>
        
            {/* Logo Section with animation */}
            <div 
                className={`flex items-center space-x-2 cursor-pointer transition-all 
                    ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 hover:scale-105 hover:-translate-y-0.5`}
            >
                <img src={logoImage} alt="Logo" className='h-10 w-auto ml-5' />
            </div>


            {/* Navigation Links for desktop */}
            <ul className='hidden md:flex space-x-6 mr-5'>
                {navItems.map(item => (
                    <li key={item.id}>
                        <NavLink to={item.path} className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-500 duration-400'}>{item.label}</NavLink>                        
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu for mobile */}
            <div className='md:hidden mr-4 cursor-pointer hover:text-amber-500 duration-400' onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <ul className='absolute top-16 left-0 w-full bg-white shadow-md  py-4 md:hidden rounded-md p-3'>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <NavLink to={item.path} className={({ isActive }) => isActive ? 'text-amber-500 block px-4 py-2' : 'block px-4 py-2 hover:bg-amber-400'} onClick={toggleMenu}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>

    </div>
  )
}

export default NavBar


