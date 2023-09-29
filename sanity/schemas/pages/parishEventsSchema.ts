// // parishEventsSchema.ts

import { defineType, defineField } from 'sanity';

export const parishEvents = defineType({
	name: 'parishEvents',
	title: 'Parish Events',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
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
			name: 'description',
			title: 'Description',
			type: 'string',
			placeholder: 'Get All the Latest News and Events',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
		{
			name: 'eventDetails',
			title: 'Event Details',
			type: 'object',
			fields: [
				{
					name: 'eventType',
					title: 'Event Type',
					type: 'string',
					options: {
						list: ['recurring', 'one-off'],
						layout: 'radio',
						direction: 'horizontal',
					},
					validation: (Rule) => Rule.required(),
				},
				{
					name: 'date',
					title: 'Event Date',
					type: 'date',
					hidden: ({ parent }) => parent && parent.eventType === 'recurring',
				},
				{
					name: 'recurrence',
					title: 'Recurrence',
					type: 'object',
					hidden: ({ parent }) => parent && parent.eventType === 'one-off',
					fields: [
						{
							name: 'dayOfWeek',
							title: 'Day of the Week',
							type: 'string',
							options: {
								list: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday',
									'Sunday',
								],
							},
						},
						{
							name: 'frequency',
							title: 'Frequency',
							type: 'string',
							options: {
								list: ['Every week', 'Every 2 weeks', 'Every month'],
							},
						},
					],
				},
			],
		},
	],
});
