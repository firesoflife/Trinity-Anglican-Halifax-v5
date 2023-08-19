import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import { getAbout } from '@/app/lib/api/getAbout';
import Image from 'next/image';

const builder = ImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

const aboutPage = async () => {
	const about = await getAbout();

	console.log(about);

	return (
		<div>
			<h1>{about.title} </h1>
			<h2>{about.description} </h2>
			{/* <h3>{about.body} </h3> */}
		</div>
	);
};

export default aboutPage;
