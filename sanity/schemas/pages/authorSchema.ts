export const author = {
	name: 'author',
	type: 'document',
	title: 'Author',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
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
			name: 'bio',
			type: 'array',
			title: 'Biography',
			of: [
				{
					type: 'block',
				},
			],
		},
		// ... other fields like _createdAt, _updatedAt if necessary
	],
};
