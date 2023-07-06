'use client';

import Link from 'next/link';
import Image from 'next/image';
import Church_Crest from '../../../public/Church_Crest.png';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

// const Navbar = () => {
// 	const logo = Church_Crest;
// 	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
// 	const submenuRef = useRef(null);

// 	useEffect(() => {
// 		const handleClickOutside = (event: MouseEvent) => {
// 			if (
// 				submenuRef.current &&
// 				!(submenuRef.current as Element).contains(event.target as Element)
// 			) {
// 				setOpenDropdown(null);
// 			}
// 		};

// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, [submenuRef]);

// 	const handleSubMenuClick = (dropdownName: string) => {
// 		setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
// 	};

// 	const handleLinkClick = () => {
// 		setOpenDropdown(null);
// 	};

// 	return (
// 		<nav className='bg-primary navbar'>
// 			<div className='navbar-start'>
// 				<div className='logo flex items-center'>
// 					<Link href='/'>
// 						<div
// 							onClick={handleLinkClick}
// 							className='flex items-center text-secondary hover:text-secondaryHover cursor-pointer'>
// 							<Image
// 								src={logo}
// 								alt='logo'
// 								width={50}
// 								height={50}
// 								className='rounded-full'
// 							/>
// 							<h1>Trinity Anglican Church</h1>
// 						</div>
// 					</Link>
// 				</div>
// 			</div>
// 			<div className='navbar-end'>
// 				<ul className='space-x-3 text-secondary font-mainContent flex items-center'>
// 					<li className='relative' ref={submenuRef}>
// 						<div
// 							className='flex items-center space-x-1 cursor-pointer hover:text-secondaryHover'
// 							onClick={() => handleSubMenuClick('about')}>
// 							<p>About</p>
// 							<FaChevronDown className='text-sm font-thin pr-2' />
// 						</div>
// 						<ul
// 							className={`absolute top-full left-0 bg-cyan-50 ${
// 								openDropdown === 'about' ? 'block' : 'hidden'
// 							} whitespace-nowrap`}>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Our History
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Clergy & People
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Location
// 									</div>
// 								</Link>
// 							</li>
// 						</ul>
// 					</li>
// 					<li className='relative' ref={submenuRef}>
// 						<div
// 							className='flex items-center space-x-1 cursor-pointer hover:text-secondaryHover'
// 							onClick={() => handleSubMenuClick('worship')}>
// 							<p>Worship</p>
// 							<FaChevronDown className='text-sm font-thin pr-2' />
// 						</div>
// 						<ul
// 							className={`absolute top-full left-0 bg-cyan-50 ${
// 								openDropdown === 'worship' ? 'block' : 'hidden'
// 							} whitespace-nowrap`}>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										What to Expect
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Worship Schedule
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Sermons & Teaching
// 									</div>
// 								</Link>
// 							</li>
// 						</ul>
// 					</li>
// 					<li className='relative' ref={submenuRef}>
// 						<div
// 							className='flex items-center space-x-1 cursor-pointer hover:text-secondaryHover'
// 							onClick={() => handleSubMenuClick('parishlife')}>
// 							<p>Parish Life</p>
// 							<FaChevronDown className='text-sm font-thin pr-2' />
// 						</div>
// 						<ul
// 							className={`absolute top-full left-0 bg-cyan-50 ${
// 								openDropdown === 'parishlife' ? 'block' : 'hidden'
// 							} whitespace-nowrap`}>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										All Events
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Parish Breakfast
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Ladies' Bible Study
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Sunday School
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Parish Study Group
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Rectors Rice Bowl
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Refugee Sponsorship
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Other Ministries <br /> & Volunteer Opportunities
// 									</div>
// 								</Link>
// 							</li>
// 							<li className='my-2 hover:bg-secondary hover:text-primary cursor-pointer'>
// 								<Link href='#'>
// 									<div
// 										className='flex items-center  px-4'
// 										onClick={handleLinkClick}>
// 										<FaChevronRight className='text-sm font-thin pr-2' />
// 										Events Calendar
// 									</div>
// 								</Link>
// 							</li>
// 						</ul>
// 					</li>
// 					<li className='hover:text-secondaryHover cursor-pointer'>
// 						Facility Rental
// 					</li>
// 					<li className='hover:text-secondaryHover cursor-pointer'>Contact</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

///////////////////////////////////////////
//////////// OLD NAVBAR ABOVE /////////////
///////////////////////////////////////////

const Navbar = () => {
	return (
		<nav className='bg-primary navbar'>
			<div className='navbar-center flex w-full justify-between'>
				<a className='btn btn-ghost normal-case text-xl text-secondary'>
					Trinity Anglican
				</a>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 text-secondary'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='absolute -ml-[170px] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className='p-2'>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
