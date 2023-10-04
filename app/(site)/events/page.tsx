import { getParishEvents } from '@/app/lib/api/getParishEvents';
import EventsBanner from '../components/Events/EventsBanner';
import AllEventsHeader from '../components/Events/EventsHeader';
import ParishEventList from '../components/Events/ParishEventList';

const ParishLife = async () => {
	const parishEvent = await getParishEvents();
	const allParishEvents = Array.isArray(parishEvent)
		? parishEvent
		: [parishEvent];

	return (
		<div className='bg-primary text-secondary'>
			<EventsBanner />
			<AllEventsHeader />
			<ParishEventList allParishEvents={allParishEvents} />
			{/* Either alternating cards on single scroll or thumbnail list with popup modal for info */}
		</div>
	);
};

export default ParishLife;
