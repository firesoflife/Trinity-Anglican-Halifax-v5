import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getParishEvents() {
	return client.fetch(
		groq`*[_type == "parishEvents"]{
      title,
      slug,
      description,
      image {
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
    }`
	);
}
