function LocationHeader() {
	return (
		<div
			id='location'
			className='h-auto pt-20 md:py-20 bg-secondary text-primary p-4'>
			<div className='flex justify-around'>
				<hr className='inverse-staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>Location</h1>
			<hr className='inverse-staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default LocationHeader;
