import { defineType, defineField } from 'sanity';

export const pastoralCare = defineType({
	name: 'pastoralCare',
	title: 'Pastoral Care',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
		defineField({
			name: 'imageAlt',
			title: 'Image Alt',
			type: 'string',
		}),
		defineField({
			name: 'buttonText',
			title: 'Button Text',
			type: 'string',
			placeholder: 'Inquire',
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
});
