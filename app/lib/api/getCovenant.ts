import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getCovenant(): Promise<Covenant> {
	return client.fetch(
		groq`
      *[_id == "covenant"][0]{
        title,
        covenantBannerImage{
          asset->{
            _id,
            url
          },
          crop,
          hotspot
        },
        bannerVerse,
        bannerVerseAttribution,
        "covenantFileUrl": covenantFile.asset->url
      }
    `
	);
}
