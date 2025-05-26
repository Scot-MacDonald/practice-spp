import { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AccordionBlock: Block = {
  slug: 'accordion',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: false,
    },
    {
      name: 'subline',
      type: 'text',
      required: false,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'AccordionBlock', // Ensures TypeScript type generation
}
