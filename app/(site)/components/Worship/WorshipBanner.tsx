import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { getWorship } from '@/app/lib/api/getWorship';
import { RiDoubleQuotesR } from 'react-icons/ri';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const HomeBanner = async () => {
	const worship = await getWorship();

	// Hero Image
	const bannerImageUrl = worship.bannerImage
		? urlFor(worship.bannerImage).url()
		: fallbackImages.worship.primaryImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${bannerImageUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute top-10 left-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-60 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{worship?.bannerVerse ||
										placeholders.worship.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{worship?.bannerVerseAttribution ||
										placeholders.worship.bannerVerseAttFallback}
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
