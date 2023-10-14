export const post = {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'author',
			type: 'reference',
			title: 'Author',
			to: [{ type: 'author' }],
		},
		{
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
		},
		{
			name: 'publishedAt',
			type: 'datetime',
			title: 'Published At',
		},
		// {
		// 	name: 'categories',
		// 	type: 'array',
		// 	title: 'Categories',
		// 	of: [{ type: 'reference', to: { type: 'category' } }], // assuming category schema exists
		// },
		{
			name: 'body',
			type: 'array',
			title: 'Body',
			of: [
				{
					type: 'block',
				},
			],
		},
		// ... other fields like _createdAt, _updatedAt if necessary
	],
};
