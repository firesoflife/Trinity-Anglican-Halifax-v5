import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getSingleParishEvent(
	slug: string
): Promise<ParishEvents> {
	return client.fetch(
		// [0] ARRAY WORKS FOR DYNAMIC PAGEE CONTENT BUT WRONG DATA FOR CALENDAR SINGLE EVENTS
		groq`*[_type == "parishEvents" && slug.current == $slug]{

            
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

export async function getSingleParishEventPage(
	slug: string
): Promise<ParishEvents> {
	return client.fetch(
		// [0] ARRAY WORKS FOR DYNAMIC PAGEE CONTENT BUT WRONG DATA FOR CALENDAR SINGLE EVENTS
		// groq`*[_type == "parishEvents" && slug.current == $slug]{
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
