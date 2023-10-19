import { getAbout } from '@/app/lib/api/getAbout';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { RiDoubleQuotesR } from 'react-icons/ri';
import urlFor from '@/sanity/lib/urlFor';

const AboutQuote = async () => {
	const about = await getAbout();

	const middleImageUrl = about.middleBannerImage
		? urlFor(about.middleBannerImage)
		: fallbackImages.about.middleBannerImageFallback;

	return (
		<section
			className='hero h-full relative'
			style={{ backgroundImage: `url(${middleImageUrl})` }}>
			<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary'></div>

			<div className='md:w-6/12 mx-auto py-10 px-8 bg-gray-700 bg-opacity-30 shadow-lg rounded-lg overflow-hidden my-24'>
				<blockquote className='text-xl italic font-semibold text-whtie font-heading dark:text-white px-4 '>
					<RiDoubleQuotesR />
					<p className='drop-shadow-2xl'>
						{about?.middleBannerVerse ||
							placeholders.about.middleBannerVerseFallback}
					</p>
					<p className='text-right pr-9'>
						--{' '}
						{about?.middleBannerVerseAttribution ||
							placeholders?.about.middleBannerVerseAttFallback}
					</p>
				</blockquote>
			</div>
		</section>
	);
};

export default AboutQuote;
