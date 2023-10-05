import urlFor from '@/sanity/lib/urlFor';
import { GiTriquetra } from 'react-icons/gi';
import EventButton from './EventButton';
import Link from 'next/link';

type Props = {
	allParishEvents: ParishEvents[];
};

type CardProps = {
	pEvent: ParishEvents;
	isReversed: boolean;
};

const Card = ({ pEvent, isReversed }: CardProps) => (
	// <div
	// 	className={`grid grid-cols-4 gap-4 ${
	// 		isReversed ? 'flex-row-reverse' : ''
	// 	} bg-base-100 shadow-xl p-3 m-3 mb-14 w-full`}>
	// 	<div className='col-span-1 aspect-w-1 aspect-h-1'>
	// 		<img
	// 			className='object-cover w-full h-full'
	// 			src={urlFor(pEvent.primaryImage)}
	// 			alt={pEvent.pageTitle}
	// 		/>
	// 	</div>
	// 	<div className='card-body col-span-3'>
	<div
		className={`grid grid-cols-4 gap-4 bg-base-100 shadow-xl p-3 m-3 mb-14 w-full`}>
		<div className={`col-span-1 ${isReversed ? 'order-last' : 'order-first'}`}>
			<div className='aspect-w-1 aspect-h-1'>
				<img
					className='object-cover w-full h-full'
					src={urlFor(pEvent.primaryImage)}
					alt={pEvent.pageTitle}
				/>
			</div>
		</div>
		<div
			className={`card-body col-span-3 ${
				isReversed ? 'order-first' : 'order-last'
			}`}>
			<h2 className='card-title text-2xl font-subheading underline underline-offset-3 decoration-5 decoration-myBlue'>
				{pEvent.eventTitle}
			</h2>
			<p className='line-clamp-2'>{pEvent.description}</p>
			<div className='card-actions justify-between'>
				<div className='text-white'>
					<h2 className='text-lg font-heading'>
						{' '}
						Join us:
						<span className='  font-subheading text-lg'>
							{'  '}
							{pEvent.eventDetails?.recurrence?.dayOfWeek || (
								<Link href='/contact' className='hover:text-myBlue'>
									{' '}
									&nbsp; Contact us for details
								</Link>
							)}
						</span>
					</h2>
					<h2 className='text-lg font-heading'>
						Time:{' '}
						<span className='  font-subheading text-lg'>
							{'  '}
							{pEvent.eventDetails?.recurrence?.timeOfDay || (
								<Link href='/contact' className='hover:text-myBlue'>
									{' '}
									&nbsp; TBD
								</Link>
							)}
						</span>
					</h2>
				</div>
				<div className='lg:flex hidden w-1/2'>
					<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ' />
					<span className='self-center px-5'>
						<GiTriquetra />
					</span>
					<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
				</div>
				<EventButton />
			</div>
		</div>
	</div>
);

const ParishEventList = ({ allParishEvents }: Props) => {
	return (
		<div className='container mx-auto bg-primary w-full text-white'>
			{/* EVENTS */}
			{allParishEvents
				.filter((pEvent) => pEvent.eventDetails.eventType === 'recurring')
				.map((pEvent, index) => (
					<Card key={pEvent._id} pEvent={pEvent} isReversed={index % 2 !== 0} />
				))}
		</div>
	);
};

export default ParishEventList;
