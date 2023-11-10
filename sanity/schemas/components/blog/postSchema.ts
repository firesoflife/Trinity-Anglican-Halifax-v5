import { defineType, defineField, StringRule } from '@sanity/types';

export const post = defineType({
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description',
			description:
				'Describe your post or use the first 3 sentences of the content for a preview on the bloglist',
			validation: (Rule) =>
				Rule.required().max(27).warning('You have exceeded the maximum length'),
		}),
		defineField({
			name: 'author',
			type: 'reference',
			title: 'Author',
			to: [{ type: 'author' }],
		}),
		defineField({
			name: 'mainImage',
			type: 'image',
			title: 'Main Image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime',
			title: 'Published At',
		}),
		// {
		// 	name: 'categories',
		// 	type: 'array',
		// 	title: 'Categories',
		// 	of: [{ type: 'reference', to: { type: 'category' } }], // assuming category schema exists
		// },
		defineField({
			name: 'body',
			type: 'array',
			title: 'Body',
			of: [
				{
					type: 'block',
				},
			],
		}),
	],
});
