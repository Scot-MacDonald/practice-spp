'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hoveringClickable, setHoveringClickable] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHoveringClickable(el?.closest('a, button, [data-hover]') !== null)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none">
      <div
        className="absolute"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={clsx(
            'transition-transform duration-500 ease-in-out',
            hoveringClickable && 'rotate-[360deg]',
          )}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#7eb36a" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="12" y1="3" x2="12" y2="21" />
          </g>
        </svg>
      </div>
    </div>
  )
}
