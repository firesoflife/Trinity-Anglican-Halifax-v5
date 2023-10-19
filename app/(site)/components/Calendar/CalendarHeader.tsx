function CalendarHeader() {
	return (
		<div id='' className='h-auto bg-primary text-secondary p-4'>
			<div className='flex justify-around'>
				<hr className='staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>
				Upcoming Events
			</h1>
			<hr className='staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default CalendarHeader;
