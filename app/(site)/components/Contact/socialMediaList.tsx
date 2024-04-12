import React, { ReactElement } from 'react';

import { getSocialMediaPlatforms } from '@/app/lib/api/getSocialMedia';
import * as FontAwesomeIcons from 'react-icons/fa';
import * as HeroIcons from 'react-icons/hi';
import * as FeatherIcons from 'react-icons/fi';
import * as MaterialIcons from 'react-icons/md';
import * as SimpleIcons from 'react-icons/si';
import Link from 'next/link';

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

const SocialMediaList = async () => {
	const socialMedia = await getSocialMediaPlatforms();
	return (
		<div className='pt-10 bg-primary text-primary-focus w-full flex justify-center'>
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
							className='text-2xl hover:text-secondary px-2'>
							{IconComponent}
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

export default SocialMediaList;
