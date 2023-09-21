import { defineType, defineField } from '@sanity/types'

// Currently Unpublished in Sanity - Sept 2023 - Commented out in deskStructure.js

export const card = defineType ({
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ),
    defineField(
      {
        name: 'header',
        title: 'Header',
        type: 'string',
        description: 'Give the link card a title'
      },
    ),
    defineField(
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        description: 'Add some information about the site or organization you are linking to',
        validation: (Rule) => Rule.required().max(260).warning('You have exceeded the maximum length of 60 character')
      }
    ),
    defineField(
      {
        name: 'url',
        title: 'Link URL',
        type: 'string',
        description: 'write the name or the link here. Usually starting with `https://`'
      }
    )
  ],
});