import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { getAbout } from '@/app/lib/api/getAbout';
import { PortableText } from '@portabletext/react';
import { fallbackImages } from '../utilities/fallbackAssets';
import { RichTextComponents } from '../utilities/RichTextComponents';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const aboutPage = async () => {
	const about = await getAbout();

	// Banner Image
	const aboutBannerUrl = about.primaryImage
		? urlFor(about.primaryImage).url()
		: fallbackImages.about.primaryImageFallback;

	console.log(about);

	return (
		<div>
			<section
				className='hero h-[44vh] '
				style={{
					backgroundImage: `url(${aboutBannerUrl})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<div className='mb-96 text-5xl font-bold font-heading leading-snug'>
							{about.primaryImage}
						</div>
					</div>
				</div>
			</section>
			<section className='bg-[#f1f1f1] py-12 px-4 md:px-40'>
				<h2 className='text-center text-4xl mb-8 text-secondary font-subheading'>
					{about.title}
				</h2>
				<div className='text-secondary prose max-w-none lg:columns-2 gap-20 indent-4 px-4 md:px-0 font-subContent'>
					<PortableText value={about.body} components={RichTextComponents} />
				</div>
			</section>
		</div>
	);
};

export default aboutPage;
