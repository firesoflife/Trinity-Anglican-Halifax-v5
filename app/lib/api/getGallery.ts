import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getGallery(): Promise<Gallery[]> {
	return client.fetch(
		groq`*[_type == "galleryImage"]{
            title,
            description,
            "imageUrl": image.asset->url
        }`
	);
}
