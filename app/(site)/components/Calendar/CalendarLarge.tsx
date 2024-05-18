'use client';

import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from './calendar';
import cn from './cn';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarHeader';
import { getParishEvents } from '@/app/lib/api/getParishEvents';
import Link from 'next/link';
import { ParishEvents } from '@/typings';

type EventDetails = {
	eventType: 'recurring' | 'one-off';
	date?: string; // For single-day events
	startDate?: string; // For multi-day events
	endDate?: string; // For multi-day events
	recurrence?: RecurrenceDetails; // Ensure this is using the correct type
};

type WeekOfMonthKey = 'First' | 'Second' | 'Third' | 'Fourth' | 'Last';

type RecurrenceDetails = {
	dayOfWeek: string;
	frequency: string;
	timeOfDay?: string;
	weekOfMonth?: WeekOfMonthKey;
};

const indexMap: { [K in Exclude<WeekOfMonthKey, 'Last'>]: number } = {
	First: 0,
	Second: 1,
	Third: 2,
	Fourth: 3,
};

type Event = ParishEvents;

type Events = {
	[date: string]: Event[];
};

function CalendarLarge() {
	const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

	const currentDate = dayjs();

	const [today, setToday] = useState(currentDate);

	const [selectDate, setSelectDate] = useState(currentDate);

	// Data fetch and state management for events

	const [events, setEvents] = useState<Events>({});

	useEffect(() => {
		getParishEvents().then((data: Event[]) => {
			console.log('Fetched events data:', data);

			setEvents(formatEvents(data));
		});
	}, []);

	const formatEvents = (eventsData: Event[]): Events => {
		let eventsObj: Events = {};
		eventsData.forEach((event) => {
			const { eventDetails } = event;
			if (eventDetails.eventType === 'recurring' && eventDetails.recurrence) {
				const recurrence = eventDetails.recurrence;
				const { dayOfWeek, frequency, weekOfMonth } = recurrence as {
					dayOfWeek?: string | undefined;
					frequency?: string | undefined;
					weekOfMonth?: string | undefined;
				};
				let baseDate = dayjs().startOf('year');

				for (let month = 0; month < 12; month++) {
					let monthStart = baseDate.month(month).startOf('month');
					let monthEnd = baseDate.month(month).endOf('month');

					if (frequency === 'Every week') {
						let firstOccurrence;
						for (let day = 0; day < 7; day++) {
							let potentialDay = monthStart.add(day, 'days');
							if (potentialDay.format('dddd') === dayOfWeek) {
								firstOccurrence = potentialDay;
								break;
							}
						}

						if (firstOccurrence) {
							while (
								firstOccurrence.isBefore(monthEnd) ||
								firstOccurrence.isSame(monthEnd, 'day')
							) {
								const formattedDate = firstOccurrence.format('YYYY-MM-DD');
								eventsObj[formattedDate] = eventsObj[formattedDate] || [];
								eventsObj[formattedDate].push(event);
								firstOccurrence = firstOccurrence.add(1, 'week');
							}
						}
					} else if (frequency === 'Every month' && weekOfMonth) {
						let matchingDays = [];
						for (let day = 0; day <= monthEnd.diff(monthStart, 'day'); day++) {
							let currentDay = monthStart.add(day, 'days');
							if (currentDay.format('dddd') === dayOfWeek) {
								matchingDays.push(currentDay);
							}
						}

						let targetDay = null;
						if (weekOfMonth === 'Last') {
							targetDay = matchingDays.pop();
						} else {
							const index =
								indexMap[weekOfMonth as Exclude<WeekOfMonthKey, 'Last'>];
							if (index !== undefined && index < matchingDays.length) {
								targetDay = matchingDays[index];
							}
						}

						if (targetDay) {
							const formattedDate = targetDay.format('YYYY-MM-DD');
							eventsObj[formattedDate] = eventsObj[formattedDate] || [];
							eventsObj[formattedDate].push(event);
						}
					}
				}
			} else {
				// Handle one-off events, including multi-day events
				const { date, startDate, endDate } = eventDetails;
				if (date) {
					// Single day event
					eventsObj[date] = eventsObj[date] || [];
					eventsObj[date].push(event);
				} else if (startDate && endDate) {
					// Multi-day event
					let currentDay = dayjs(startDate);
					const endDay = dayjs(endDate);

					while (
						currentDay.isBefore(endDay) ||
						currentDay.isSame(endDay, 'day')
					) {
						const formattedDate = currentDay.format('YYYY-MM-DD');
						eventsObj[formattedDate] = eventsObj[formattedDate] || [];
						eventsObj[formattedDate].push(event);
						currentDay = currentDay.add(1, 'day');
					}
				}
			}
		});
		return eventsObj;
	};

	return (
		<div className='w-11/12 mx-auto flex flex-col justify-center items-center'>
			<div id='calendar-large-mobile' className='pb-20'>
				<h1 className='text-4xl font-subheading text-secondary'>
					Calendar of Events
				</h1>
			</div>
			<div className='flex flex-col md:flex-row md:w-full mx-auto divide-x-2 gap-10 h-full items-center justify-center'>
				<div className='w-full lg:w-1/2'>
					<div className='lg:flex justify-between'>
						<h2 className='text-4xl font-bold text-center md:text-left mb-6 md:mb-0'>
							{months[today.month()]}, {today.year()}
						</h2>
						<div className='flex items-center gap-10 justify-center mb-3'>
							<GrFormPrevious
								className='w-10 h-10 cursor-pointer'
								onClick={() => setToday(today.month(today.month() - 1))}
							/>
							<h3
								className='text-2xl cursor-pointer'
								onClick={() => setToday(currentDate)}>
								Today
							</h3>
							<GrFormNext
								className='w-10 h-10 cursor-pointer'
								onClick={() => setToday(today.month(today.month() + 1))}
							/>
						</div>
					</div>
					<div className='w-full grid grid-cols-7'>
						{days.map((day, index) => {
							return (
								<h2
									key={index}
									className='h-20 grid place-content-center text-2xl'>
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
										className='h-20 border-t grid place-content-center text-lg'>
										<h1
											className={cn(
												currentMonth ? '' : 'text-gray-400',
												today ? 'bg-secondary text-primary' : '',
												selectDate.toDate().toDateString() ===
													date.toDate().toDateString()
													? 'bg-myGrey text-primary'
													: '',
												'h-16 w-16 grid place-content-center rounded-full hover:bg-myBlue hover:text-primary transition-all hover:cursor-pointer'
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

				<div
					id='calendar-large'
					className='h-full w-full lg:w-1/2 px-10 rounded-lg overflow-y-auto'
					style={{ maxHeight: '500px' }}>
					<h1 className='text-4xl font-subContent2 font-extralight text-secondary mb-4'>
						Events for:{' '}
						{selectDate.toDate().toLocaleDateString(undefined, {
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</h1>
					{events[selectDate.format('YYYY-MM-DD')] ? (
						events[selectDate.format('YYYY-MM-DD')].map((event, index) => {
							const { eventDetails } = event;
							const isMultiDayEvent =
								eventDetails.startDate && eventDetails.endDate;
							const isRecurringEvent = eventDetails.eventType === 'recurring';
							const startDateFormatted = isMultiDayEvent
								? dayjs(eventDetails.startDate).format('MMM D, YYYY')
								: '';
							const endDateFormatted = isMultiDayEvent
								? dayjs(eventDetails.endDate).format('MMM D, YYYY')
								: '';

							// Determine the background color based on the event type
							let bgColorClass = '';
							if (isMultiDayEvent) {
								bgColorClass = 'bg-myGrey';
							} else if (isRecurringEvent) {
								bgColorClass = 'bg-slate-800';
							} else {
								bgColorClass = 'bg-secondary';
							}

							return (
								<Link href={`/event/${event.slug.current}`} key={index}>
									<div
										className={`p-6 mb-6 rounded-lg text-lg text-primary cursor-pointer ${bgColorClass}`}>
										<h2 className='text-2xl pb-3 font-semibold'>
											{event.eventTitle}
										</h2>
										{isMultiDayEvent && (
											<p className='text-base text-primary mb-2'>
												From {startDateFormatted} to {endDateFormatted}
											</p>
										)}
										<p className='text-white line-clamp-2'>
											{event.description}
										</p>
									</div>
								</Link>
							);
						})
					) : (
						<p className='text-gray-600 text-lg'>No events today.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default CalendarLarge;
