import { defineType, defineField, StringRule } from '@sanity/types'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
        placeholder: 'Trinity Anglican Church',
        validation: (Rule: StringRule) => Rule.required().max(27).warning('You have exceeded the maximum length')
      }),
    defineField(
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'pageTitle',
          maxLength: 96,
        },
      }),
    defineField(
      {
        name: 'welcomeHeading',
        title: 'Welcome Heading',
        type: 'string',
        placeholder: 'Welcome to Trinity Anglican Church',
        validation: (Rule: StringRule) => Rule.max(80).warning('You have exceeded the maximum length')
      }
    ),
    defineField(
      {
        name: 'welcome',
        title: 'Welcome Message',
        type: 'text',
        placeholder:
          'ubi proles etiam contra votum nascitur, quamvis iam nata cogat se diligi. Recolo etiam, cum mihi theatrici carminis',
        validation: (Rule: StringRule) => Rule.max(500).warning('You have exceeded the maximum length')
      }),
    defineField(
      {
        name: 'welcomeImage',
        title: 'Welcome Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string',
          },
        ],
      }),
  ],
});
