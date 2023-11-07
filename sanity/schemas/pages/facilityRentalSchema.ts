import { defineType, defineField } from '@sanity/types';

export const rental = defineType({
	name: 'facilityRental',
	title: 'Facility Rental',
	type: 'document',
	groups: [
		{ name: 'banner', title: 'Banner' },
		{ name: 'content', title: 'Page Content' },
	],
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
			name: 'bannerImage',
			title: 'Top of Page - Banner Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'banner',
		}),
		defineField({
			name: 'bannerVerse',
			title: 'Enter a quote in the larger text box and quote attribution below',
			type: 'text',
			rows: 4,
			placeholder:
				'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
			description:
				'A short verse or quote that will be overlayed on the banner image (optional)',
			group: 'banner',
		}),
		defineField({
			name: 'bannerVerseAttribution',
			title: 'Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
			group: 'banner',
		}),
		defineField({
			name: 'description',
			title: 'Description of Summary of Rental Options',
			type: 'text',
			rows: 7,
			group: 'content',
		}),
		defineField({
			name: 'capacity',
			title: 'Capacity',
			type: 'number',
			group: 'content',
		}),

		defineField({
			name: 'file',
			title: 'File or rental agreement form',
			type: 'file',
			group: 'content',
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
