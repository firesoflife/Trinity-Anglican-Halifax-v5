'use client';

// TODO - Add animated / pulsing chevron (maybe in circle) to menu items in dropdowns

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Collapse } from 'flowbite';
import Image from 'next/image';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import Logo from '../../../../public/triquetra-svg.svg';
import { getHome } from '@/app/lib/api/getHome';

const Navbar = () => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	const [homeData, setHomeData] = useState<Home | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		getHome().then((data) => setHomeData(data));
	}, []);

	useEffect(() => {
		const options: CollapseOptions = {
			onCollapse: () => {
				console.log('element has been collapsed');
			},
			onExpand: () => {
				console.log('element has been expanded');
			},
			onToggle: () => {
				console.log('element has been toggled');
			},
		};

		const collapse: CollapseInterface = new Collapse(
			targetRef.current,
			triggerRef.current,
			options
		);

		// Clean up function to avoid memory leaks
		return () => {
			collapse.collapse();
		};
	}, []);

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div>
			<nav className='bg-primary border-myGrey'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<Link href='/'>
						<div className='flex items-center'>
							{/* TODO - Upload Logo default and add to Sanity Studio */}
							<Image
								src={Logo}
								width={60}
								height={60}
								alt='Trinity Anglican Church, Halifax, Logo'
							/>
							<span className='self-center text-2xl text-secondary font-subheading whitespace-nowrap'>
								{homeData ? (
									homeData.navbarTitle
								) : (
									<div role='status' className='max-w-sm animate-pulse'>
										<div className='h-2.5 bg-secondaryHover rounded-full w-48 '></div>
									</div>
								)}
							</span>
						</div>
					</Link>
					<button
						ref={triggerRef}
						// data-collapse-toggle='N-multi-level'
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-myGrey rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-myGrey'
						aria-controls='navbar-multi-level'
						aria-expanded={isMobileMenuOpen}
						onClick={handleMobileMenuToggle}>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
					<div
						ref={targetRef}
						className={`w-full md:block md:w-auto ${
							isMobileMenuOpen ? '' : 'hidden'
						}`}
						id='navbar-multi-level'>
						<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
							{/* TODO - Decide if Home item is wanted */}
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<Link
									href='/'
									className='block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0'
									aria-current='page'>
									Home
								</Link>
							</li>
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<button
									id='dropdownNavbarLink'
									data-dropdown-toggle='dropdownNavbar'
									className='flex items-center justify-between w-full py-2 pl-3 pr-4 border-b border-primary  md:border-0 md:p-0 md:w-auto hover:text-white'>
									About{' '}
									<svg
										className='w-2.5 h-2.5 ml-2.5'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 10 6'>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m1 1 4 4 4-4'
										/>
									</svg>
								</button>
								<div
									id='dropdownNavbar'
									className='z-10 hidden font-normal bg-white divide-y divide-myGrey rounded-lg shadow w-44'>
									<ul
										className='py-2 text-sm text-secondary'
										aria-labelledby='dropdownLargeButton'>
										<li className='font-subheading text-2xl'>
											<Link
												href='/about'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Our History
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='/about#staff-clergy'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Staff & Clergy
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='/about#location'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Location
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<button
									id='dropdownNavbarLink'
									data-dropdown-toggle='dropdownWorship'
									className='flex items-center justify-between w-full py-2 pl-3 pr-4 border-b border-primary  md:border-0 md:p-0 md:w-auto hover:text-white'>
									Worship{' '}
									<svg
										className='w-2.5 h-2.5 ml-2.5'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 10 6'>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m1 1 4 4 4-4'
										/>
									</svg>
								</button>
								<div
									id='dropdownWorship'
									className='z-10 hidden font-normal bg-white divide-y divide-myGrey rounded-lg shadow w-max'>
									<ul
										className='py-2 text-sm text-secondary'
										aria-labelledby='dropdownLargeButton'>
										<li className='font-subheading text-2xl'>
											<Link
												href='/worship'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												What to Expect
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='/worship#schedule'
												className='flex items-center justify-between w-full px-4 py-2 hover:bg-myGrey hover:text-white'>
												Worship Schedule
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='/worship#sermons'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Sermons & Teaching
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<button
									id='dropdownNavbarLink'
									data-dropdown-toggle='dropdownLife'
									className='flex items-center justify-between w-full py-2 pl-3 pr-4 border-b border-primary  md:border-0 md:p-0 md:w-auto hover:text-white'>
									Parish Life{' '}
									<svg
										className='w-2.5 h-2.5 ml-2.5'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 10 6'>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m1 1 4 4 4-4'
										/>
									</svg>
								</button>
								<div
									id='dropdownLife'
									className='z-10 hidden font-normal bg-white divide-y divide-myGrey rounded-lg shadow w-max'>
									<ul
										className='py-2 text-sm text-secondary'
										aria-labelledby='dropdownLargeButton'>
										<li className='font-subheading text-2xl'>
											<Link
												href='events'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												All Events
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<div className='flex items-center justify-between w-full px-4 py-2 hover:bg-myGrey hover:text-white'>
												Parish Breakfast
											</div>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Ladies' Bible Study
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Sunday School
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Parish Study Group
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Rector's Rice Bowl
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='flex justify-between px-4 py-2 hover:bg-myGrey hover:text-white'>
												Refugee Sponsorship
											</Link>
										</li>
										<li className='font-subheading text-2xl'>
											<Link
												href='#'
												className='block px-4 py-2 hover:bg-myGrey hover:text-white'>
												Other Ministries & Volunteer Opportunities
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<Link
									href='facility'
									className='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0'>
									Facility Rental
								</Link>
							</li>
							<li className='p-2 font-subheading text-2xl hover:bg-myGrey hover:text-white text-secondary'>
								<Link
									href='/contact'
									className='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
