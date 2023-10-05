'use client';
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
