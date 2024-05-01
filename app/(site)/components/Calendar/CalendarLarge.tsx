'use client';

import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from './calendar';
import cn from './cn';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarHeader';
import { getParishEvents } from '@/app/lib/api/getParishEvents';
import Link from 'next/link';

type EventDetails = {
	eventType: string;
	date: string;
	recurrence: {
		dayOfWeek: string;
		frequency: string;
		timeOfDay: string;
		weekOfMonth?: string;
	};
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

	const [events, setEvents] = useState<Events>({});

	useEffect(() => {
		getParishEvents().then((data: Event[]) => {
			setEvents(formatEvents(data));
		});
	}, []);

	const formatEvents = (eventsData: Event[]): Events => {
		let eventsObj: Events = {};
		eventsData.forEach((event) => {
			if (event?.eventDetails?.eventType === 'recurring') {
				const { recurrence } = event.eventDetails;
				if (recurrence) {
					const { dayOfWeek, frequency, weekOfMonth } = recurrence;
					let baseDate = dayjs().startOf('year');

					for (let month = 0; month < 12; month++) {
						let monthDate = baseDate.month(month);

						if (frequency === 'Every week') {
							let firstDayOfMonth = monthDate.startOf('month');
							for (let i = 0; i < 7; i++) {
								let checkDate = firstDayOfMonth.add(i, 'days');
								if (checkDate.format('dddd') === dayOfWeek) {
									for (
										let d = checkDate;
										d.month() === monthDate.month();
										d = d.add(1, 'week')
									) {
										const formattedDate = d.format('YYYY-MM-DD');
										if (!eventsObj[formattedDate]) {
											eventsObj[formattedDate] = [];
										}
										eventsObj[formattedDate].push(event);
									}
									break;
								}
							}
						} else if (frequency === 'Every month' && weekOfMonth) {
							const weekCounts: { [key: string]: number } = {
								First: 1,
								Second: 2,
								Third: 3,
								Fourth: 4,
								Last: -1,
							};
							const weekDayFactors = weekCounts[weekOfMonth];
							const lastDayOfMonth = monthDate.endOf('month');
							let targetDate = monthDate.startOf('month');

							while (targetDate.format('dddd') !== dayOfWeek) {
								targetDate = targetDate.add(1, 'days');
							}
							if (weekDayFactors > 0) {
								targetDate = targetDate.add(weekDayFactors - 1, 'week');
							} else if (weekDayFactors === -1) {
								while (
									targetDate.add(1, 'week').month() === monthDate.month()
								) {
									targetDate = targetDate.add(1, 'week');
								}
							}
							const formattedDate = targetDate.format('YYYY-MM-DD');
							if (!eventsObj[formattedDate]) {
								eventsObj[formattedDate] = [];
							}
							eventsObj[formattedDate].push(event);
						}
					}
				}
			} else {
				const date = event?.eventDetails?.date;
				if (date) {
					if (!eventsObj[date]) {
						eventsObj[date] = [];
					}
					eventsObj[date].push(event);
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
						events[selectDate.format('YYYY-MM-DD')].map((event, index) => (
							<Link href={`/event/${event.slug.current}`} key={index}>
								<div
									className={`p-6 mb-6 rounded-lg text-lg ${
										event.eventDetails.eventType === 'recurring'
											? 'bg-secondary text-primary'
											: 'bg-slate-800 text-primary'
									}`}>
									<h2 className='text-2xl pb-3 font-semibold'>
										{event.eventTitle}
									</h2>
									<p className='text-white line-clamp-2'>{event.description}</p>
								</div>
							</Link>
						))
					) : (
						<p className='text-gray-600 text-lg'>No events today.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default CalendarLarge;
