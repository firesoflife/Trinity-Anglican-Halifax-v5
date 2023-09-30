import { defineField, defineType } from '@sanity/types';

// staff.ts

import { IoPeopleCircleOutline as icon } from 'react-icons/io5';

export const staff = defineType({
	name: 'staff',
	title: 'Staff',
	type: 'document',
	icon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'position',
			title: 'Position',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
			options: {
				list: [
					{ title: 'Rector', value: 'rector' },
					{ title: 'Clergy', value: 'clergy' },
					{ title: 'General Staff', value: 'general' },
					{ title: 'Warden', value: 'warden' },
				],
				layout: 'dropdown',
			},
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			hidden: ({ parent }: { parent: { role: string } }) => {
				return parent.role !== 'warden';
			},
			validation: (Rule: any) =>
				Rule.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
					name: 'email', // Error message is "Does not match email-pattern"
					invert: false, // Boolean to allow any value that does NOT match pattern
				}).warning('Please enter a valid email address'),
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'position',
			description: 'role',
			media: 'image',
		},
	},
});
