import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { Sermon } from '@/typings';

export async function getSermons(): Promise<Sermon[]> {
	return client.fetch(
		groq`
        *[_type == "sermon"] | order(date desc){
            ...,
            title,
            slug,
            // audio,
            "audioUrl": audio.asset->url,
            description,
            date,
            speaker->{
                name,
                },
        }`
	);
}
