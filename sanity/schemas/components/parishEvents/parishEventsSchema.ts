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
			validation: (Rule) =>
				Rule.required().error('An event title is required.'),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				'Used to create a URL for this page. Click Generate to create a slug based on the title.',
			options: {
				source: 'eventTitle',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
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
			title: 'Primary Event Image or Feature Photo for Event List Page',
			type: 'image',
			description:
				'This image will be used on the event list page where all events are listed. Try to crop the photo to make it square.',
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
					validation: (Rule) =>
						Rule.custom((eventType) => {
							if (eventType === 'recurring' || eventType === 'one-off') {
								return true; // Valid eventType
							}
							return 'Event Type is required';
						}),
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
							validation: (Rule) =>
								Rule.required().error('A day of the week is required.'),
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
		defineField({
			name: 'pageBannerImage',
			title: 'Image for Dedicated Event Page',
			description:
				'This image will be used on the dedicated event page. It appears on the top of the page after navigating from the event list page. Use a landscape image for this.',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
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
