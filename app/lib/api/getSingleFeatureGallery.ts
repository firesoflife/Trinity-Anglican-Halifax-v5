import { client } from '@/sanity/lib/client';
import { FeatureGallery } from '@/typings';
import { groq } from 'next-sanity';

export async function getSingleFeatureGallery(
	slug: string
): Promise<FeatureGallery> {
	console.log('Fetching gallery with slug:', slug);
	const query = groq`*[_type == "featureGallery" && slug.current == $slug][0]{
        _id,
        title,
        description,
        "coverImageUrl": image.asset->url,
        "imageIds": galleries[]->{
            _id,
            "imageUrl": image.asset->url
        }
    }`;
	const data = await client.fetch(query, { slug });
	// console.log('Fetched data:', data);
	return data;
}
