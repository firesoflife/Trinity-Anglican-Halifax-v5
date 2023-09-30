// speaker.ts
import { MdPerson } from 'react-icons/md';
import { defineType, defineField } from 'sanity';

export const speaker = defineType({
	name: 'speaker',
	title: 'Speaker',
	type: 'document',
	icon: MdPerson,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
});
