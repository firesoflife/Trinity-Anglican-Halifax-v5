import { defineType, defineField, StringRule } from '@sanity/types';

export const galleryImage = defineType({
	name: 'galleryImage',
	title: 'Gallery Image',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title for the Image',
			type: 'string',
			placeholder: 'Facility Image Gallery',
		}),
		defineField({
			name: 'Description',
			title: 'Description for the Image',
			type: 'text',
			validation: (Rule: StringRule) =>
				Rule.max(40).error(
					'You have exceeded the maximum length or field is empty'
				),
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
