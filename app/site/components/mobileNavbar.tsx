// MobileNavbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Church_Crest from '../../../public/Church_Crest.png';

const MobileNavbar = () => {
	const logo = Church_Crest;
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const handleLinkClick = () => {
		setIsNavOpen(false);
	};

	const handleSubMenuClick = (dropdownName: string) => {
		setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
	};

	return (
		<nav className='bg-primary navbar p-4 lg:hidden'>
			<div className='flex justify-between items-center w-full'>
				<div className='order-2'>
					<button onClick={() => setIsNavOpen(!isNavOpen)}>
						{isNavOpen ? (
							<FiX className='text-4xl' />
						) : (
							<FiMenu className='text-4xl' />
						)}
					</button>
				</div>
				<div className='order-1'>
					<Link href='/'>
						<div
							onClick={handleLinkClick}
							className='flex items-center text-secondary hover:text-secondaryHover cursor-pointer'>
							<Image
								src={logo}
								alt='logo'
								width={50}
								height={50}
								className='rounded-full'
							/>
							<h1>Trinity Anglican Church</h1>
						</div>
					</Link>
				</div>
			</div>
			{isNavOpen && (
				<div className='mt-8'>
					{/* Render menu items here */}
					{/* I'm only rendering the About dropdown for brevity. Repeat for each dropdown. */}
					<div>
						<button
							className='flex justify-between w-full text-left'
							onClick={() => handleSubMenuClick('about')}>
							<p>About</p>
							<FaChevronDown className='text-sm font-thin pr-2' />
						</button>
						{openDropdown === 'about' && (
							<ul className='mt-2 space-y-2'>
								<li>
									<Link href='/'>
										<a
											className='flex items-center space-x-2'
											onClick={handleLinkClick}>
											<FaChevronRight className='text-sm font-thin pr-2' />
											<p>Our History</p>
										</a>
									</Link>
								</li>
								{/* Other dropdown items */}
							</ul>
						)}
					</div>
					{/* Other top-level menu items */}
				</div>
			)}
		</nav>
	);
};

export default MobileNavbar;
