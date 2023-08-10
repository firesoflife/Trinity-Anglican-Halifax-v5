import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import 'app/globals.css';
import { fallbackImages } from './site/utilities/fallbackAssets';
import { getHome } from './lib/api/getHome';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

// Hero Image
const welcomeImageUrl =
	// home.welcomeImage ? urlFor(home.welcomeImage).url() :
	fallbackImages.heroImageFallback;

const HomePage = async () => {
	const home = await getHome();

	console.log(home.pageTitle);

	return (
		<div className='font-sans antialiased bg-primary text-gray-900'>
			<div className='bg-primary'>
				<section
					className='hero h-[75vh]'
					style={{ backgroundImage: `url(${welcomeImageUrl})` }}
				/>
				<h1>Content lives here: {home.pageTitle} </h1>
			</div>
		</div>
	);
};

export default HomePage;
