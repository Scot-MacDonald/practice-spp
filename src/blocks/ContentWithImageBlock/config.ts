import type { Block, Field } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'full',
    options: [
      { label: 'One Third', value: 'oneThird' },
      { label: 'Half', value: 'half' },
      { label: 'Two Thirds', value: 'twoThirds' },
      { label: 'Full', value: 'full' },
    ],
  },
  {
    name: 'richText',
    type: 'richText',
    localized: true,
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ],
    }),
    label: false,
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
  {
    name: 'useCarousel',
    type: 'checkbox',
    label: 'Use Carousel instead of Image',
    defaultValue: false,
  },
  {
    name: 'carouselSlides',
    type: 'array',
    label: 'Carousel Slides',
    fields: [
      {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'caption',
        type: 'text',
        required: false,
      },
    ],
    admin: {
      condition: (_, { useCarousel }) => useCarousel === true,
    },
  },
  {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    admin: {
      description: 'Optional image to display in this column',
      condition: (_, { useCarousel }) => useCarousel === false,
    },
    required: false,
  },
]

export const ContentWithImage: Block = {
  slug: 'contentWithImage',
  interfaceName: 'ContentWithImageBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
      admin: {
        description: 'Optional heading to display above the content block',
      },
    },
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
