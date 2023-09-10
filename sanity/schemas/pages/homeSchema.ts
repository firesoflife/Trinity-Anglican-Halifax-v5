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
        validation: (Rule) => Rule.required().max(27).warning('You have exceeded the maximum length')
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
    validation: (Rule: StringRule) => Rule.required().max(80).error('You have exceeded the maximum length or field is empty'),
  }
),
    defineField(
      {
        name: 'welcome',
        title: 'Welcome Message',
        type: 'text',
        placeholder:
          'ubi proles etiam contra votum nascitur, quamvis iam nata cogat se diligi. Recolo etiam, cum mihi theatrici carminis',
        validation: (Rule: StringRule) => Rule.required().max(500).error('Either you haven not entered any content, or you have exceeded the maximum allowable length')
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
            description: 'alt text describes the image and is displayed or read to visually impaired visitors to the site. It is also useful in SEO'
          },
        ],
      }),
  ],
});
