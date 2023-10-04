import urlFor from '@/sanity/lib/urlFor';

type Props = {
	allParishEvents: ParishEvents[];
};
// TODO - follow Sonny Blog Guide - at the 1h29m mark: https://www.youtube.com/watch?v=x3fCEPFgUSM&t=6382s

const ParishEventList = ({ allParishEvents }: Props) => {
	// console.log(allParishEvents);
	return (
		<div>
			<hr className='border-secondary mb-10' />
			<div>
				{/* EVENTS */}
				{allParishEvents
					.filter((pEvent) => pEvent.eventDetails.eventType === 'recurring')
					.map((pEvent) => (
						<div
							key={pEvent._id}
							className='card lg:card-side bg-base-100 shadow-xl'>
							<figure>
								<img src={urlFor(pEvent.primaryImage)} alt={pEvent.pageTitle} />
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>{pEvent.pageTitle}</h2>
								<p>{pEvent.description}</p>
								<div className='card-actions justify-end'>
									<button className='btn btn-primary'>View Event</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ParishEventList;
