import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getSermons(): Promise<Sermon[]> {
	return client.fetch(
		groq`
        *[_type == "sermon"]{
            ...,
            title,
            slug,
            audio,
            description,
            date,
            speaker->{
                name,
                },
        }`
	);
}
