import React, { useState, useEffect } from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faL, faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { menuList } from '../data/menuList'

function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className='navbar'>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-10">
                <a href='#home' className='text-2xl font-bold' data-aos=''>RONNACHAI</a>
                <ul className='hidden lg:flex gap-5' data-aos='fade-left'>
                    {menuList.map((menu, i) => (
                        <li key={i} className='hover:text-[#707070] transition'><a href={menu.path}>{menu.name}</a></li>
                    ))}
                </ul>

                {/* Hamburger menu  */}
                <button className="text-2xl lg:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faX : faBars} className={`transition ${isOpen ? 'transform rotate-90' : ''}`} />
                </button>
            </div>

            {/* Mobile menu list */}
            {isOpen && (
                <ul className='text-center flex flex-col gap-10 p-10 lg:hidden' data-aos='fade-left'>
                    {menuList.map((menu, i) => (
                        <li key={i} className='hover:text-[#707070] transition'><a href={menu.path} onClick={toggleMenu} >{menu.name}</a></li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar