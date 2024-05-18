import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { ParishEvents } from '@/typings';

export async function getParishEvents(): Promise<ParishEvents[]> {
	return client.fetch(
		groq`*[_type == "parishEvents"]{ 
            ...,
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
            eventDetails {
                eventType,
                isMultiDay,
                date,
                startDate,
                endDate,
                recurrence {
                    dayOfWeek,
                    frequency,
                    timeOfDay,
                    weekOfMonth
                },
                showInNavigation
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
}
