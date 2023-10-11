import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getFacility(): Promise<FacilityRental> {
	return client.fetch(
		groq`
      *[_type == "facilityRental"]{
          ...,
          title,
          name,
          description,
          location,
          capacity,
          price,
          "imageUrl": image.asset->url,
          "fileUrl": file.asset->url
        }
    `
	);
}
