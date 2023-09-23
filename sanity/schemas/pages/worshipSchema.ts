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
          name: 'mainContent',
          type: 'text',
          title: 'What to Expect',
          placeholder: 'What to Expect',
          description: 'This block will appear in the first section of the page. Write a short paragraph here.'
        }
      ),
      defineField(
        {
          name: 'Image',
          title: 'First Block Image',
          type: 'image',
          description: 'appears to the left of the content block ',
          options: {
            hotspot: true,
          },
        },
      ),
      defineField(
        {
          name: 'item1',
          type: 'string',
          title: 'Item 1',
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
          title: 'Item 2',
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
          title: 'Item 3',
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
    ]
  })