import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { SocialMediaPlatform } from '@/typings';

export async function getSocialMediaPlatforms(): Promise<
	SocialMediaPlatform[]
> {
	return client.fetch(
		groq`
      *[_type == "socialMediaPlatform"]{
        platformName,
        platformUrl,
        icon{
          provider,
          name
        }
      }
    `
	);
}
