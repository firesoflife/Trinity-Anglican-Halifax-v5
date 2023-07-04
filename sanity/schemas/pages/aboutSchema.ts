import { defineType, defineField } from '@sanity/types'

export const about = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        placeholder: 'About Us',
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
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
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: 'primaryImage',
        title: 'Priamary Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField(
      {
        name: 'smallImage',
        title: 'Small Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField(
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }, { type: 'image' }],
      }),
  ],
})