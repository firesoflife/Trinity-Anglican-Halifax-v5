import { fallbackImages } from '../../utilities/fallbackAssets';
import { getContact } from '@/app/lib/api/getContact';
import urlFor from '@/sanity/lib/urlFor';

const HomeBanner = async () => {
	const contact = await getContact();

	// Hero Image
	const contactImageUrl = contact?.contactBannerImage
		? urlFor(contact?.contactBannerImage)
		: fallbackImages.heroImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh]'
				style={{ backgroundImage: `url(${contactImageUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'></div>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
