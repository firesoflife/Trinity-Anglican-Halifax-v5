import { defineField, defineType } from '@sanity/types'

export const worship = defineType(
  {
    name: 'worship',
    title: 'Worship Page',
    type: 'document',
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
          name: 'content',
          type: 'array',
          title: 'What To Expect',
          of: [
            {
              type: 'block'
            }
          ]
        }
      ),
      defineField(
        {
          name: 'mainImage',
          title: 'Main Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      )
    ]
  })