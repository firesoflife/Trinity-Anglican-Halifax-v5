import { defineType, defineField } from '@sanity/types';

export const covenant = defineType({
	name: 'covenant',
	title: 'Covenant In Ministry',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title - Covenant In Ministry',
			type: 'string',
		}),
		defineField({
			name: 'covenantBannerImage',
			title: 'Covenant Banner Image',
			type: 'image',
			description: 'The banner image for the covenant page',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'bannerVerse',
			title:
				'Top Banner Image Quote - Enter a quote in the larger text box and quote attribution below',
			type: 'text',
			rows: 4,
			placeholder:
				'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
			description:
				'A short verse or quote that will be overlayed on the banner image (optional)',
		}),
		defineField({
			name: 'bannerVerseAttribution',
			title: 'Top Banner - Quote Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
		}),
		defineField({
			name: 'covenantFile',
			title: 'Covenant File',
			type: 'file',
			description: 'Upload the covenant file here in PDF format',
			options: {
				accept: '.pdf',
			},
		}),
	],
});
