import { getSingleParishEvent } from '@/app/lib/api/getSingleEvent';
import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { fallbackImages } from '../../utilities/fallbackAssets';

type Props = {
	params: {
		slug: string;
	};
};

const ParishEvent = async ({ params: { slug } }: Props) => {
	const pEventData = await getSingleParishEvent(slug);

	return (
		<div className='h-[80vh] pt-32 bg-secondary border-t-2 border-secondary'>
			<article className='px-10'>
				<section className='space-y-2 border-primary text-white'>
					<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
						<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
							<Image
								className='object-cover object-center mx-auto'
								src={
									urlFor(pEventData.pageBannerImage) ||
									fallbackImages.parishEvents.pageBannerImageFallback
								}
								alt={`${pEventData?.eventTitle} Image`}
								fill
							/>
						</div>

						<section className='p-10 bg-myGrey w-full'>
							<div className='flex flex-col md:flex-row justify-between gap-y-5'>
								<div
									className='flex flex-col 
                                 justify-between'>
									<h1 className='text-6xl text-center font-heading mb-10'>
										{pEventData?.eventTitle}
									</h1>

									{pEventData.eventDetails?.eventType === 'recurring' ? (
										<div>
											<p className='text-2xl font-subheading'>
												Join us every:{' '}
												{pEventData.eventDetails?.recurrence?.dayOfWeek}
											</p>
											<p>
												Time: {pEventData.eventDetails?.recurrence?.timeOfDay}
											</p>
										</div>
									) : (
										<div>
											{pEventData.eventDetails?.date ? (
												<p>
													{' '}
													Join us this coming: {pEventData.eventDetails.date}
												</p>
											) : (
												' '
											)}
										</div>
									)}
								</div>
								<div className='flex flex-col justify-end w-1/2'>
									{pEventData.description}
								</div>
							</div>
						</section>
					</div>
				</section>
			</article>
		</div>
	);
};

export default ParishEvent;