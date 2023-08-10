import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import 'app/globals.css';
import { fallbackImages } from './site/utilities/fallbackAssets';
import { getHome } from './lib/api/getHome';
import QuickLinksLayout from './site/components/QuickLinksLayout';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const HomePage = async () => {
	const home = await getHome();

	// Hero Image
	const welcomeImageUrl = home.welcomeImage
		? urlFor(home.welcomeImage).url()
		: fallbackImages.heroImageFallback;

	return (
		<div className='font-sans antialiased bg-primary text-gray-900'>
			<div className='bg-primary'>
				<section
					className='hero h-[75vh] '
					style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
					<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary'></div>
					<div className='hero-content text-center text-neutral-content'>
						<div className='max-w-md'>
							<div className='mb-96 text-5xl font-bold font-heading leading-snug'>
								{home.pageTitle}
							</div>
						</div>
					</div>
				</section>
				<section className='px-8 py-16 bg-secondary'>
					<h2 className='text-primary text-center text-4xl pb-4 font-subheading'>
						{home.welcomeHeading}
					</h2>
					<div className='max-w-4xl m-auto'>
						<p className='leading-8 text-xl text-primary text-center font-subContent'>
							{home.welcome}
						</p>
					</div>
				</section>
				<section>
					<QuickLinksLayout />
				</section>
			</div>
		</div>
	);
};

export default HomePage;
