import { defineType, defineField } from '@sanity/types';

export const gallery = defineType({
	name: 'gallery',
	title: 'Facility Image Gallery',
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
			name: 'galleryImages',
			title: 'Gallery Images',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'image' } }],
		}),
	],
});
