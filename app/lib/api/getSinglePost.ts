import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Post } from '@/typings';

export async function getSinglePost(slug: string): Promise<Post> {
	return client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        title,
        slug,
        author->,
        description,
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
        }`,
		{ slug }
	);
}
