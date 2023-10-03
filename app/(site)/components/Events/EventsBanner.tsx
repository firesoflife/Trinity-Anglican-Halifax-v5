import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { getWorship } from '@/app/lib/api/getWorship';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const EventsBanner = async () => {
	const worship = await getWorship();

	// Hero Image
	// TODO - pull from parishEvents Schema and change Image
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
								<svg
									className='w-4 h-4 text-primary opacity-60 mb-4'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 18 14'>
									<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
								</svg>
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

export default EventsBanner;
