// sermon.ts
import { MdMusicNote } from 'react-icons/md';
import { defineType, defineField } from '@sanity/types';

export const sermon = defineType({
	name: 'sermon',
	title: 'Sermon',
	type: 'document',
	icon: MdMusicNote,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'audio',
			title: 'Audio',
			type: 'file',
			options: {
				accept: 'audio/*',
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		}),
		defineField({
			name: 'speaker',
			title: 'Speaker',
			type: 'reference',
			to: [{ type: 'speaker' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			speaker: 'speaker.name',
		},
		prepare(selection: Record<string, any>) {
			const { title, speaker } = selection;
			return {
				title: title,
				subtitle: speaker,
			};
		},
	},
});
