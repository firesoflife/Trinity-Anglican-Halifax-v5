import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getSingleParishEvent(
	slug: string
): Promise<ParishEvents> {
	return client.fetch(
		groq`*[_type == "parishEvents" && slug.current == $slug][0]{

            
        eventTitle,
        slug,
        description,
        body[]{
            ...,
            asset->{
                _id,
                url
            }
        },
        primaryImage {
            asset->{
                _id,
                url
            },
            crop,
            hotspot
        },
        pageBannerImage {
            asset->{
                _id,
                url
            },
            crop,
            hotspot
        },
        eventDetails {
            eventType,
            date,
            recurrence {
                dayOfWeek,
                frequency,
                timeOfDay
            }
        },
    }`,
		{ slug }
	);
}
