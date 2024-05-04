import { getVolunteer } from '@/app/lib/api/getVolunteer';

import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../utilities/RichTextComponents';

export const revalidate = 10;

const Volunteer = async () => {
	const volunteerData = await getVolunteer();
	return (
		<div className='h-full pt-32 bg-secondary border-t-2 border-secondary'>
			<article className='px-10'>
				<section className='space-y-2 border-primary text-white'>
					<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
						<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
							<Image
								className=' object-center mx-auto'
								src={
									urlFor(volunteerData?.pageBannerImage) ||
									fallbackImages.parishEvents.pageBannerImageFallback
								}
								alt={`${volunteerData?.title} Image`}
								fill
								objectFit='cover'
							/>
						</div>
						<section className='p-10 bg-myGrey w-full'>
							<div className='flex flex-col md:flex-row justify-between gap-y-5'>
								<div
									className='flex flex-col 
                                 justify-between'>
									<h1 className='text-6xl text-center font-heading mb-10'>
										{volunteerData?.title}
									</h1>

									<div>
										<p className='text-2xl font-subheading'>
											{volunteerData?.description || 'contact us for details'}
										</p>
									</div>
								</div>
								{/* <div className='flex flex-col justify-end  lg:w-1/2'>
									{volunteerData?.description || 'Nothing here yet'}
								</div> */}
							</div>
						</section>
					</div>
				</section>
				<section>
					{volunteerData?.body ? (
						<div className='mt-24 lg:w-4/5 mx-auto text-secondary bg-primary p-14'>
							<PortableText
								value={volunteerData?.body}
								components={RichTextComponents}
							/>
						</div>
					) : (
						<div className='mt-24 lg:w-4/5 h-[15rem] mx-auto text-secondary bg-primary p-14'>
							<h2 className='text-3xl pb-9'>
								There is nothing here right now, but in the future we will
								provide more information on{' '}
								{volunteerData?.title || 'this event'} here.
							</h2>
						</div>
					)}
				</section>
			</article>
		</div>
	);
};

export default Volunteer;
