'use client'

import Link from 'next/link'
import Image from 'next/image'
import Church_Crest from '../../../public/Church_Crest.png'
import { useState, useEffect, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa';


const Navbar = () => {
  const logo = Church_Crest;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !(submenuRef.current as Element).contains(event.target as Element)) {
        setOpenDropdown(null);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [submenuRef]);

  const handleSubMenuClick = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  }

  const handleLinkClick = () => {
    setOpenDropdown(null);
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
        <ul className="space-x-3 text-secondary font-mainContent flex items-center">
          <li className="relative" ref={submenuRef}>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-secondaryHover" onClick={() => handleSubMenuClick('about')}>
              <p>About</p>
              <FaChevronDown />
            </div>
            <ul className={`absolute top-full left-0 bg-cyan-50 ${openDropdown === 'about' ? 'block' : 'hidden'} whitespace-nowrap`}>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    Our History
                  </div>
                </Link>
              </li>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    Clergy & People
                  </div>
                </Link>
              </li>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    Location
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative" ref={submenuRef}>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-secondaryHover" onClick={() => handleSubMenuClick('worship')}>
              <p>Worship</p>
              <FaChevronDown />
            </div>
            <ul className={`absolute top-full left-0 bg-cyan-50 ${openDropdown === 'worship' ? 'block' : 'hidden'} whitespace-nowrap`}>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    What to Expect
                  </div>
                </Link>
              </li>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    Worship Schedule
                  </div>
                </Link>
              </li>
              <li className="my-2 hover:bg-secondary hover:text-primary cursor-pointer">
                <Link href="#">
                  <div className="block px-4" onClick={handleLinkClick}>
                    Sermons & Teaching
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-secondaryHover cursor-pointer">Parish Life</li>
          <li className="hover:text-secondaryHover cursor-pointer">Facility Rental</li>
          <li className="hover:text-secondaryHover cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
   
  )
}

export default Navbar