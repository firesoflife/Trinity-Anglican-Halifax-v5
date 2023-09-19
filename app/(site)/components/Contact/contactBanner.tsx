import { getHome } from '@/app/lib/api/getHome';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { fallbackImages } from '../../utilities/fallbackAssets';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const HomeBanner = async () => {
	const home = await getHome();

	// Hero Image
	const welcomeImageUrl = home.welcomeImage
		? urlFor(home.welcomeImage).url()
		: fallbackImages.heroImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh]'
				style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'></div>
				</div>
			</section>
			{/* <div className='h-14 w-full bg-secondary '></div> */}
		</>
	);
};

export default HomeBanner;
