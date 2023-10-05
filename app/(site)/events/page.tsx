import { getParishEvents } from '@/app/lib/api/getParishEvents';
import EventsBanner from '../components/Events/EventsBanner';
import AllEventsHeader from '../components/Events/EventsHeader';
import ParishEventList from '../components/Events/ParishEventList';
import { getParish } from '@/app/lib/api/getParish';

const ParishLife = async () => {
	const parishMain = await getParish();
	const parishEvent = await getParishEvents();
	const allParishEvents = Array.isArray(parishEvent)
		? parishEvent
		: [parishEvent];

	return (
		<div className='bg-primary text-secondary'>
			<EventsBanner />
			<AllEventsHeader data={parishMain} />
			<ParishEventList allParishEvents={allParishEvents} />
			{/* Either alternating cards on single scroll or thumbnail list with popup modal for info */}
		</div>
	);
};

export default ParishLife;
