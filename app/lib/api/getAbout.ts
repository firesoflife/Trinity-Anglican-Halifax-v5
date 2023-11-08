import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getAbout(): Promise<About> {
	return client.fetch(
		groq`
      *[_type == "about"][1]{
        title,
        slug,
        description,
        primaryImage{
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        bannerVerse,
        bannerVerseAttribution,
        middleBannerImage{
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        middleBannerVerse,
        middleBannerVerseAttribution,
        body
      }
    `
	);
}
