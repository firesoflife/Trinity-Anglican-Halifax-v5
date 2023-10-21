import { defineField, defineType } from '@sanity/types';

export const worship = defineType({
	name: 'worship',
	title: 'Worship Page',
	type: 'document',
	groups: [
		{ name: 'banner', title: 'Banner' },
		{ name: 'expect', title: 'What to Expect' },
		{ name: 'schedule', title: 'Schedule' },
		{ name: 'items', title: 'Dropdown Items' },
	],
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title',
			type: 'string',
			group: 'banner',
		}),
		defineField({
			name: 'bannerImage',
			title: 'Top of Page - Banner Image',
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
			rows: 4,
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
			name: 'expectVerse',
			title: 'Enter a verse for the "What to Expect" section',
			type: 'text',
			rows: 4,
			placeholder:
				'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
			description:
				'A short verse or quote that will apper in the "What to Expect" block section',
			group: 'expect',
		}),
		defineField({
			name: 'expectVerseAttribution',
			title: 'Attribution',
			type: 'string',
			description: 'Enter the quote or verse attribution here',
			group: 'expect',
		}),
		defineField({
			name: 'mainContent',
			type: 'text',
			title: 'What to Expect - Text Block Content',
			placeholder: 'What to Expect',
			description:
				'This block will appear in the first section of the page. Write a short paragraph here.',
			group: 'expect',
		}),
		defineField({
			name: 'expectImage',
			title: 'What To Expect Section Image - First white Block',
			type: 'image',
			description:
				'This image appears to the left of the content block with the dropdown FAQ style menu',
			options: {
				hotspot: true,
			},
			group: 'expect',
		}),
		defineField({
			name: 'item1',
			type: 'string',
			title: 'Item 1 of Accordian Style Dropdown Menu',
			placeholder: 'Our Vision',
			group: 'items',
		}),
		defineField({
			name: 'item1Content',
			type: 'text',
			title: 'Item 1 Content',
			placeholder: 'Add paragraph (1-3 sentences) visions statement here',
			group: 'items',
		}),
		defineField({
			name: 'item2',
			type: 'string',
			title: 'Item 2 of Accordian Style Dropdown Menu',
			placeholder: 'Our Mission',
			group: 'items',
		}),
		defineField({
			name: 'item2Content',
			type: 'text',
			title: 'Item 2 Content',
			placeholder: 'Add paragraph (1-3 sentences) visions statement here',
			group: 'items',
		}),
		defineField({
			name: 'item3',
			type: 'string',
			title: 'Item 3 of Accordian Style Dropdown Menu',
			placeholder: 'Our Values',
			group: 'items',
		}),
		defineField({
			name: 'item3Content',
			type: 'text',
			title: 'Item 3 Content',
			placeholder: 'Add paragraph (1-3 sentences) visions statement here',
			group: 'items',
		}),
		defineField({
			name: 'scheduleImage',
			title: 'Schedule block header image',
			type: 'image',
			description: 'This image appears above the schedule blocks ',
			options: {
				hotspot: true,
			},
			group: 'schedule',
		}),
		defineField({
			name: 'scheduleBannerVerse',
			title: 'Schedule Banner Verse',
			type: 'text',
			rows: 4,
			description:
				'A verse that overlays over top of the image above the two schedule block',
			group: 'schedule',
		}),
		defineField({
			name: 'scheduleBannerVerseAtt',
			title: 'Schedule Banner Verse Attribution',
			type: 'string',
			description: 'Enter the quote or verse attribution here',
			group: 'schedule',
		}),
		defineField({
			name: 'regularScheduleHeader',
			title: 'Regular Service Header Title',
			type: 'string',
			placeholder: 'Join us for our Regular Services',
			group: 'schedule',
			validation: (Rule) => Rule.min(10).max(80),
		}),
		defineField({
			name: 'specialScheduleHeader',
			title: 'Special Service Header Title',
			type: 'string',
			placeholder: 'Join us for our Special Services',
			group: 'schedule',
			validation: (Rule) => Rule.min(10).max(80),
		}),
	],
});
