import { defineType, defineField } from 'sanity';

export const volunteer = defineType({
	name: 'volunteer',
	title: 'Volunteer Opportunities',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title',
			type: 'string',
			placeholder: 'ex. Sunday School Instructor',
			hidden: true,
		}),
		defineField({
			name: 'description',
			title: 'Short Description of Volunteer Opportunity',
			type: 'string',
			description: 'Add a 2-3 sentence summary of the volunteer opportunity',
			placeholder: 'Get All the Latest News and Events',
		}),
		defineField({
			name: 'body',
			title: 'Full Description',
			description:
				'This section allows for rich text editing with headings and images. Use this section to provide a full description of the various volunteer opportunities.',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }],
		}),
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
});
