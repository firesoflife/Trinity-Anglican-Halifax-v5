'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoMdClose } from 'react-icons/io';

type MenuType = 'about' | 'worship' | 'parishlife' | null;

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState<MenuType>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = (menu: MenuType) => {
		setActiveMenu(menu);
	};

	return (
		<>
			<div className='navbar-end flex w-full'>
				<div className='dropdown'>
					<button
						onClick={toggleMenu}
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
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
					</button>
				</div>
			</div>
			{isOpen && (
				<div
					onClick={toggleMenu}
					className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<nav
						onClick={(e) => e.stopPropagation()}
						className='bg-primary font-mainContent rounded-lg shadow-lg py-2 px-4 w-2/3 h-2/3 overflow-auto flex flex-col items-center justify-center shadow-2xl relative'>
						<IoMdClose
							size={24}
							onClick={toggleMenu}
							className='absolute top-2 right-2 cursor-pointer'
						/>
						{activeMenu === 'about' ? (
							<div
								onClick={toggleMenu}
								className='w-full h-full flex flex-col items-center justify-center'>
								<div
									onClick={(e) => {
										e.stopPropagation();
										setActiveMenu(null);
									}}
									className='absolute text-md top-2 left-2 text-subHeading hover:text-secondary'>
									<div className='flex'>
										<IoIosArrowBack size={24} />
										Go Back to Main Menu
									</div>
								</div>
								<Link href='/our-history'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Our History
									</p>
								</Link>
								<Link href='/clergy-and-people'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Clergy & People
									</p>
								</Link>
								<Link href='/location'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Location
									</p>
								</Link>
							</div>
						) : activeMenu === 'worship' ? (
							<div
								onClick={toggleMenu}
								className='w-full h-full flex flex-col items-center justify-center'>
								<div
									onClick={(e) => {
										e.stopPropagation();
										setActiveMenu(null);
									}}
									className='absolute top-2 left-2 text-subHeading hover:text-secondary'>
									<div className='flex'>
										<IoIosArrowBack size={24} />
										<p className='text-sm'>Go Back to Main Menu</p>
									</div>
								</div>
								<Link href='/what-to-expect'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										What to Expect
									</p>
								</Link>
								<Link href='/worship-schedule'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Worship Schedule
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Sermons and Teaching
									</p>
								</Link>
							</div>
						) : activeMenu === 'parishlife' ? (
							<div
								onClick={toggleMenu}
								className='w-full h-full flex flex-col items-center justify-center'>
								<div
									onClick={(e) => {
										e.stopPropagation();
										setActiveMenu(null);
									}}
									className='absolute top-2 left-2 text-subHeading hover:text-secondary'>
									<div className='flex'>
										<IoIosArrowBack size={24} />
										Go Back to Main Menu
									</div>
								</div>
								<Link href='/what-to-expect'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Parish Breakfast
									</p>
								</Link>
								<Link href='/worship-schedule'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Ladies Bible Study
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Sunday School
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Parish Study Group
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Rector's Rice Bowl
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Refugee Sponsorship
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Ministry & Volunteer Opportunities
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Bulletins & News
									</p>
								</Link>
								<Link href='/sermons-and-teaching'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Calendars
									</p>
								</Link>
							</div>
						) : (
							<div
								onClick={toggleMenu}
								className='w-full h-full flex flex-col items-center justify-center'>
								<Link href='/'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Home
									</p>
								</Link>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleLinkClick('about');
									}}
									className='text-secondary my-2 p-2 rounded cursor-pointer'>
									About
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleLinkClick('worship');
									}}
									className='text-secondary my-2 p-2 rounded cursor-pointer'>
									Worship
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleLinkClick('parishlife');
									}}
									className='text-secondary my-2 p-2 rounded cursor-pointer'>
									Parish Life
								</button>
								<Link href='/facility'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Facility Rental
									</p>
								</Link>
								<Link href='/contact'>
									<p className='text-secondary my-2 p-2 rounded cursor-pointer'>
										Contact
									</p>
								</Link>
							</div>
						)}
					</nav>
				</div>
			)}
		</>
	);
};

export default MobileNavbar;
