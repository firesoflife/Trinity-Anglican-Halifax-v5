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