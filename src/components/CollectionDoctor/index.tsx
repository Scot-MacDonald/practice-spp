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
    <div className={cn('container ')}>
      <div>
        <div className="grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {doctors?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-6 md:col-span-3" key={index}>
                  <CardDoctor className="h-full" doc={result} relationTo="doctors" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
