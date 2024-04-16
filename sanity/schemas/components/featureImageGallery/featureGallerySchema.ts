import { defineType, defineField } from '@sanity/types';

export const featureGallery = defineType({
	name: 'featureGallery',
	title: 'Feature Gallery',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Feature Gallery Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.max(180)
					.warning('You have exceeded the maximum length of 180 characters'),
		}),
		defineField({
			name: 'image',
			title: 'Gallery Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'galleries',
			title: 'Images',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'featureGalleryImage' }] }],
		}),
	],
});
