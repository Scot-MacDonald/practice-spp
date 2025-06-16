import * as Accordion from '@radix-ui/react-accordion'
import type { AccordionBlock as AccordionBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type Props = {
  className?: string
} & AccordionBlockProps

export const AccordionBlock: React.FC<Props> = ({ className, header, subline, items }) => {
  return (
    <section
      className={cn('container px-4 w-full grid grid-cols-1 md:grid-cols-2  pb-16', className)}
    >
      <div className=" page-with-header">
        {header && <h1 className="page-header"> {header}</h1>}
      </div>

      {/* Left side: header and subline */}
      <div className="flex prose dark:prose-invert flex-col justify-start">
        {/* {header && (
          <h2 className="inline-flex items-center text-sm font-normal mb-4 px-[7px] py-[2px] rounded w-max bg-[#d8e8d2] ">
            {header}
          </h2>
        )} */}
        {subline && <p className=" w-3/4">{subline}</p>}
      </div>

      {/* Right side: accordion */}
      <Accordion.Root type="multiple" className="AccordionRoot">
        {items?.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className={cn(
              'AccordionItem border-b-[1px] border-b-[#00000014] ',
              'data-[state=open]:bg-[#f0f8ec]', // Background color for the whole item when open
              'transition-colors duration-300',
            )}
          >
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger
                className={cn(
                  'AccordionTrigger px-4 py-6 flex justify-between cursor-pointer items-center w-full text-left transition-colors duration-300',
                  'hover:bg-[rgba(126,179,106,0.1)]',
                  'data-[state=open]:bg-[#f0f8ec]', // Background color of the trigger when open
                  'transition-colors duration-300',
                )}
              >
                <h2 className="text-lg text-gray-600 font-medium">{item.title}</h2>
                <span className="AccordionChevron">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="#7eb36a" strokeWidth="2">
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="12" x2="12" y1="3" y2="21" className="AccordionVerticalLine" />
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
    </section>
  )
}
