import Link from 'next/link';
import Logo from '../../../../public/triquetra-svg.svg';
import Image from 'next/image';

const NavTest = () => {
	return (
		<div className='bg-primary border-myGrey z-50 hidden md:block'>
			<div className='m-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-20'>
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
				<div className='w-full md:block md:w-auto text-secondary '>
					<div className='flex space-x-5 p-4 md:p-0 mt-4 font-subheading text-2xl'>
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/'>Home</Link>
						</button>
						{/* About Group */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<span className='mr-1'>About</span>
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
						</div>
						{/* Worship Group */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<span className='mr-1'>Worship</span>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</button>
							<ul className='absolute hidden z-50 text-gray-700 pt-1 group-hover:block min-w-max'>
								<li className=''>
									<a
										className='rounded-t bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship'>
										What to Expect
									</a>
								</li>
								<li className=''>
									<a
										className='bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship#schedule'>
										Worship Schedule
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='/worship#sermons'>
										Sermons & Teaching
									</a>
								</li>
							</ul>
						</div>
						{/* Parish Life */}
						<div className='group inline-block relative'>
							<button className=' text-secondary hover:bg-myGrey hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
								<span className='mr-1'>Parish Life</span>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</button>
							<ul className='absolute hidden z-50 text-gray-700 pt-1 group-hover:block min-w-max'>
								<li className=''>
									<a
										className='rounded-t bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										All Events
									</a>
								</li>
								<li className=''>
									<a
										className='bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Parish Breakfast
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Ladies' Bible Study
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Sunday School
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Parish Study Group
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Rector's Rice Bowl
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Refugee Sponsorship
									</a>
								</li>
								<li className=''>
									<a
										className='rounded-b bg-white hover:bg-myGrey hover:text-primary py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Other Ministries & Volunteer Opportunities
									</a>
								</li>
							</ul>
						</div>
						{/* Facility Rental */}
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/facility'>Facility Rental</Link>
						</button>
						<button className='hover:bg-myGrey hover:text-white py-2 px-4 transition-all'>
							<Link href='/contact'>Contact</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavTest;
