// socialMediaPlatforms.ts
import { defineType, defineField } from 'sanity';

export const socialMediaPlatform = defineType({
	name: 'socialMediaPlatform',
	title: 'Social Media Platform',
	type: 'document',
	fields: [
		defineField({
			name: 'platformName',
			title: 'Platform Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'platformUrl',
			title: 'Platform URL',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'platformIcon',
			title: 'Platform Icon',
			type: 'image',
			options: {
				hotspot: true,
			},

			fields: [
				defineField({
					name: 'platformIconAlt',
					type: 'string',
					title: 'Alternative Text',
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'platformName',
			media: 'platformIcon',
		},
	},
});

export default socialMediaPlatform;
