// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';

// export async function getFeatureGalleries() {
// 	return await client.fetch(groq`
//     *[_type == "featureGallery"]{
//       _id,
//       title,
//       "coverImageUrl": coverImage.asset->url,
//       "firstImageUrl": images[0].asset->url  // Fallback if no coverImage
//     }
//   `);
// }

import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getFeatureGalleries() {
	return await client.fetch(groq`
    *[_type == "featureGallery"]{
      _id,
      title,
      "coverImageUrl": image.asset->url,
      "imageIds": galleries[]->{
        _id,
        "imageUrl": image.asset->url
      }
    }
  `);
}
