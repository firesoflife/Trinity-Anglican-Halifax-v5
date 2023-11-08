import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getFacility(): Promise<FacilityRental> {
	return client.fetch(
		groq`
      *[_type == "facilityRental"][0]{
          ...,
          title,
          subtitle,
          bannerImage{
            asset->{
                _id,
                url
                },
                crop,
                hotspot
          },
          bannerVerse,
          bannerVerseAttribution,
          description,
          location,
          capacity,
          "fileUrl": file.asset->url
        }
    `
	);
}
