'use client'

import * as Accordion from '@radix-ui/react-accordion'
import type { AccordionBlock as AccordionBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type Props = {
  className?: string
  subheading?: string
} & AccordionBlockProps

export const AccordionBlock: React.FC<Props> = ({
  className,
  title,
  subheading,
  richText,
  items,
}) => {
  return (
    <section className={cn(' ', className)}>
      {/* Title above both columns
      {title && (
        <div className="page-with-header w-full">
          <h1 className="page-header">{title}</h1>
        </div>
      )}

      {/* Subheading */}
      {/* {subheading && <h2 className="text-md font-semibold pb-0">{subheading}</h2>} } */}

      {/* Two-column layout: stacks on small screens */}
      <div className="grid grid-cols-12 border-t border-border">
        {/* Left: RichText (1/3 width) */}
        <div className=" col-span-4 p-8 border-r border-border">
          <h2 className="mb-4">{title}</h2>
          <h3 className="font-bold">{subheading}</h3>
          {richText && <RichText content={richText} enableGutter={false} className="  mb-4" />}
        </div>

        {/* Right: Accordion (2/3 width, but content max 80%) */}
        <div className="col-span-8 p-8 ">
          <div className="w-full max-w-[50%] flex flex-col items-end">
            <Accordion.Root type="multiple" className="AccordionRoot">
              {items?.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    'AccordionItem border-b-[1px] border-b-[#00000014]',
                    'data-[state=open]:bg-[#f0f8ec]',
                    'transition-colors duration-300',
                  )}
                >
                  <Accordion.Header className="AccordionHeader">
                    <Accordion.Trigger
                      className={cn(
                        'AccordionTrigger px-4 py-6 flex justify-between items-center w-full text-left cursor-pointer',
                        'hover:bg-[rgba(126,179,106,0.1)]',
                        'data-[state=open]:bg-[#f0f8ec]',
                        'transition-colors duration-300',
                      )}
                    >
                      <h2 className="text-lg text-gray-600 font-medium">{item.title}</h2>
                      <span className="AccordionChevron">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <g fill="none" stroke="#7eb36a" strokeWidth="2">
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line
                              x1="12"
                              x2="12"
                              y1="3"
                              y2="21"
                              className="AccordionVerticalLine"
                            />
                          </g>
                        </svg>
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="AccordionContent p-4">
                    <RichText
                      content={item.content}
                      enableGutter={false}
                      enableProse={false}
                      className="text-gray-600"
                    />
                    {item.enableLink && item.link && (
                      <div className="mt-4">
                        <CMSLink
                          {...item.link}
                          className="inline-block text-sm/6 px-4 py-2 rounded text-[#7eb36a] bg-[rgba(126,179,106,0.3)] hover:bg-[#7eb36a] hover:text-white transition-colors duration-200"
                        />
                      </div>
                    )}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  )
}
