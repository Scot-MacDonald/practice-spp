import type { Block } from 'payload'

export const Carousel: Block = {
  slug: 'carousel',
  labels: {
    singular: 'Carousel',
    plural: 'Carousels',
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        // Optional caption field
        {
          name: 'caption',
          type: 'richText',
          required: false,
        },
      ],
    },
  ],
  interfaceName: 'CarouselBlock', // Optional: links to types
}
