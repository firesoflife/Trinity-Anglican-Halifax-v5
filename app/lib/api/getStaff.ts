import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getStaff(): Promise<Staff[]> {
	return client.fetch(
		groq`
      *[_type == "staff"]{
          ...,
          name,
          role,
          "imageUrl": image.asset->url,
          bio,
          email
        }
    `
	);
}
