import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { getWorship } from '@/app/lib/api/getWorship';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const HomeBanner = async () => {
	const worship = await getWorship();

	// Hero Image
	const welcomeImageUrl = worship.mainImage
		? urlFor(worship.mainImage).url()
		: fallbackImages.worship.primaryImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute bottom-4 right-4 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-right'>
							{/* TODO - Change title layout for verses  */}
							{worship.featureVerse}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
