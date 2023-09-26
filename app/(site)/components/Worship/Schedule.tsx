import {
	getRegularServices,
	getSpecialServices,
} from '@/app/lib/api/getServices';
import { getWorship } from '@/app/lib/api/getWorship';
import ImageUrlBuilder from '@sanity/image-url';
import ScheduleHeader from './ScheduleHeader';
import { LiaCrossSolid } from 'react-icons/lia';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { RiDoubleQuotesR } from 'react-icons/ri';

const builder = ImageUrlBuilder(client);

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
			<div className=''>
				<div className='bg-black relative h-60 mb-4'>
					<img
						src={
							urlFor(worship.scheduleImage) ||
							fallbackImages.worship.scheduleBannerFallback
						}
						alt='Background'
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-black opacity-50'></div>
					<div className='absolute inset-0 flex items-center justify-end pr-10'>
						<div className='max-w-xs'>
							<div className='text-xl font-bold font-heading leading-snug text-right'>
								<blockquote className='text-xl italic font-semibold text-primary opacity-60 font-heading'>
									<div className='w-4 h-4 text-primary opacity-60 mb-4'>
										<RiDoubleQuotesR />
									</div>
									<p className='drop-shadow-2xl'>
										{worship?.scheduleBannerVerse ||
											placeholders.worship.scheduleVerseFallback}
									</p>
									<p className='text-right pr-9'>
										--{' '}
										{worship?.scheduleBannerVerseAtt ||
											placeholders.worship.scheduleVerseAttFallback}
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col w-full lg:flex-row'>
					<div className='grid flex-1 card bg-white rounded-box text-black bg-opacity-80 p-4 pl-14'>
						<h2 className='font-subheading text-3xl text-secondary mb-5'>
							{worship.regularScheduleHeader ||
								placeholders.schedule.regularServiceTitle}
						</h2>
						{regularServices.length > 0 ? (
							regularServices.map((service, index) => (
								<div key={index} className='mb-4'>
									<h3 className='font-subheading text-2xl '>{service.title}</h3>
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
						<h2 className='font-subheading text-3xl text-secondary mb-5'>
							{worship?.specialScheduleHeader ||
								placeholders.schedule.specialServiceTitle}
						</h2>
						{specialServices.length > 0 ? (
							specialServices.map((service, index) => (
								<div key={index} className='mb-4'>
									<h3 className='font-subheading text-2xl'>{service.title}</h3>
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
