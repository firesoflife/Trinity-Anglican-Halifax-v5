import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getWorship() {
	return client.fetch(
		groq`*[_type == "worship"]{
        pageTitle,
        slug,
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
