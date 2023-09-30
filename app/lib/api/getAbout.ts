import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getAbout(): Promise<About> {
	return client.fetch(
		groq`
      *[_type == "about"]{
        title,
        slug,
        description,
        primaryImage{
          asset->{
            _id,
            url
          }
        },
        smallImage{
          asset->{
            _id,
            url
          }
        },
        body
      }[0]
    `
	);
}
