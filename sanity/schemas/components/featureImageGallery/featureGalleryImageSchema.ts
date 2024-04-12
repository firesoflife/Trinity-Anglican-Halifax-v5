import { defineType, defineField } from '@sanity/types';

export const featureGalleryImage = defineType({
	name: 'featureGalleryImage',
	title: 'Feature Gallery Image',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title for the Image',
			type: 'string',
			placeholder: 'Feature Gallery Image',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
});
