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
			placeholder: 'Contact Us',
		}),

		defineField({
			name: 'name',
			title: 'Facility Name',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
		}),
		defineField({
			name: 'capacity',
			title: 'Capacity',
			type: 'number',
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
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
			name: 'file',
			title: 'File',
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
