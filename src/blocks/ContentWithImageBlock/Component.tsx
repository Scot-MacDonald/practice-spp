import React from 'react'
import { cn } from 'src/utilities/cn'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { CarouselBlock } from '@/blocks/Carousel/Component'

import type { Page } from '@/payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'contentWithImage' }>

export const ContentWithImageBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { columns, title } = props

  return (
    <div className="container">
      {title && (
        <div className="page-with-header mb-2">
          <h2 className="page-header">{title}</h2>
        </div>
      )}

      {columns?.map((col, index) => {
        const { enableLink, link, richText, image, useCarousel, carouselSlides } = col

        const showCarousel =
          useCarousel && Array.isArray(carouselSlides) && carouselSlides.length > 0

        // If captions could be strings (incorrectly), filter those out
        const safeSlides =
          showCarousel && carouselSlides
            ? carouselSlides.filter((slide) => typeof slide.caption !== 'string')
            : []

        return (
          <div
            key={index}
            className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-border"
          >
            {/* Image or Carousel */}
            <div className="col-span-8 p-8 border-r border-border">
              {showCarousel ? (
                <CarouselBlock slides={safeSlides} />
              ) : image ? (
                <img
                  src={image.url}
                  alt={image.alt || 'Column image'}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ) : null}
            </div>

            {/* Text content */}
            <div className="col-span-4 p-8">
              {richText && <RichText content={richText} enableGutter={false} className="mb-4" />}
              {enableLink && link && <CMSLink {...link} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
