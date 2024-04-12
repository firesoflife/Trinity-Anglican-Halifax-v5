import { defineType, defineField } from '@sanity/types';

export const galleryHome = defineType({
	name: 'featureGalleryHome',
	title: 'Gallery',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Gallery Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Gallery Description',
			type: 'text',
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
				},
			],
		}),
	],
});
