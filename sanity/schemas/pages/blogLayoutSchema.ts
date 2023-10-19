import { defineType, defineField } from '@sanity/types';

export const blog = defineType({
	name: 'blog',
	title: 'Blog',
	type: 'document',
	groups: [{ name: 'banner', title: 'Banner' }],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			placeholder: 'About Us',
			validation: (Rule) => Rule.required(),
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
	],
	preview: {
		select: {
			title: 'title',
			media: 'primaryImage',
		},
	},
});
