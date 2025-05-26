import * as Accordion from '@radix-ui/react-accordion'
import type { AccordionBlock as AccordionBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & AccordionBlockProps

export const AccordionBlock: React.FC<Props> = ({ className, header, subline, items }) => {
  return (
    <section className={cn('container grid grid-cols-1 md:grid-cols-2 gap-10 pb-16', className)}>
      {/* Left side: header and subline */}
      <div className="flex flex-col justify-start">
        {header && <h2 className="text-3xl font-bold mb-4">{header}</h2>}
        {subline && <p className="text-muted-foreground text-lg w-3/4">{subline}</p>}
      </div>

      {/* Right side: accordion */}
      <Accordion.Root type="multiple" className="AccordionRoot">
        {items?.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="AccordionItem border-b-[1px] border-b-[#00000014]"
          >
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className="AccordionTrigger py-6 flex justify-between items-center w-full text-left">
                <p className="text-lg font-medium">{item.title}</p>
                <span className="AccordionChevron">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="var(--violet-10)" strokeWidth="2">
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="12" x2="12" y1="3" y2="21" className="AccordionVerticalLine" />
                    </g>
                  </svg>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent overflow-hidden ">
              <RichText content={item.content} enableGutter={false} enableProse={false} />
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
