import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Volunteer } from '@/typings';

// Fetch the singleton volunteer sponsorship opportunity
export async function getVolunteer(): Promise<Volunteer | null> {
	const result = await client.fetch(
		groq`*[_type == "volunteer"][0]{
      title,
      description,
      body[]{
        ...,
        _type == 'block' => {
          ...,
        },
        _type == 'image' => {
          "imageUrl": asset->url
        }
      },
    pageBannerImage {
        asset->{
            _id,
            url
        },
        crop,
        hotspot
        }   
      }`
	);
	return result || null;
}

getVolunteer().then((volunteerOpportunity) => {
	console.log(volunteerOpportunity);
});
