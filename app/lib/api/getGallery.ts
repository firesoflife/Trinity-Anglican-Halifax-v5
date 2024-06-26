import { client } from '@/sanity/lib/client';
import { Gallery, GalleryDetails } from '@/typings';
import { groq } from 'next-sanity';

// Fetch for Facility Gallery (not Feature Galley)

export async function getGallery(): Promise<Gallery[]> {
	return client.fetch(
		groq`*[_type == "galleryImage"]{
            title,
            description,
            "imageUrl": image.asset->url
        }`
	);
}

export async function getGalleryDescription(): Promise<GalleryDetails> {
	return client.fetch(
		groq`*[_type == "gallery"][0]{
            title,
            description
        }`
	);
}
