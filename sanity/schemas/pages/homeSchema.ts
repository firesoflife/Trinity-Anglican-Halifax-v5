import { defineType, defineField, StringRule } from '@sanity/types';

declare module '@sanity/types' {
	interface FieldDefinitionBase {
		inputComponent?: React.ComponentType<any>;
	}
}

export const home = defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	groups: [
		{ name: 'metadata', title: 'Site Metadata' },
		{ name: 'navbar', title: 'Navigation Items' },
		{ name: 'banner', title: 'Main Banner' },
		{ name: 'welcome', title: 'Welcome Message Section' },
		{ name: 'quickLinks', title: 'Quick Links' },
	],
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Website Title',
			type: 'string',
			description:
				'Not Displayed on the Page - A title for the Church website is a required field. Recommended to use name you want to show on search engines',
			placeholder: 'Trinity Anglican Church',
			validation: (Rule) =>
				Rule.required().max(27).warning('You have exceeded the maximum length'),
			group: 'metadata',
		}),

		//////////////// NOT SET IN NEXT JS ///////////////////////
		// defineField({
		// 	name: 'logo',
		// 	title: 'Logo',
		// 	type: 'image',
		// 	fields: [
		// 		{
		// 			name: 'alt',
		// 			title: 'Alt Text',
		// 			type: 'string',
		// 			description:
		// 				'alt text describes the image and is displayed or read to visually impaired visitors to the site. It is also useful in SEO',
		// 			placeholder: 'Trinity Aglican Church Logo',
		// 		},
		// 	],
		// }),
		defineField({
			name: 'navbarTitle',
			title: 'Menu Bar Title',
			type: 'string',
			description:
				'Appears on the home page navigation beside the logo. Leave blank if you want no text showing',
			initialValue: 'Trinity Anglican Church',
			group: 'navbar',
		}),
		defineField({
			name: 'bannerTitle',
			title: 'Banner Title',
			type: 'string',
			description:
				'Appears on the home page overlayed on the main Image. Leave blank if you want no text showing',
			group: 'banner',
			validation: (Rule: StringRule) =>
				Rule.max(45).warning('You have exceeded the maximum length'),
		}),
		defineField({
			name: 'bannerSubtitle',
			title: 'Banner Subtitle',
			type: 'string',
			description:
				'Appears on the home page overlayed on the main Image beneath the Title. Leave blank if you want no text showing',
			group: 'banner',
			validation: (Rule: StringRule) =>
				Rule.max(256).warning('You have exceeded the maximum length'),
		}),
		defineField({
			name: 'welcomeHeading',
			title: 'Welcome Message Heading',
			type: 'string',
			placeholder: 'Welcome to Trinity Anglican Church',
			description:
				'Shows below the main image. Title for a brief welcome message to welcome visitors to the website',
			validation: (Rule: StringRule) =>
				Rule.required()
					.max(80)
					.error('You have exceeded the maximum length or field is empty'),
			group: 'welcome',
		}),
		defineField({
			name: 'welcome',
			title: 'Welcome Message Text',
			type: 'text',
			placeholder:
				'"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God." Romans 12:2',
			description:
				'Brief welcome message to the visitors to the website. A few breif sentences. Text must not exceed 500 characters.',
			validation: (Rule: StringRule) =>
				Rule.required()
					.max(500)
					.error(
						'Either you haven not entered any content, or you have exceeded the maximum allowable length'
					),
			group: 'welcome',
		}),
		defineField({
			name: 'welcomeImage',
			title: 'Main Banner Image',
			type: 'image',
			options: { hotspot: true },
			group: 'banner',
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
					description:
						'alt text describes the image and is displayed or read to visually impaired visitors to the site. It is also useful in SEO',
				},
			],
		}),
		defineField({
			name: 'pastoralCare',
			title: 'Pastoral Care Description',
			type: 'string',
			description:
				'This text is rendered in the quicklinks cards. This one is specific to the "Get Patoral Care" card.',
			group: 'quickLinks',
		}),
	],
	preview: {
		select: {
			title: 'pageTitle',
			media: 'logo',
		},
	},
});
