import ImageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getAbout } from '@/app/lib/api/getAbout';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { RiDoubleQuotesR } from 'react-icons/ri';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

// TODO - Add quoteImage to sanity Schema and Fallback
const AboutQuote = async () => {
	const about = await getAbout();

	const smallImageUrl = about.smallImage
		? urlFor(about.smallImage).url()
		: fallbackImages.about.smallImageFallback;

	return (
		<section
			className='hero h-full relative'
			style={{ backgroundImage: `url(${smallImageUrl})` }}>
			<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary'></div>

			<div className='md:w-6/12 mx-auto py-10 px-8 bg-gray-700 bg-opacity-30 shadow-lg rounded-lg overflow-hidden my-24'>
				<blockquote className='text-xl italic font-semibold text-whtie font-heading dark:text-white px-4 '>
					<RiDoubleQuotesR />
					<p className='drop-shadow-2xl'>
						"But God forbid that I should glory, save in the cross of our Lord
						Jesus Christ, by whom the world is crucified unto me, and I unto the
						world."
					</p>
					<p className='text-right pr-9'>-- Galatians 6:14</p>
				</blockquote>
			</div>
		</section>
	);
};

export default AboutQuote;
