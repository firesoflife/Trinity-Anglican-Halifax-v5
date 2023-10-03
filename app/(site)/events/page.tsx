import EventsBanner from '../components/Events/EventsBanner';
import AllEventsHeader from '../components/Events/EventsHeader';

const ParishLife = () => {
	return (
		<div className='bg-primary text-secondary'>
			<EventsBanner />
			<AllEventsHeader />
			{/* Parish Event List */}
			{/* Either alternating cards on single scroll or thumbnail list with popup modal for info */}
		</div>
	);
};

export default ParishLife;
