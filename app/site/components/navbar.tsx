'use client'

import Link from 'next/link'
import Image from 'next/image'
import Church_Crest from '../../../public/Church_Crest.png'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const logo = Church_Crest;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !(submenuRef.current as Element).contains(event.target as Element)) {
        setIsSubMenuOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [submenuRef]);

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  const handleLinkClick = () => {
    setIsSubMenuOpen(false);
  }

  return (
    <nav className="bg-primary navbar">
      <div className="navbar-start">
        <div className="logo flex items-center">
          <Link href="/">
            <div onClick={handleLinkClick} className='flex items-center text-secondary hover:text-secondaryHover cursor-pointer'>
              <Image src={logo} alt="logo" width={50} height={50} className="rounded-full" />
              <h1>Trinity Anglican Church</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal space-x-3 text-secondary font-mainContent flex items-center">
          <li className="hover:text-secondaryHover cursor-pointer">About</li>
          <li className="relative" ref={submenuRef}>
            <a className="hover:text-secondaryHover cursor-pointer" onClick={handleSubMenuClick}>Parent</a>
            <ul className={`absolute top-full left-0 bg-cyan-50 p-2 ${isSubMenuOpen ? 'block' : 'hidden'}`}>
              <li><a onClick={handleLinkClick}>Submenu 1</a></li>
              <li><a onClick={handleLinkClick}>Submenu 2</a></li>
            </ul>
          </li>
          <li className="hover:text-secondaryHover cursor-pointer">Worship</li>
          <li className="hover:text-secondaryHover cursor-pointer">Parish Life</li>
          <li className="hover:text-secondaryHover cursor-pointer">Facility Rental</li>
          <li className="hover:text-secondaryHover cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar