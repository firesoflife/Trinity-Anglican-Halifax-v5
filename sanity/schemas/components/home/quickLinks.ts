export default {
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    {
      name: 'imageSrc',
      title: 'Image Source',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'CTA Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'CTA Link',
          type: 'url',
        },
      ],
    },
  ],
};