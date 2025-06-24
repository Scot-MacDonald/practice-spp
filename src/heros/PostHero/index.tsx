'use client'

import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { useTranslations } from 'next-intl'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, meta: { image: metaImage } = {}, populatedAuthors, publishedAt, title } = post

  const t = useTranslations()

  return (
    <div className="relative -mt-[10.4rem]  pt-8">
      <div className="container page-with-header">
        <h1 className="page-header">{title}</h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-[350px_1fr] gap-12 items-center">
        {metaImage && typeof metaImage !== 'string' && (
          <div className="w-[350px] h-[350px] relative overflow-hidden shadow-lg">
            <Media imgClassName="object-cover w-full h-full" resource={metaImage} />
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="uppercase text-sm">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const titleToUse = category.title || 'Untitled category'
                const isLast = index === categories.length - 1
                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>,&nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          {/* <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {populatedAuthors && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">{t('author')}</p>
                {populatedAuthors.map((author, index) => {
                  const isLast = index === populatedAuthors.length - 1
                  const secondToLast = index === populatedAuthors.length - 2
                  return (
                    <React.Fragment key={index}>
                      {author.name}
                      {secondToLast && populatedAuthors.length > 2 && ', '}
                      {secondToLast && populatedAuthors.length === 2 && ' '}
                      {!isLast && populatedAuthors.length > 1 && 'and '}
                    </React.Fragment>
                  )
                })}
              </div>
            )}

            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">{t('date-published')}</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
