import { defineType, defineField } from '@sanity/types';

export const gallery = defineType({
	name: 'gallery',
	title: 'Facility Image Gallery',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Gallery Title - Header',
			type: 'string',
			placeholder: 'Facility Image Gallery',
		}),
		defineField({
			name: 'description',
			title: 'Give the gallery a description',
			type: 'text',
		}),
		defineField({
			name: 'galleryImages',
			title: 'Gallery Images',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'galleryImage' } }],
		}),
	],
});
