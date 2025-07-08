import { cn } from 'src/utilities/cn'
import React from 'react'

import type { Doctor } from '@/payload-types'

import { CardDoctor } from '@/components/CardDoctor' // ✅ Updated import

export type Props = {
  doctors: Doctor[]
}

export const CollectionDoctor: React.FC<Props> = (props) => {
  const { doctors } = props

  return (
    <div className={cn('')}>
      <div className="grid grid-cols-4 gap-8">
        {doctors?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <CardDoctor
                key={index}
                className="h-full"
                doc={result}
                relationTo="doctors"
                showCategories
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
