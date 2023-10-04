import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
// 	return builder.image(source);
// }

function urlFor(source: SanityImageSource | undefined) {
	if (!source) {
		return undefined;
	}
	return builder.image(source).url();
}

export default urlFor;
