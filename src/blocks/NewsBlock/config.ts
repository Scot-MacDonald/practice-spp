import type { Block } from 'payload'

export const NewsBlock: Block = {
  slug: 'news-block',
  labels: {
    singular: 'News Block',
    plural: 'News Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
}
