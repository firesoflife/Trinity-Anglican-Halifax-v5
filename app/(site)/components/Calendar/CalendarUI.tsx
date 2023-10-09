'use client';

import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from './calendar';
import cn from './cn';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarBanner';
import { getParishEvents } from '@/app/lib/api/getParishEvents';
import { type } from 'os';

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
			const date = dayjs(event.eventDetails.date).format('YYYY=MM-DD');
			if (!eventsObj[date]) {
				eventsObj[date] = [];
			}
			eventsObj[date].push(event);
		});
		return eventsObj;
	};

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
				<div className='h-96 w-96 px-5'>
					<h1>Events for {selectDate.toDate().toDateString()}</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
			</div>
		</>
	);
}

export default CalendarUI;
