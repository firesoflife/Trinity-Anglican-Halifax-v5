import { client } from '@/sanity/lib/client';
import { FeatureGallery } from '@/typings';
import { groq } from 'next-sanity';

export async function getFeatureGalleries(): Promise<FeatureGallery[]> {
	return await client.fetch(groq`
    *[_type == "featureGallery"]{
      _id,
      title,
      description,
      "coverImageUrl": image.asset->url,
      "slug": slug.current,
      "imageIds": galleries[]->{
        _id,
        "imageUrl": image.asset->url
      }
    }
  `);
}
