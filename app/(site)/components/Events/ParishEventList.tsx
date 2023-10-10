import urlFor from '@/sanity/lib/urlFor';
import { GiTriquetra } from 'react-icons/gi';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '../../events/loading';

type Props = {
	allParishEvents: ParishEvents[];
};

type CardProps = {
	pEvent: ParishEvents;
	isReversed: boolean;
};

const Card = ({ pEvent, isReversed }: CardProps) => (
	<div
		className={`grid grid-cols-1 md:grid-cols-4 gap-4 bg-base-100 shadow-xl p-3 m-3 mb-14 w-full mx-auto`}>
		<div
			className={`col-span-1 ${
				isReversed ? 'md:order-last' : 'md:order-first'
			} hidden sm:block`}>
			<div className='aspect-w-1 aspect-h-1 mx-auto'>
				<img
					className='object-cover w-full h-full mx-auto'
					src={urlFor(pEvent.primaryImage)}
					alt={pEvent.pageTitle}
				/>
			</div>
		</div>
		<div
			className={`card-body col-span-3 ${
				isReversed ? 'md:order-first' : 'md:order-last'
			}`}>
			<h2 className='card-title text-3xl font-subheading underline underline-offset-3 decoration-5 decoration-myBlue'>
				{pEvent.eventTitle}
			</h2>
			<p className='line-clamp-3 xl:line-clamp-none max-w-prose font-heading text-lg'>
				{pEvent.description}
			</p>
			<hr className='p-3 lg:hidden' />
			<div className='card-actions justify-between'>
				<div className='text-white'>
					<h2 className='text-xl font-heading'>
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
					<h2 className='text-xl font-heading'>
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
						<GiTriquetra size={30} />
					</span>
					<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
				</div>
				<Link href={`/event/${pEvent.slug.current}`}>
					<button className='btn bg-myBlue hover:bg-myGrey text-white'>
						More Info ...
					</button>
				</Link>
			</div>
		</div>
	</div>
);

const ParishEventList = ({ allParishEvents }: Props) => {
	return (
		// <Suspense fallback={<Loading />}>
		<div className='container mx-auto p-8 bg-primary w-full text-white'>
			{/* EVENTS */}
			{allParishEvents
				.filter((pEvent) => pEvent.eventDetails.eventType === 'recurring')
				.map((pEvent, index) => (
					<Card
						key={pEvent.slug.current}
						pEvent={pEvent}
						isReversed={index % 2 !== 0}
					/>
				))}
		</div>
		// </Suspense>
	);
};

export default ParishEventList;
