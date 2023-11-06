import { defineType, defineField } from '@sanity/types';

export const about = defineType({
	name: 'about',
	title: 'About Page',
	type: 'document',
	groups: [
		{ name: 'banner', title: 'Banner' },
		{ name: 'content', title: 'About Us Content' },
		{ name: 'middleBanner', title: 'Middle Banner' },
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			placeholder: 'About Us',
			validation: (Rule) => Rule.required(),
			group: 'banner',
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
			title:
				'Top Banner Image Quote - Enter a quote in the larger text box and quote attribution below',
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
			title: 'Top Banner - Quote Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
			group: 'banner',
		}),
		defineField({
			name: 'body',
			title: 'About Us Text Block Content',
			type: 'array',
			group: 'content',
			of: [{ type: 'block' }, { type: 'image' }],
		}),
		defineField({
			name: 'middleBannerImage',
			title: 'Middle of Page - Banner Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'middleBanner',
		}),
		defineField({
			name: 'middleBannerVerse',
			title:
				'Middle of Page Quote - Enter a quote in the larger text box and quote attribution below',
			type: 'text',
			rows: 4,
			placeholder:
				'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
			description:
				'A short verse or quote that will be overlayed on the banner image (optional)',
			group: 'middleBanner',
		}),
		defineField({
			name: 'middleBannerVerseAttribution',
			title: 'Middle of Page Quote - Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
			group: 'middleBanner',
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'primaryImage',
		},
	},
});
