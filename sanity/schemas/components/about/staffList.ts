// staffList.js
import { defineType, defineField } from '@sanity/types';

export const staffList = defineType({
	name: 'staffList',
	title: 'Staff List',
	type: 'document',
	fields: [
		defineField({
			name: 'staffMembers',
			title: 'Staff Members',
			type: 'array',
			of: [{ type: 'staff' }],
		}),
	],
});
