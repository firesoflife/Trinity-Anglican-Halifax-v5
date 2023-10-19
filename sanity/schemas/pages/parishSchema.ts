// generalPageLayoutSchema.ts
import { defineType, defineField } from 'sanity';

export const generalParishLayout = defineType({
	name: 'generalParishLayout',
	title: 'General Page Layout',
	type: 'document',
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title',
			type: 'string',
		}),

		defineField({
			name: 'bannerImage',
			title: 'Top of Page -- Banner Image',
			type: 'image',
			description: 'This image appears at the top of the page.',
			options: {
				hotspot: true,
			},
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
		}),
		defineField({
			name: 'bannerVerseAttribution',
			title: 'Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
		}),
	],
});
