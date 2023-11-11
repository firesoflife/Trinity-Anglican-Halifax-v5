import { getSingleParishEvent } from '@/app/lib/api/getSingleEvent';
import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../utilities/RichTextComponents';
import { getSinglePost } from '@/app/lib/api/getSinglePost';

export const revalidate = 10;

type Props = {
	params: {
		slug: string;
	};
};

const ParishEvent = async ({ params: { slug } }: Props) => {
	const post = await getSinglePost(slug);

	return (
		<div className='h-full pt-32 bg-secondary border-t-2 border-secondary'>
			<article className='px-10'>
				<section className='space-y-2 border-primary text-white'>
					<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
						<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
							<Image
								className='object-cover object-center mx-auto'
								src={
									urlFor(post?.mainImage) ||
									fallbackImages.parishEvents.pageBannerImageFallback
								}
								alt={`${post?.title} Image`}
								fill
							/>
						</div>

						<section className='p-10 bg-myGrey w-full'>
							<div className='flex flex-col md:flex-row justify-between gap-y-5'>
								<div
									className='flex flex-col 
                                 justify-between'>
									<h1 className='text-6xl text-center font-heading mb-10'>
										{post?.title}
									</h1>

									<div className='flex justify-center items-center space-x-2 pb-5'>
										<div className='w-64 flex justify-around'>
											<div>
												<h3 className='text-lg font-bold'>
													{post?.author.name}{' '}
												</h3>
												<p>
													{new Date(post._createdAt).toLocaleDateString(
														'en-US',
														{
															day: 'numeric',
															month: 'long',
															year: 'numeric',
														}
													)}{' '}
												</p>
											</div>
											<Image
												className='rounded-full'
												src={
													urlFor(post?.author.image) ||
													fallbackImages.parishEvents.pageBannerImageFallback
												}
												alt={post?.author.name}
												height={40}
												width={40}
											/>
											{/* Author Bio - TODO  */}
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-end  lg:w-1/2'>
									{post?.description || 'Nothing here yet'}
								</div>
							</div>
						</section>
					</div>
				</section>
				{post?.body ? (
					<div className='mt-12 lg:w-4/5 mx-auto text-secondary bg-primary p-14'>
						<PortableText value={post?.body} components={RichTextComponents} />
					</div>
				) : (
					<div className='mt-24 lg:w-4/5 h-[15rem] mx-auto text-secondary bg-primary p-14'>
						<h2 className='text-3xl pb-9'>
							There is nothing here right now, but in the future we will provide
							more information on {post?.title || 'this event'} here.
						</h2>
					</div>
				)}
			</article>
		</div>
	);
};

export default ParishEvent;
