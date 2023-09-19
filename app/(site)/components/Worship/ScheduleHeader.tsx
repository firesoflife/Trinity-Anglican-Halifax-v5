function ScheduleHeader() {
	return (
		<div id='schedule' className='h-auto py-20 bg-secondary text-primary p-4'>
			<div className='flex justify-around'>
				<hr className='inverse-staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>
				Worship Shedule
			</h1>
			<hr className='inverse-staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default ScheduleHeader;
