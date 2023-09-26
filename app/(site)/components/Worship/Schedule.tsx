import {
	getRegularServices,
	getSpecialServices,
} from '@/app/lib/api/getServices';
import { getWorship } from '@/app/lib/api/getWorship';
import ImageUrlBuilder from '@sanity/image-url';
import ScheduleHeader from './ScheduleHeader';
import { LiaCrossSolid } from 'react-icons/lia';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = ImageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
// 	return builder.image(source);
// }

function urlFor(source: SanityImageSource | undefined) {
	if (!source) {
		return undefined;
	}
	return builder.image(source).url();
}

export default async function EventList() {
	const regularServices = await getRegularServices();
	const specialServices = await getSpecialServices();
	const worship = await getWorship();

	return (
		<>
			<ScheduleHeader />
			<div className='mt-9'>
				<div className='bg-black relative h-60 mb-4'>
					<img
						src={
							urlFor(worship.scheduleImage) ||
							fallbackImages.worship.scheduleBannerFallback
						}
						alt='Background'
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 flex items-center justify-center'>
						{/* TODO - add Verse option to sanity schema and render here */}
						<p className='text-center text-white opacity-100 z-50'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className='flex flex-col w-full lg:flex-row'>
					<div className='grid flex-1 card bg-white rounded-box text-black bg-opacity-80 p-4 pl-14'>
						{regularServices.length > 0 ? (
							regularServices.map((service, index) => (
								<div key={index} className='mb-4'>
									<h2 className='font-subheading text-2xl '>{service.title}</h2>
									<div className='border border-b border-slate-400 w-64'></div>
									<p>{service.description}</p>
									<p>Start Time: {service.startTime}</p>
									<p>End Time: {service.endTime || 'Not specified'}</p>
									<p>Days: {service.daysOfWeek.join(', ')}</p>
								</div>
							))
						) : (
							<p>No regular services scheduled.</p>
						)}
					</div>

					<div className='divider lg:divider-horizontal'>
						<LiaCrossSolid size={75} />
					</div>

					<div className='grid flex-1 card bg-white rounded-box text-black bg-opacity-80 p-4 pl-14'>
						{specialServices.length > 0 ? (
							specialServices.map((service, index) => (
								<div key={index} className='mb-4'>
									<h2 className='font-subheading text-2xl'>{service.title}</h2>
									<p>{service.description}</p>
									<p>Start Time: {service.startTime}</p>
									<p>End Time: {service.endTime || 'Not specified'}</p>
									<p>Days: {service.daysOfWeek.join(', ')}</p>
								</div>
							))
						) : (
							<p>No special services scheduled.</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
