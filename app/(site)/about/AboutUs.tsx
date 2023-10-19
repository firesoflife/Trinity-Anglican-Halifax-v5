import { getAbout } from '@/app/lib/api/getAbout';

async function AboutHeader() {
	const about = await getAbout();
	return (
		<div className='h-auto py-5 pb-10 bg-primary text-secondary p-4'>
			<div className='flex justify-around'>
				<hr className='staff-underline w-2/3 mx-auto' />
			</div>

			<h1 className='text-4xl font-subheading text-center py-16'>
				{about.title || 'About Us'}{' '}
			</h1>
			<hr className='staff-underline w-1/3 mx-auto' />
		</div>
	);
}

export default AboutHeader;
