'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../../../../public/triquetra-svg.svg';
import Image from 'next/image';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='bg-primary border-myGrey z-50 md:hidden'>
			<div className='flex items-center justify-between mx-auto p-4 px-6'>
				<Link href='/'>
					<div className='flex items-center'>
						<Image
							src={Logo}
							width={60}
							height={60}
							alt='Trinity Anglican Church, Halifax, Logo'
						/>
						<button className='bg-primary text-secondary font-subheading py-2 px-4 inline-flex items-center '>
							<span className='mr-1 text-2xl'>TitleDrop</span>
						</button>
					</div>
				</Link>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-secondary hover:text-white'>
					<svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
						<path
							fillRule='evenodd'
							d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
						/>
					</svg>
				</button>
			</div>
			{isOpen && (
				<div className='w-full text-secondary'>
					<div className='flex flex-col space-y-2 p-4 font-subheading text-2xl'>
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/'>Home</Link>
						</button>
						<details className='group inline-block relative text-center'>
							<summary className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded flex items-center justify-center'>
								<span className='mr-1 self-center'>About</span>
							</summary>
							<ul className='space-y-2 text-gray-700 pt-1 min-w-max'>
								<li className=''>
									<Link
										className='rounded-t bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/about'>
										Our History
									</Link>
								</li>
								<li className=''>
									<Link
										className='bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/about#staff-clergy'>
										Clergy & People
									</Link>
								</li>
								<li className=''>
									<Link
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/about#location'>
										Location
									</Link>
								</li>
							</ul>
						</details>
						{/* Other groups go here */}
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/facility'>Facility Rental</Link>
						</button>
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/contact'>Contact</Link>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
