import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getContact(): Promise<ContactUs> {
	return client.fetch(
		groq`
      *[_type == "contactUs"][0]{
          pageTitle,
          hoursTitle,
          formHeading,
          formSubheading,
          "days": days[]{
            day,
            from,
            to
          },
          email,
          phone
        }
    `
	);
}
