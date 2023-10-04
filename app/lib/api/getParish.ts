import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getParish(): Promise<Parish> {
	return client.fetch(
		groq`*[_type == "generalParishLayout"]{ 
        pageTitle,
        slug,
        bannerImage {
            asset->{
                _id,
                url
            },
            crop,
            hotspot
        },
        bannerVerse,
        bannerVerseAttribution
    }[1]`
	);
}
