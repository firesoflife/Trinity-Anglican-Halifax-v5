'use client';

// This code is used in the Events page to toggle between recurring and one-off events and is displayed below the Header of the Parish Events section.

import React, { useState } from 'react';
import ParishEventList from './ParishEventList';
import ParishOneOff from './ParishOneOff';
type EventsToggleProps = {
	allParishEvents: any;
	oneOffEvents: any;
};
export const EventsToggle: React.FC<EventsToggleProps> = ({
	allParishEvents,
	oneOffEvents,
}) => {
	const [showRecurring, setShowRecurring] = useState(true);
	return (
		<>
			<div className='container w-1/2 mx-auto text-sm font-medium text-center text-myGrey '>
				<ul className='flex flex-wrap -mb-px justify-center'>
					<li className='mr-2'>
						<button
							onClick={() => setShowRecurring(true)}
							className={
								showRecurring
									? 'inline-block p-4 border-2 rounded-b-lg border-myGrey hover:text-white hover:border-myblue hover:bg-myGrey transition-all'
									: 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-myBlue transition-all'
							}>
							Common Events
						</button>
					</li>
					<li className='mr-2'>
						<button
							onClick={() => setShowRecurring(false)}
							className={
								showRecurring
									? 'inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-myBlue transition-all'
									: 'inline-block p-4 border-2 rounded-b-lg border-myGrey hover:text-white hover:border-myblue hover:bg-myGrey transition-all'
							}>
							Special Events
						</button>
					</li>
				</ul>
			</div>
			{showRecurring ? (
				<ParishEventList allParishEvents={allParishEvents} />
			) : (
				<ParishOneOff oneOffEvents={oneOffEvents} />
			)}
		</>
	);
};
export default EventsToggle;
