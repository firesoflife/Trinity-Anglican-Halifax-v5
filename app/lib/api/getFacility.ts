import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getFacility(): Promise<FacilityRental> {
	return client.fetch(
		groq`
      *[_type == "facilityRental"][0]{
          ...,
          title,
          subtitle,
          "imageUrl": image.asset->url,
          description,
          location,
          capacity,
          "fileUrl": file.asset->url
        }
    `
	);
}
