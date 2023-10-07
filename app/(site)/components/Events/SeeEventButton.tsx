import { getParishEvents } from '@/app/lib/api/getParishEvents';
import Link from 'next/link';

const SeeEventButton = async () => {
	const pEvent = await getParishEvents();

	console.log(pEvent);

	return (
		<Link href={'/'}>
			<button className='btn bg-myBlue hover:bg-myGrey text-white'>
				More Info ...
			</button>
		</Link>
	);
};

export default SeeEventButton;
