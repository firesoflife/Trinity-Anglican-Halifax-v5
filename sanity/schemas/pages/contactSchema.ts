import { defineType, defineField } from "sanity";

export const contactUs = defineType({
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',

  fields: [
    defineField({
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
    defineField({
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [

        {
          type: 'object',
          title: 'test',
          fields: [
            defineField(
              {
                name: 'day',
                title: 'Day',
                type: 'string',
                options: {
                  list: [
                    { title: 'Monday', value: 'monday' },
                    { title: 'Tuesday', value: 'tuesday' },
                    { title: 'Wednesday', value: 'wednesday' },
                    { title: 'Thursday', value: 'thursday' },
                    { title: 'Friday', value: 'friday' },
                    { title: 'Saturday', value: 'saturday' },
                    { title: 'Sunday', value: 'sunday' },
                  ],
                  layout: 'radio',
                },
                validation: (Rule) => Rule.required(),
              }),
            defineField(
              {
                name: 'from',
                title: 'From',
                type: 'string',
                validation: (Rule) =>
                  Rule.required().regex(
                    /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                    "Please enter a valid time in 24-hour format (e.g., 09:00 or 17:30)"
                  ),
              }),
            defineField(
              {
                name: 'to',
                title: 'To',
                type: 'string',
                validation: (Rule) =>
                  Rule.required().regex(
                    /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                    "Please enter a valid time in 24-hour format (e.g., 09:00 or 17:30)"
                  ),
              }),
          ],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'The email address for the general church contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'The phone number for the general church contact',

    })
  ],
});