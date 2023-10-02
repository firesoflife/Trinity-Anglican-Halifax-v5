import { client } from '@/sanity/lib/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import '../../../globals.css';
import { OurValues } from './Values';
import WorshipHeader from './WorshipHeader';
import { getWorship } from '@/app/lib/api/getWorship';
import { RiDoubleQuotesR } from 'react-icons/ri';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource | undefined) {
	if (!source) {
		return undefined;
	}
	return builder.image(source).url();
}

const WhatToExpect = async () => {
	const worship = await getWorship();

	return (
		<>
			<main>
				<div className='pt-8'>
					<WorshipHeader />
				</div>
				<section className='py-8 md:py-16 bg-slate-100 mt-10'>
					<div className='container mx-auto px-4 md:px-8 lg:flex lg:felx-col block md:flex-row gap-8 mb-9'>
						<div className='relative flex-1 pb-6 my-auto'>
							<img
								className='w-full object-cover shadow-2xl'
								src={
									urlFor(worship.expectImage) ||
									fallbackImages.worship.expectBannerFallback
								}
								alt='Growing Parishes.'
							/>
						</div>
						<div className='flex flex-1 flex-col justify-start'>
							<span className='text-4xl font-bold block mb-4 font-subheading text-myGrey'>
								{worship.pageTitle}
							</span>
							<p className='text-lg leading-relaxed text-myGrey first-letter:text-7xl first-letter:font-heading'>
								{worship.mainContent}
							</p>
						</div>
					</div>

					<div className='container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8'>
						<div className='relative flex-1 flex justify-center items-center'>
							<div className='text-center'>
								<blockquote className='text-xl italic font-semibold text-gray-400 dark:text-white font-heading'>
									<RiDoubleQuotesR />
									<p className='drop-shadow-2xl'>
										{worship.expectVerse ||
											placeholders.worship.expectVerseFallback}
									</p>
									<p className='text-right pr-9'>
										----{' '}
										{worship?.expectVerseAttribution ||
											placeholders.worship.expectVerseAttFallback}
									</p>
								</blockquote>
							</div>
						</div>
						<div className='flex flex-1 flex-col justify-start'>
							{/* **** FAQ STYLE INFO DROPDOWNS  ****/}
							<OurValues worship={worship} />
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default WhatToExpect;
