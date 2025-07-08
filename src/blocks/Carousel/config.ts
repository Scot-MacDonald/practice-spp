export const CarouselBlock: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
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
        {
          name: 'caption',
          type: 'richText',
          required: false,
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
}
