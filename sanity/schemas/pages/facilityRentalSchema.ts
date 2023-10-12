import { defineType, defineField } from '@sanity/types';

export const rental = defineType({
	name: 'facilityRental',
	title: 'Facility Rental',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			placeholder: 'Facility Rental',
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description of Summary of Rental Options',
			type: 'text',
		}),
		defineField({
			name: 'capacity',
			title: 'Capacity',
			type: 'number',
		}),

		defineField({
			name: 'file',
			title: 'File or rental agreement form',
			type: 'file',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'location',
			media: 'image',
		},
	},
});
