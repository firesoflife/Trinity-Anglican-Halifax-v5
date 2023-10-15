// socialMediaPlatforms.ts
import { defineType, defineField } from 'sanity';
import { preview } from 'sanity-plugin-icon-picker';

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
			title: 'Icon',
			name: 'icon',
			type: 'iconPicker',
			options: {
				outputFormat: 'react',
				providers: ['fa', 'mdi', 'hi', 'fi', 'si'],
			},
		}),
	],

	preview: {
		select: {
			title: 'platformName',
			provider: 'icon.provider',
			name: 'icon.name',
		},
		prepare(icon) {
			// Define the options object based on your field definition
			const options = {
				outputFormat: 'react',
			};
			return {
				title: icon.title,
				subtitle: icon.name,
				media: preview({ ...icon, options }), // Pass the options object here
			};
		},
	},
});

export default socialMediaPlatform;
