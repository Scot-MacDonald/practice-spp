import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '../../components/Link'
import { CarouselBlock } from '@/blocks/Carousel/Component'

import type { Page } from '@/payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'contentWithImage' }>

export const ContentWithImageBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container px-4 mt-36">
      <div className=" page-with-header">
        <h1 className="page-header">Our practice</h1>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size, image, useCarousel, carouselSlides } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {useCarousel && carouselSlides?.length > 0 ? (
                  <CarouselBlock slides={carouselSlides} />
                ) : image ? (
                  <img
                    src={image.url}
                    alt={image.alt || 'Column image'}
                    className="mb-4 w-full max-w-3xl float-right"
                    loading="lazy"
                  />
                ) : null}

                {richText && (
                  <RichText
                    content={richText}
                    enableGutter={false}
                    className="mb-0 text-gray-500 text-[14px]"
                  />
                )}

                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
