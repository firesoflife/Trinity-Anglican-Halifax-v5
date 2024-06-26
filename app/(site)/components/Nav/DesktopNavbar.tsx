import Link from 'next/link';
import Logo from '../../../../public/triquetra-svg.svg';
import Image from 'next/image';
import { getHome } from '@/app/lib/api/getHome';
import { getParishEvents } from '@/app/lib/api/getParishEvents';

const Navbar = async () => {
	const home = await getHome();
	const pEvent = await getParishEvents();

	// Helper Function to Break up Event Titles Exceeding Max Characters

	const MAX_CHARS_SINGLE_LINE = 24; // For example, adjust as needed

	function formatEventTitle(eventTitle: string): JSX.Element | string {
		if (eventTitle.length > MAX_CHARS_SINGLE_LINE) {
			// Find the last space character before hitting the maximum character limit
			let breakPoint = eventTitle.lastIndexOf(' ', MAX_CHARS_SINGLE_LINE);

			// If no space character was found within the limit, search forward instead
			if (breakPoint === -1) {
				breakPoint = eventTitle.indexOf(' ', MAX_CHARS_SINGLE_LINE);
			}

			// If no space character was found after the limit either, default to no break
			if (breakPoint === -1) {
				return eventTitle;
			}

			const firstLine = eventTitle.substring(0, breakPoint);
			const secondLine = eventTitle.substring(breakPoint + 1);
			return (
				<>
					{firstLine}
					<br />
					<span className='pl-3'>{secondLine}</span>
				</>
			);
		}
		return eventTitle;
	}

	return (
		<div className='bg-primary border-myGrey z-50 hidden lg:block'>
			<div className='m-w-screen-xl flex flex-col 2xl:flex-row items-center justify-between mx-auto p-4 px-20'>
				<Link href='/'>
					<div className='flex items-center pb-5 2xl:pb-0'>
						<Image
							src={Logo}
							width={60}
							height={60}
							alt='Trinity Anglican Church, Halifax, Logo'
						/>
						<button className='bg-primary text-secondary font-subheading py-2 px-4 inline-flex items-center '>
							<span className='mr-1 text-2xl'>{home?.navbarTitle}</span>
						</button>
					</div>
				</Link>
				<div className='w-full md:block md:w-auto text-secondary '>
					<div className='flex space-x-5 p-4 md:p-0 font-subheading text-2xl'>
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/'>Home</Link>
						</button>
						{/* About Group */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<Link href={'/about'} className='mr-1'>
									About
								</Link>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</button>
							<ul className='absolute hidden z-50 text-gray-700 pt-1 group-hover:block min-w-max'>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href={'/about'}>
										Our History
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/about#staff-clergy'>
										Clergy & People
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/about#location'>
										Location
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/blog'>
										Pastoral Letters
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='about/covenant'>
										Covenant in Ministry
									</Link>
								</li>
							</ul>
						</div>
						{/* Worship Group */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<Link href={'/worship'} className='mr-1'>
									Worship
								</Link>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</button>
							<ul className='absolute hidden z-50 text-gray-700 pt-1 group-hover:block min-w-max'>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship'>
										What to Expect
									</Link>
								</li>
								<li className=''>
									<Link
										className='bg-white hover:border-white border-3 border hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship#schedule'>
										Worship Schedule
									</Link>
								</li>
								<li className=''>
									<Link
										className=' hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship#sermons'>
										Sermons & Teaching
									</Link>
								</li>
							</ul>
						</div>
						{/* Parish Life */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<Link href={'/events'} className='mr-1'>
									Parish Life
								</Link>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</button>
							<ul className='absolute hidden z-50 text-gray-700 pt-1 group-hover:block min-w-max'>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/events'>
										Events
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/events#calendar-large'>
										Calendar
									</Link>
								</li>

								{/* Filter and map over the events to create a new navigation item for each recurring event */}

								{pEvent
									.filter((event) => event?.eventDetails?.showInNavigation)
									.map((event, index) => (
										<li key={index} className=''>
											<Link
												className='hover:border-white border-3 border bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
												href={`/event/${event.slug.current}`}>
												{formatEventTitle(
													event?.eventTitle || 'could not load'
												)}
											</Link>
										</li>
									))}

								<li className=''>
									<Link
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/event/refugee'>
										Refugee Sponsorship
									</Link>
								</li>
								<li className=''>
									<Link
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/event/volunteer'>
										Other Ministries &
										<br />{' '}
										<span className='pl-3'>Volunteer Opportunities </span>
									</Link>
								</li>
								<li className=''>
									<Link
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/gallery'>
										Photo Gallery
									</Link>
								</li>
							</ul>
						</div>
						{/* Facility Rental - Removed and placed in Contact Page*/}
						{/* <button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/facility'>Facility Rental</Link>
						</button> */}
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/contact'>Contact</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
