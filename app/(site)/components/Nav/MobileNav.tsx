'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../../../public/triquetra-svg.svg';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react';

const MobileNav: React.FC<ParishEventsProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isWorshipOpen, setIsWorshipOpen] = useState(false);
	const [isParishLifeOpen, setIsParishLifeOpen] = useState(false);

	useEffect(() => {
		const closeMenu = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsOpen(false);
			}
		};

		window.addEventListener('keydown', closeMenu);

		return () => window.removeEventListener('keydown', closeMenu);
	}, []);

	const closeOnOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).className.includes('overlay')) {
			setIsOpen(false);
		}
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const closeOtherMenus = (menu: string) => {
		switch (menu) {
			case 'about':
				setIsWorshipOpen(false);
				setIsParishLifeOpen(false);
				break;
			case 'worship':
				setIsAboutOpen(false);
				setIsParishLifeOpen(false);
				break;
			case 'parishLife':
				setIsAboutOpen(false);
				setIsWorshipOpen(false);
				break;
			default:
				break;
		}
	};

	return (
		<div className='bg-primary border-myGrey lg:hidden'>
			<div className='flex items-center justify-between mx-auto p-4 px-6'>
				<Link href='/'>
					<div className='flex items-center'>
						<Image
							src={Logo}
							width={60}
							height={60}
							alt='Trinity Anglican Church, Halifax, Logo'
						/>
					</div>
				</Link>
				<div className='text-secondary z-50 sticky'>
					<Hamburger toggled={isOpen} toggle={setIsOpen} duration={0.8} />
				</div>
			</div>
			{isOpen && (
				<div
					onClick={closeOnOverlayClick}
					className='w-full h-screen bg-primary fixed top-0 left-0 z-40 overflow-y-auto overlay flex items-center justify-center'>
					<div className='container mx-auto py-8 px-6'>
						<div className='flex flex-col space-y-4 text-center text-secondary font-subheading text-2xl'>
							<Link href='/' onClick={closeMenu}>
								<span>Home</span>
							</Link>
							<div
								onClick={() => {
									setIsAboutOpen(!isAboutOpen);
									closeOtherMenus('about');
								}}
								className='cursor-pointer'>
								About
							</div>
							{isAboutOpen && (
								<div className='flex w-full justify-center'>
									<div className='p-4 space-y-2 inline-flex justify-center flex-col bg-black opacity-70 text-white text-left w-fit'>
										<Link href='/about#our-history' onClick={closeMenu}>
											<span className=' text-lg opacity-100'>Our History</span>
										</Link>
										<Link href='/about#staff-clergy' onClick={closeMenu}>
											<span className=' text-lg'>Clergy & People</span>
										</Link>
										<Link href='/about#location' onClick={closeMenu}>
											<span className='text-lg'>Location</span>
										</Link>
										<Link href='/blog' onClick={closeMenu}>
											<span className='text-lg'>Pastoral Letters</span>
										</Link>
										<Link href='about/covenant' onClick={closeMenu}>
											<span className='text-lg'>Covenant In Ministry</span>
										</Link>
									</div>
								</div>
							)}
							<div
								onClick={() => {
									setIsWorshipOpen(!isWorshipOpen);
									closeOtherMenus('worship');
								}}
								className='cursor-pointer'>
								Worship
							</div>
							{isWorshipOpen && (
								<div className='flex w-full justify-center'>
									<div className='p-4 space-y-2 inline-flex justify-center flex-col bg-black opacity-70 text-white text-left w-fit'>
										<Link href='/worship#what-to-expect' onClick={closeMenu}>
											<span className=' text-lg opacity-100'>
												What to Expect
											</span>
										</Link>
										<Link href='/worship#schedule' onClick={closeMenu}>
											<span className=' text-lg opacity-100'>
												Worship Schedule
											</span>
										</Link>
										<Link href='/worship#sermons' onClick={closeMenu}>
											<span className=' text-lg opacity-100'>
												Sermons & Teaching
											</span>
										</Link>
									</div>
								</div>
							)}
							<div
								onClick={() => {
									setIsParishLifeOpen(!isParishLifeOpen);
									closeOtherMenus('parishLife');
								}}
								className='cursor-pointer'>
								Parish Life
							</div>

							{isParishLifeOpen && (
								<div className='flex w-full justify-center'>
									<div className='rounded-sm p-4 space-y-2 inline-flex justify-center flex-col bg-black opacity-70 text-white text-left w-fit'>
										<Link href='/events' onClick={closeMenu}>
											<span className=' text-lg opacity-100'>Events</span>
										</Link>
										<Link
											href='/events#calendar-large-mobile'
											onClick={closeMenu}>
											<span className=' text-lg opacity-100'>Calendar</span>
										</Link>
										{props.data
											.filter(
												(event) => event.eventDetails?.eventType === 'recurring'
											)
											.map((event, index) => (
												<Link
													key={index}
													href={`/event/${event.slug?.current}`}
													onClick={closeMenu}>
													<span className='text-lg opacity-100'>
														{event.eventTitle || 'could not load'}
													</span>
												</Link>
											))}

										<Link href='/events' onClick={closeMenu}>
											<span className='text-lg opacity-100'>
												Refugee Sponsorship
											</span>
										</Link>
										<Link href='/events' onClick={closeMenu}>
											<span className='text-lg opacity-100'>
												Other Ministries & <br /> Volunteer Opportunities
											</span>
										</Link>
									</div>
								</div>
							)}
							<Link href='/facility' onClick={closeMenu}>
								<span>Facility Rental</span>
							</Link>
							<Link href='/contact' onClick={closeMenu}>
								<span>Contact</span>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
