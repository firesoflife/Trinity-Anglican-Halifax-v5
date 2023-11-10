import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getPosts(): Promise<Post[]> {
	return client.fetch(
		groq`
        *[_type == "post"]{
            ...,
            title,
            slug,
            author->,
            mainImage{
                asset->{
                    _id,
                    url
                    },
                    crop,
                    hotspot
                },
            body,
            publishedAt
          } | order(publishedAt desc)
        `
	);
}
