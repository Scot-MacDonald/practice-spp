'use client'

import type { CarouselBlock as CarouselBlockProps } from 'src/payload-types'
import React, { useEffect, useRef, useState } from 'react'
import { cn } from 'src/utilities/cn'
import { Media } from '@/components/Media'

type Props = {
  className?: string
} & CarouselBlockProps

export const CarouselBlock: React.FC<Props> = ({ className, slides }) => {
  const autoplayDelay = 5000
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!slides || slides.length <= 1) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoplayDelay)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [slides])

  if (!slides || slides.length === 0) return null

  return (
    <div className={cn('container px-0 mx-auto mb-2 relative z-10', className)}>
      <div className="relative w-full h-[70vh] min-h-[300px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none',
            )}
          >
            {slide.media && <Media resource={slide.media} className="w-full h-full object-cover" />}

            {slide.caption && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded">
                {slide.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
