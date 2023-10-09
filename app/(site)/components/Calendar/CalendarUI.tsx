'use client';

import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from './calendar';
import cn from './cn';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarBanner';
import { getParishEvents } from '@/app/lib/api/getParishEvents';

type EventDetails = {
	eventType: string;
	date: string;
	recurrence: {
		dayOfWeek: string;
		frequency: string;
		timeofDay: string;
	};
};

type Event = ParishEvents;

type Events = {
	[date: string]: Event[];
};

function CalendarUI() {
	const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

	const currentDate = dayjs();

	const [today, setToday] = useState(currentDate);

	const [selectDate, setSelectDate] = useState(currentDate);

	// Data fetch and state management for events

	const [events, setEvents] = useState<Events>({});

	useEffect(() => {
		getParishEvents().then((data: Event[]) => {
			setEvents(formatEvents(data));
		});
	}, []);

	const formatEvents = (eventsData: Event[]): Events => {
		let eventsObj: Events = {};
		eventsData.forEach((event) => {
			if (event.eventDetails.eventType === 'recurring') {
				// Handle recurring events
				const { dayOfWeek, frequency } = event.eventDetails.recurrence;
				// Use dayOfWeek and frequency to calculate the dates for recurring events
				// and add them to eventsObj
			} else {
				// Handle one-off events
				const date = event.eventDetails.date;
				if (date) {
					// check if the date is not null
					if (!eventsObj[date]) {
						eventsObj[date] = [];
					}
					eventsObj[date].push(event);
				}
			}
		});
		return eventsObj;
	};

	console.log(events);

	return (
		<>
			<div className='pb-20'>
				<CalendarHeader />
			</div>
			<div className='flex flex-col md:flex-row md:w-2/3 mx-auto divide-x-2 gap-10 h-100 items-center justify-center'>
				<div className='w-96'>
					<div className='lg:flex justify-between'>
						<h2 className='font-bold'>
							{months[today.month()]}, {today.year()}
						</h2>
						<div className='flex items-center gap-5'>
							<GrFormPrevious
								className='w-5 h-5  cursor-pointer'
								onClick={() => setToday(today.month(today.month() - 1))}
							/>
							<h3
								className=' cursor-pointer'
								onClick={() => setToday(currentDate)}>
								Today
							</h3>
							<GrFormNext
								className='w-5 h-5 cursor-pointer'
								onClick={() => setToday(today.month(today.month() + 1))}
							/>
						</div>
					</div>
					<div className='w-full grid grid-cols-7'>
						{days.map((day, index) => {
							return (
								<h2 key={index} className='h-14 grid place-content-center'>
									{day}
								</h2>
							);
						})}
					</div>
					<div className='w-full grid grid-cols-7'>
						{generateDate(today.month(), today.year()).map(
							({ date, currentMonth, today }, index) => {
								return (
									<div
										key={index}
										className='h-14 border-t grid place-content-center text-sm'>
										<h1
											className={cn(
												currentMonth ? '' : 'text-gray-400',
												today ? 'bg-secondary text-primary' : '',
												selectDate.toDate().toDateString() ===
													date.toDate().toDateString()
													? 'bg-myGrey text-primary'
													: '',
												'h-10 w-10 grid place-content-center rounded-full hover:bg-myBlue hover:text-primary transition-all hover:cursor-pointer'
											)}
											onClick={() => {
												setSelectDate(date);
											}}>
											{date.date()}
										</h1>
									</div>
								);
							}
						)}
					</div>
				</div>
				{/* Date Select and Display */}
				<div className='h-96 w-96 px-5'>
					<h1>Events for {selectDate.toDate().toDateString()}</h1>
					{events[selectDate.format('YYYY-MM-DD')] ? (
						events[selectDate.format('YYYY-MM-DD')].map((event, index) => (
							<div
								key={index}
								className={`p-2 ${
									event.eventDetails.eventType === 'recurring'
										? 'bg-blue-400'
										: 'bg-green-400'
								}`}>
								<h2>{event.eventTitle}</h2>
								<p>{event.description}</p>
							</div>
						))
					) : (
						<p>No events for this day.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default CalendarUI;
