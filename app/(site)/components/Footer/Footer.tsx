import Image from 'next/image';
import Logo from '../../../../public/triquetra-svg.svg';
import Link from 'next/link';
import { getSocialMediaPlatforms } from '@/app/lib/api/getSocialMedia';
import * as FontAwesomeIcons from 'react-icons/fa';
import * as HeroIcons from 'react-icons/hi';
import * as FeatherIcons from 'react-icons/fi';
import * as MaterialIcons from 'react-icons/md';
import * as SimpleIcons from 'react-icons/si';
import React, { ReactElement } from 'react';

function getIconComponent(provider: string, name: string): ReactElement | null {
	switch (provider) {
		case 'fa':
			const FaIcon = FontAwesomeIcons[name as keyof typeof FontAwesomeIcons];
			return FaIcon ? <FaIcon /> : null;
		case 'hi':
			const HiIcon = HeroIcons[name as keyof typeof HeroIcons];
			return HiIcon ? <HiIcon /> : null;
		case 'fi':
			const FiIcon = FeatherIcons[name as keyof typeof FeatherIcons];
			return FiIcon ? <FiIcon /> : null;
		case 'mdi':
			const MdIcon = MaterialIcons[name as keyof typeof MaterialIcons];
			return MdIcon ? <MdIcon /> : null;
		case 'si':
			const SiIcon = SimpleIcons[name as keyof typeof SimpleIcons];
			return SiIcon ? <SiIcon /> : null;
		default:
			return null;
	}
}

const Footer = async () => {
	const socialMedia = await getSocialMediaPlatforms();
	return (
		<>
			<footer className='footer p-10 bg-secondary text-base-content'>
				<nav>
					<header className='footer-title'>About</header>
					<Link href={'/about'} className='link link-hover'>
						Our History
					</Link>
					<Link href={'/about#staff-clergy'} className='link link-hover'>
						Clergy & People
					</Link>
					<Link href={'/about#location'} className='link link-hover'>
						Find Us
					</Link>
				</nav>
				<nav>
					<header className='footer-title'>Worship</header>
					<Link href={'/worship'} className='link link-hover'>
						What to Expect
					</Link>
					<Link href={'/worship#schedule'} className='link link-hover'>
						Schedule
					</Link>
					<Link href={'/worship#sermons'} className='link link-hover'>
						Sermons & Teaching
					</Link>
					<Link href={'/blog'} className='link link-hover'>
						Blog
					</Link>
				</nav>
				<nav>
					<header className='footer-title'>Parish Life</header>
					<Link href={'/events'} className='link link-hover'>
						List of Events
					</Link>
					<Link href={'/event/refugee-sponsorship'} className='link link-hover'>
						Refugee Sponsorship
					</Link>
					<Link href={'/events#calendar-large'} className='link link-hover'>
						Calendar
					</Link>
				</nav>
				<nav>
					<header className='footer-title'>Quick Links</header>
					<Link href={'/contact'} className='link link-hover'>
						Pastoral Care
					</Link>
					<Link href={'/contact'} className='link link-hover'>
						Contact Us
					</Link>
					<Link href={'/facility'} className='link link-hover'>
						Facility Rental
					</Link>
				</nav>
			</footer>
			<footer className='footer px-10 py-4  bg-secondary text-base-content '>
				<aside className='items-center grid-flow-col'>
					<Image
						src={Logo}
						width={60}
						height={60}
						alt='Trinity Anglican Church, Halifax, Logo'
					/>
					<p>
						&copy; Trinity Anglican Church <br />
						with design by{' '}
						<Link className='underline' href='https://bryangoertz.com'>
							{' '}
							BG-Design
						</Link>
					</p>
				</aside>
				<nav className='md:place-self-center md:justify-self-end flex'>
					{socialMedia.map((platform, index) => {
						const IconComponent = getIconComponent(
							platform.icon.provider,
							platform.icon.name
						);
						return (
							<Link
								key={index}
								href={platform.platformUrl}
								className='text-2xl hover:text-primary px-2'>
								{IconComponent}
							</Link>
						);
					})}
				</nav>
			</footer>
		</>
	);
};

export default Footer;
