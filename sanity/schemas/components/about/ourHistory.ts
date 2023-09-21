

// Currenlty Unpublished - Sept 2023

import { defineType, defineField, defineArrayMember } from '@sanity/types';
import { MdOutlineChurch as icon } from 'react-icons/md';

export const ourHistory = defineType({
  name: 'ourHistory',
  title: 'Our History',
  type: 'document',
  icon,
  fields: [
    defineField(
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
    defineField(
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField(
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          defineArrayMember(
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
              ],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' },
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'URL',
                    fields: [
                      defineField(
                        {
                          title: 'URL',
                          name: 'href',
                          type: 'url',
                        }),
                    ],
                  },
                ],
              },
            }),
          defineField(
            {
              name: 'image',
              type: 'image',
              options: { hotspot: true },
            }),
        ],
      }),
  ],
});
