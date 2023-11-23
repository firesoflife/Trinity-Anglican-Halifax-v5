import { defineType, defineField } from '@sanity/types';

export const galleryImage = defineType({
	name: 'galleryImage',
	title: 'Gallery Image',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			placeholder: 'Facility Image Gallery',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
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
