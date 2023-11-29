import { getCovenant } from '@/app/lib/api/getCovenant';

const CovenantHeader = async () => {
	const covenant = await getCovenant();
	return (
		<div
			id='what-to-expect'
			className='h-auto py-20 bg-secondary text-primary p-4'>
			<div className='flex justify-around'>
				<hr className='inverse-staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>
				{covenant?.title}
			</h1>
			<hr className='inverse-staff-underline w-1/3 mx-auto' />
		</div>
	);
};

export default CovenantHeader;
