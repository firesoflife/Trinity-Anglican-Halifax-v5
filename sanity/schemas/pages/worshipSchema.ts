import { defineField, defineType } from '@sanity/types'

export const worship = defineType(
  {
    name: 'worship',
    title: 'Worship Page',
    type: 'document',
    fieldsets: [
      {
        name: 'items',
        title: 'Dropdown "Accordian Style" items',
        options: { collapsible: true, collapsed: false },
      },
       {
        name: 'bannerVerseSet',
        title: 'Banner Image Verse',
        options: { collapsible: true, collapsed: false },
      },
      {
        name: 'expectVerseSet',
        title: 'What to Expect Verse',
        options: {collapsible: true, collapsed: false}
      },
      {
        name: 'scheduleVerseSet',
        title: 'Schedule Image Verse',
        options: { collapsible: true, collapsed: false}
      },
      {
        name: 'scheduleHeaders',
        title: 'Headers for Schedule Types. Special and Regular Services',
        options: { collapsible: true, collapsed: false }
      }
    ],
    fields: [
      defineField(
        {
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
      defineField(
        {
          name: 'bannerImage',
          title: 'Top of Page - Banner Image',
          type: 'image',
          description: 'This image appears at the top of the page. Use an image with some blank space on the top left where text will be positioned ',
          options: {
            hotspot: true,
          },
        },
      ),
       defineField(
        {
          name: 'bannerVerse',
          title: 'Enter a quote in the larger text box and quote attribution below',
          type: 'text',
          placeholder: 'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
          description: 'A short verse or quote that will be overlayed on the banner image (optional)',
          fieldset: 'bannerVerseSet'
        }
      ),
      defineField(
        {
          name: 'bannerVerseAttribution',
          title: 'Attribution',
          type: 'string',
          placeholder: 'Galatians 6:14',
          description: 'Enter the quote attribution here',
          fieldset: 'bannerVerseSet'
        }
      ),
      defineField(
        {
          name: 'expectVerse',
          title: 'Enter a verse for the "What to Expect" section',
          type: 'text',
          placeholder: 'But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."',
          description: 'A short verse or quote that will apper in the "What to Expect" block section',
          fieldset: 'expectVerseSet'
        }
      ),
      defineField(
        {
          name: 'expectVerseAttribution',
          title: 'Attribution',
          type: 'string',
          description: 'Enter the quote or verse attribution here',
          fieldset: 'expectVerseSet'
        }
      ),
       defineField(
        {
          name: 'mainContent',
          type: 'text',
          title: 'What to Expect - Text Block Content',
          placeholder: 'What to Expect',
          description: 'This block will appear in the first section of the page. Write a short paragraph here.'
        }
      ),
      defineField(
        {
          name: 'expectImage',
          title: 'What To Expect Section Image - First white Block',
          type: 'image',
          description: 'This image appears to the left of the content block with the dropdown FAQ style menu',
          options: {
            hotspot: true,
          },
        },
      ),
      defineField(
        {
          name: 'item1',
          type: 'string',
          title: 'Item 1 of Accordian Style Dropdown Menu',
          placeholder: 'Our Vision',
          fieldset: 'items',
        }
      ),
      defineField(
        {
          name: 'item1Content',
          type: 'text',
          title: 'Item 1 Content',
          placeholder: 'Add paragraph (1-3 sentences) visions statement here',
          fieldset: 'items',
        }
      ),
      defineField(
        {
          name: 'item2',
          type: 'string',
          title: 'Item 2 of Accordian Style Dropdown Menu',
          placeholder: 'Our Mission',
          fieldset: 'items',
        }
      ),
      defineField(
        {
          name: 'item2Content',
          type: 'text',
          title: 'Item 2 Content',
          placeholder: 'Add paragraph (1-3 sentences) visions statement here',
          fieldset: 'items',
        }
      ),
       defineField(
        {
          name: 'item3',
          type: 'string',
          title: 'Item 3 of Accordian Style Dropdown Menu',
          placeholder: 'Our Values',
          fieldset: 'items',
        }
       ),
       defineField(
        {
          name: 'item3Content',
          type: 'text',
          title: 'Item 3 Content',
          placeholder: 'Add paragraph (1-3 sentences) visions statement here',
          fieldset: 'items',
        }
      ),
      defineField(
        {
          name: 'scheduleImage',
          title: 'Schedule block header image',
          type: 'image',
          description: 'This image appears above the schedule blocks ',
          options: {
            hotspot: true,
          },
        },
      ),
      defineField(
        {
          name: 'scheduleBannerVerse',
          title: 'Schedule Banner Verse',
          type: 'text',
          description: 'A verse that overlays over top of the image above the two schedule block',
          fieldset: 'scheduleVerseSet'
        }
      ),
      defineField(
        {
          name: 'scheduleBannerVerseAtt',
          title: 'Schedule Banner Verse Attribution',
          type: 'string',
          description: 'Enter the quote or verse attribution here',
          fieldset: 'scheduleVerseSet'
        }
      ),
      defineField(
        {
          name: 'regularScheduleHeader',
          title: 'Regular Service Header Title',
          type: 'string',
          placeholder: 'Join us for our Regular Services',
          fieldset: 'scheduleHeaders',
          validation: (Rule) => Rule.min(10).max(80)
        },
      ),
      defineField(
        {
          name: 'specialScheduleHeader',
          title: 'Speacial Service Header Title',
          type: 'string',
          placeholder: 'Join us for our Regular Services',
          fieldset: 'scheduleHeaders',
          validation: (Rule) => Rule.min(10).max(80)
        },
      )
    ]
  })