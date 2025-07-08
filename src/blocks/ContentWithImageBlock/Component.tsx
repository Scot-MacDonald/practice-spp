// import { cn } from 'src/utilities/cn'
// import React from 'react'
// import RichText from '@/components/RichText'
// import { CMSLink } from '../../components/Link'
// import { CarouselBlock } from '@/blocks/Carousel/Component'

// import type { Page } from '@/payload-types'

// type Props = Extract<Page['layout'][0], { blockType: 'contentWithImage' }>

// export const ContentWithImageBlock: React.FC<
//   {
//     id?: string
//   } & Props
// > = (props) => {
//   const { columns, title } = props

//   return (
//     <div className="container">
//       {title && (
//         <div className="page-with-header mb-2">
//           <h2 className="page-header">{title}</h2>
//         </div>
//       )}

//       {columns?.map((col, index) => {
//         const { enableLink, link, richText, image, useCarousel, carouselSlides } = col

//         return (
//           <div key={index} className="grid grid-cols-1 lg:grid-cols-12 mb-0 ">
//             {/* Image or Carousel - on right on desktop, on top on mobile */}
//             <div className="order-1 lg:order-2 lg:col-span-5 lg:pl-[49px] mb-2">
//               {useCarousel && carouselSlides?.length > 0 ? (
//                 <CarouselBlock slides={carouselSlides} />
//               ) : image ? (
//                 <img
//                   src={image.url}
//                   alt={image.alt || 'Column image'}
//                   className="w-full h-auto"
//                   loading="lazy"
//                 />
//               ) : null}
//             </div>

//             {/* Text content - on left on desktop, below on mobile */}
//             <div className="order-2 lg:order-1 lg:col-span-5">
//               {richText && <RichText content={richText} enableGutter={false} className=" mb-4" />}
//               {enableLink && link && <CMSLink {...link} />}
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

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
  const { columns, title } = props

  return (
    <div className="">
      {columns?.map((col, index) => {
        const { enableLink, link, richText, image, useCarousel, carouselSlides } = col

        return (
          <div key={index} className="w-full grid grid-cols-12 border-t border-border ">
            {/* Image or Carousel - on right on desktop, on top on mobile */}
            <div className=" col-span-8 p-8 border-r border-border">
              {useCarousel && carouselSlides?.length > 0 ? (
                <CarouselBlock slides={carouselSlides} />
              ) : image ? (
                <img
                  src={image.url}
                  alt={image.alt || 'Column image'}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ) : null}
            </div>

            {/* Text content - on left on desktop, below on mobile */}
            <div className="  col-span-4 p-8">
              {richText && <RichText content={richText} enableGutter={false} className=" mb-4" />}
              {enableLink && link && <CMSLink {...link} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
