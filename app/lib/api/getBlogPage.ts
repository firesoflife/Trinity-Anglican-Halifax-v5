import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getBlogPage(): Promise<Blog> {
	return client.fetch(
		groq`
      *[_type == "blog"]{
          ...,
          title,
          slug,
          bannerImage{
            asset->{
                _id,
                url
                },
                crop,
                hotspot
          },
          body,
          publishedAt
        }[0]
    `
	);
}
