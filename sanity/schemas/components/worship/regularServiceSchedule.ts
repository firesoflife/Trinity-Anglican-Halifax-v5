import { defineType } from 'sanity';

export const regularService = defineType({
	name: 'regularService',
	title: 'Regular Service',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'The title of the event',
			validation: (Rule) => Rule.required().min(10).max(80),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			description: 'A short description of the event',
			validation: (Rule) => Rule.max(80),
		},
		{
			name: 'startTime',
			title: 'Start Time',
			type: 'string',
			description: 'The start time of the event(e.g., 9:00 AM)',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'endTime',
			title: 'End Time',
			type: 'string',
			description: 'The end time of the event or service(e.g., 10:00 AM)',
		},
		{
			name: 'daysOfWeek',
			title: 'Days of the Week',
			type: 'array',
			description: 'The days of the week when this event or service occurs',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Sunday', value: 'sunday' },
					{ title: 'Monday', value: 'monday' },
					{ title: 'Tuesday', value: 'tuesday' },
					{ title: 'Wednesday', value: 'wednesday' },
					{ title: 'Thursday', value: 'thursday' },
					{ title: 'Friday', value: 'friday' },
					{ title: 'Saturday', value: 'saturday' },
				],
			},
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
			description: 'description',
			startTime: 'startTime',
			endTime: 'endTime',
			daysOfWeek: 'daysOfWeek',
		},
		prepare(selection) {
			const { title, description, startTime, endTime, daysOfWeek } = selection;
			return {
				title: `${title}`,
				subtitle: `${description} (${startTime} - ${endTime} on ${daysOfWeek.join(
					', '
				)})`,
			};
		},
	},
});
