import { defineType, defineField } from 'sanity';

export const contactUs = defineType({
	name: 'contactUs',
	title: 'Contact Us',
	type: 'document',

	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title - Contact Us',
			type: 'string',
		}),
		defineField({
			name: 'hoursTitle',
			title: 'Hours of Availability Title',
			type: 'string',
			placeholder: 'Office Hours',
		}),
		defineField({
			name: 'contactBannerImage',
			title: 'Contact Page Banner Image',
			type: 'image',
			description: 'The banner image for the contact page',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'formHeading',
			title: 'Form Title',
			type: 'string',
			placeholder: 'Send a General Message or Request for Pastoral Care',
			description: 'The title for the form on the contact page',
		}),
		defineField({
			name: 'formSubheading',
			title: 'Form Subheading',
			type: 'string',
			placeholder: 'We will respond to your message as soon as possible.',
			description: 'The subheading for the form on the contact page',
		}),
		defineField({
			name: 'days',
			title: 'Office Hours or Days of Availability',
			type: 'array',
			of: [
				{
					type: 'object',
					title: 'Day of Week',
					fields: [
						defineField({
							name: 'day',
							title: 'Day',
							type: 'string',
							options: {
								list: [
									{ title: 'Monday', value: 'monday' },
									{ title: 'Tuesday', value: 'tuesday' },
									{ title: 'Wednesday', value: 'wednesday' },
									{ title: 'Thursday', value: 'thursday' },
									{ title: 'Friday', value: 'friday' },
									{ title: 'Saturday', value: 'saturday' },
									{ title: 'Sunday', value: 'sunday' },
								],
								layout: 'radio',
							},
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'from',
							title: 'From',
							type: 'string',
							validation: (Rule) =>
								Rule.required().regex(
									/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
									'Please enter a valid time in 24-hour format (e.g., 09:00 or 17:30)'
								),
						}),
						defineField({
							name: 'to',
							title: 'To',
							type: 'string',
							validation: (Rule) =>
								Rule.required().regex(
									/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
									'Please enter a valid time in 24-hour format (e.g., 09:00 or 17:30)'
								),
						}),
					],
				},
			],
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			description: 'The email address for the general church contact',
		}),
		defineField({
			name: 'phone',
			title: 'Phone',
			type: 'string',
			description: 'The phone number for the general church contact',
		}),
	],
	preview: {
		select: {
			title: 'pageTitle',
			subtitle: 'slug.current',
		},
	},
});
