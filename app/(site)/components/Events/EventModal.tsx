import { getParishEvents } from '@/app/lib/api/getParishEvents';

const EventModal = async () => {
	const events = await getParishEvents();
	return (
		<div className='events-page'>
			{events.map((event: ParishEvents) => (
				<div className='event-card' key={event._id}>
					<img
						src={
							event.primaryImage?.asset.url || 'https://via.placeholder.com/150'
						}
						alt={event.eventTitle || 'Event Image'}
						className='event-image'
					/>
					<h2 className='event-title'>{event.eventTitle}</h2>
					<p className='event-description'>{event.description}</p>
					<div className='event-details'>
						<p>
							<strong>Type:</strong> {event.eventDetails.eventType} ||
							{
								'                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nam pariatur modi repellendus odit nihil animi cum natus iste. Nostrum mollitia libero obcaecati minima quos eum maiores provident sint magni, amet, totam deleniti repellendus alias voluptates dolorum sit modi nam earum quo temporibus quod iste?'
							}
						</p>

						<p>
							<strong>Date:</strong>{' '}
							{new Date(event.eventDetails.date).toLocaleDateString()}
						</p>
						<p>
							<strong>Recurrence:</strong>{' '}
							{/* {event.eventDetails?.recurrence.dayOfWeek} every || {'TBD'} */}
							{event.eventDetails?.recurrence?.frequency || 'TBD'} ||{' '}
							{event.eventDetails?.recurrence?.timeOfDay}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default EventModal;
