// parishEventsSchema.ts
import { IoCalendarOutline, IoRepeatOutline } from 'react-icons/io5';
import { defineType, defineField } from 'sanity';

export const parishEvents = defineType({
	name: 'parishEvents',
	title: 'Parish Events',
	type: 'document',
	fields: [
		defineField({
			name: 'eventTitle',
			title: 'Name of the Event',
			type: 'string',
			placeholder: 'ex. Sunday School',
		}),
		defineField({
			name: 'description',
			title: 'Short Description of Event',
			type: 'string',
			description: 'Add a 2-3 sentence summary of the event',
			placeholder: 'Get All the Latest News and Events',
		}),
		defineField({
			name: 'body',
			title: 'Full Description',
			description:
				'Provide a full description of the event. This block can be styles with headings and images can be added.',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }],
		}),
		defineField({
			name: 'primaryImage',
			title: 'Primary Event Image or Feature Photo',
			type: 'image',
			options: {
				hotspot: true,
			},
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
						{
							name: 'timeOfDay',
							title: 'Time of Day',
							type: 'string',
						},
					],
				},
			],
		},
	],

	preview: {
		select: {
			title: 'eventTitle',
			eventType: 'eventDetails.eventType',
		},
		prepare(selection) {
			const { title, eventType } = selection;
			return {
				title: title,
				subtitle:
					eventType === 'recurring' ? 'Recurring Event' : 'One-off Event',
				media: eventType === 'recurring' ? IoRepeatOutline : IoCalendarOutline,
			};
		},
	},
});
