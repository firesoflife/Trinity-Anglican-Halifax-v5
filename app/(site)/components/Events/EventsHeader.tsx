import { getParishEvents } from '@/app/lib/api/getParishEvents';
import { placeholders } from '../../utilities/fallbackAssets';

async function AllEventsHeader() {
	const parishEvents = await getParishEvents();
	return (
		<div className='h-auto py-16 bg-primary text-secondary p-4'>
			<div className='flex justify-around'>
				<hr className='staff-underline w-2/3 mx-auto' />
			</div>
			<h1 className='text-4xl font-subheading text-center py-16'>
				{parishEvents?.pageTitle ||
					placeholders.parishEvents.allEventsBannerTitle}
			</h1>
			<hr className='staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default AllEventsHeader;
