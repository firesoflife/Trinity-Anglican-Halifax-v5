function StaffHeader() {
	return (
		<div
			id='staff-clergy'
			className='h-auto py-20 bg-primary text-secondary p-4'>
			<div className='flex justify-around'>
				<hr className='staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>
				Meet the Clergy and Staff
			</h1>
			<hr className='staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default StaffHeader;