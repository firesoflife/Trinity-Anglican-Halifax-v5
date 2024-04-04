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
			validation: (Rule: any) => Rule.required().warning('Please enter a name'),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				'Used to create a URL for this page. Click Generate to create a slug based on the title.',
			options: {
				source: 'name',
				maxLength: 96,
			},
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
			validation(rule) {
				return rule.required();
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
		defineField({
			name: 'order',
			title: 'Order',
			type: 'number',
			description:
				'Position of the staff member in the list. Lower nummbers appear first.',
			validation: (Rule: any) =>
				Rule.required().min(0).warning('Order must be a non-negative number.'),
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'order',
			order: 'order',
			description: 'order',
			media: 'image',
		},
		prepare(selection: any) {
			const { title, order, media } = selection;
			return {
				title,
				subtitle: `Will show in position: ${order}`,
				media,
			};
		},
	},
});
