import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <div className={clsx('flex items-center ', className)}>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        alt="Payload Logo"
        width={193}
        height={54}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className="h-[54px] w-auto object-contain mr-2"
        src="/spp_logo.png"
      />
      <span className="text-lg font-semibold whitespace-nowrap">SPP-Mitte</span>
    </div>
  )
}
