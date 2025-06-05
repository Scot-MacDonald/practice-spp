import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { Doctor } from '../../blocks/DoctorBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { ContentWithImage } from '@/blocks/ContentWithImageBlock/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { AccordionBlock } from '@/blocks/Accordion/config'
export { NewsBlock } from '@/blocks/NewsBlock/config'
import { Carousel } from '@/blocks/Carousel/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { NewsBlock } from '@/blocks/NewsBlock/config'

export const Pages: CollectionConfig = {
  slug: 'pages',

  labels: {
    singular: {
      en: 'Page',
      de: 'Seite',
    },
    plural: {
      en: 'Pages',
      de: 'Seiten',
    },
  },

  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          locale: locale.code,
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (data, { locale }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        locale,
      })

      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
    },
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: {
            en: 'Hero',
            de: 'Hero',
          },
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              localized: true,
              blocks: [
                CallToAction,
                Content,
                ContentWithImage,
                MediaBlock,
                Archive,
                Doctor,
                FormBlock,
                AccordionBlock,
                NewsBlock,
                Carousel,
              ],
              required: true,
              label: {
                en: 'Layout',
                de: 'Layout',
              },
            },
          ],
          label: {
            en: 'Content',
            de: 'Inhalt',
          },
        },
        {
          name: 'meta',
          label: {
            en: 'SEO',
            de: 'SEO',
          },
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
    },
    ...slugField('title', { slugOverrides: { localized: true } }),
  ],

  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },

  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
