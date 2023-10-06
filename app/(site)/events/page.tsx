import React from 'react';
import { getParishEvents } from '@/app/lib/api/getParishEvents';
import AllEventsHeader from '../components/Events/EventsHeader';
import { getParish } from '@/app/lib/api/getParish';
import EventsToggle from '../components/Events/EventsToggle';

const ParishLife = async () => {
	const parishMain = await getParish();
	const parishEvent = await getParishEvents();

	const allParishEvents = Array.isArray(parishEvent)
		? parishEvent
		: [parishEvent];

	const oneOffEvents = Array.isArray(parishEvent)
		? parishEvent.filter((event) => !event.eventDetails.recurrence)
		: [parishEvent];

	return (
		<div className='bg-primary text-secondary pb-10'>
			<AllEventsHeader data={parishMain} />
			<EventsToggle
				allParishEvents={allParishEvents}
				oneOffEvents={oneOffEvents}
			/>
		</div>
	);
};

export default ParishLife;
