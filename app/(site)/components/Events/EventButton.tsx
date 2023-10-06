'use client';

// This code is used to open a modal with more information about a specific event. It is used in the Events page and is displayed in the Parish Events section.

import Link from 'next/link';

const EventButton = () => {
	return (
		<Link href='/'>
			<button className='btn bg-myBlue hover:bg-myGrey text-white'>
				More Info ...
			</button>
		</Link>
	);
};

export default EventButton;
