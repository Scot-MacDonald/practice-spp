import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { ContentWithImageBlock } from '@/blocks/ContentWithImageBlock/Component' // <-- import new block
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TypedLocale } from 'payload'
import { AccordionBlock } from '@/blocks/Accordion/Component'
import { DoctorBlock } from './DoctorBlock/Component'
import { NewsBlockComponent } from '@/blocks/NewsBlock/Component'
import { CarouselBlock } from '@/blocks/Carousel/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  contentWithImage: ContentWithImageBlock, // <-- add new block here
  cta: CallToActionBlock,
  doctor: DoctorBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  accordion: AccordionBlock,
  'news-block': NewsBlockComponent,
  carousel: CarouselBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  locale: TypedLocale
}> = (props) => {
  const { blocks, locale } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} locale={locale} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
