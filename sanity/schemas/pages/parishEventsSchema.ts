// parishEventsSchema.ts
// TODO - Change deskStructure so Banner and general page content is in own studio pane in singleton form. Then event docs on on pane with multiple docs allowable. Need to change so title and slug are added to event. Currently have primary page title populated with test data. Also must reformat preview as current implementation does not render event title
import { IoCalendarOutline, IoRepeatOutline } from 'react-icons/io5';
import { defineType, defineField } from 'sanity';

export const parishEvents = defineType({
	name: 'parishEvents',
	title: 'Parish Events',
	type: 'document',
	groups: [{ name: 'banner', title: 'Banner' }],
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title',
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
			name: 'bannerImage',
			title: 'Top of Page -- Banner Image',
			type: 'image',
			description: 'This image appears at the top of the page.',
			options: {
				hotspot: true,
			},
			group: 'banner',
		}),
		defineField({
			name: 'bannerVerse',
			title: 'Enter a quote in the larger text box and quote attribution below',
			type: 'text',
			placeholder:
				'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
			description:
				'A short verse or quote that will be overlayed on the banner image (optional)',
			group: 'banner',
		}),
		defineField({
			name: 'bannerVerseAttribution',
			title: 'Attribution',
			type: 'string',
			placeholder: 'Galatians 6:14',
			description: 'Enter the quote attribution here',
			group: 'banner',
		}),
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
					],
				},
			],
		},
	],

	preview: {
		select: {
			title: 'pageTitle',
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
