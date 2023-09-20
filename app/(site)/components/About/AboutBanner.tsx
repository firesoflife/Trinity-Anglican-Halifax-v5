import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { getAbout } from '@/app/lib/api/getAbout';
import { fallbackImages } from '../../utilities/fallbackAssets';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const AboutBanner = async () => {
	const about = await getAbout();

	const aboutBannerUrl = about.primaryImage
		? urlFor(about.primaryImage).url()
		: fallbackImages.about.primaryImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] shadow-lg rounded-lg overflow-hidden mb-12'
				style={{
					backgroundImage: `url(${aboutBannerUrl})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div className='hero-content text-center text-neutral-content py-12 px-4 md:px-40'>
					<div className='max-w-md'>
						<div className='mb-96 text-5xl font-bold font-heading leading-snug'>
							{about.primaryImage}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutBanner;
