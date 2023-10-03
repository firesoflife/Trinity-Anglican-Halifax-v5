import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getParishEvents(): Promise<ParishEvents> {
	return client.fetch(
		groq`*[_type == "parishEvents"]{ 
        pageTitle,
        slug,
        bannerImage {
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
            date,
            eventTime,
            recurrence {
                dayOfWeek,
                frequency
            }
        }
    }[0]`
	);
}
