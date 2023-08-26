import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { getAbout } from '@/app/lib/api/getAbout';
import { PortableText } from '@portabletext/react';
import { fallbackImages } from '../utilities/fallbackAssets';
import { RichTextComponents } from '../utilities/RichTextComponents';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const aboutPage = async () => {
	const about = await getAbout();

	// Banner Image
	const aboutBannerUrl = about.primaryImage
		? urlFor(about.primaryImage).url()
		: fallbackImages.about.primaryImageFallback;

	console.log(about);

	return (
		<div>
			<section
				className='hero h-[44vh] '
				style={{
					backgroundImage: `url(${aboutBannerUrl})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<div className='mb-96 text-5xl font-bold font-heading leading-snug'>
							{about.primaryImage}
						</div>
					</div>
				</div>
			</section>
			<section className='bg-primary py-12 px-4 md:px-40'>
				<h2 className='text-center text-4xl mb-8 text-secondary font-subheading'>
					{about.title}
				</h2>
				<h3 className='mb-8 text-lg text-center text-accent md:text-xl dark:text-accent2'>
					{about.description}{' '}
				</h3>
				<div className='text-secondary prose max-w-none lg:columns-2 gap-20 px-4 md:px-7 lg:px-16 font-subContent mb-3 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-subheading first-letter:text-secondary dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'>
					<PortableText value={about.body} components={RichTextComponents} />
				</div>
			</section>
			<section>
				<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
					<a href='#'>
						<img
							className='rounded-t-lg'
							src='https://images.unsplash.com/photo-1584792977024-014310b55977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='#'
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Read more
							<svg
								className='w-3.5 h-3.5 ml-2'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default aboutPage;
