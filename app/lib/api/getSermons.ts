import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getSermons(): Promise<Sermon[]> {
	return client.fetch(
		groq`
        *[_type == "sermon"]{
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
