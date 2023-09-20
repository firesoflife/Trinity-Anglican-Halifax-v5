import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getWorship(): Promise<Worship> {
	return client.fetch(
		groq`*[_type == "worship"]{
        pageTitle,
        slug,
        featureVerse,
        mainContent,
        item1,
        item1Content,
        item2,
        item2Content,
        item3,
        item3Content,
        mainImage{
        asset->{
            url
        }
        }
      }[0]`
	);
}
