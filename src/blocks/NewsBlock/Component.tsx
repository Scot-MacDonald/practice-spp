'use client'

import React, { useEffect, useState } from 'react'
import { cn } from 'src/utilities/cn'
import RichText from '@/components/RichText'
import { OpeningHours } from '@/components/OpeningHours'
import { useTranslations, useLocale } from 'next-intl'

type NewsItem = {
  id: string
  title: string
  content: any
  publishedAt: string
}

export const NewsBlockComponent: React.FC<{
  title?: string
}> = ({ title }) => {
  const [news, setNews] = useState<NewsItem[]>([])
  const t = useTranslations()
  const locale = useLocale()

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/news?limit=2&sort=-publishedAt&locale=${locale}`,
      )
      const data = await res.json()
      setNews(data.docs)
    }

    fetchNews()
  }, [locale])

  return (
    <section className="container  px-4 py-0">
      <div className=" page-with-header">
        <h1 className="page-header">Welcome</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="lg:col-span-4">
          <div className="lg:col-span-2">
            <h2 className="inline-flex uppercase items-center text-sm font-normal mb-4 px-[0px] py-[2px] rounded w-max text-[#7eb36a]">
              {t('consultation-hours')}
            </h2>{' '}
          </div>

          <OpeningHours />
        </div>
        <div className="lg:col-span-8">
          {title && (
            <div className="lg:col-span-2">
              <h2 className="inline-flex ml-[49px] items-center text-sm font-normal mb-4 px-[0px] py-[2px] rounded w-max uppercase text-[#7eb36a]">
                {title}
              </h2>
            </div>
          )}
          <div className="flex flex-wrap gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="w-full lg:w-[calc(50%-0.75rem)] min-h-[160px] bg-white h-full flex flex-col pl-[49px] border-l border-gray-200"
              >
                <p className="inline-flex items-center text-sm font-semibold bg-[#c0eeff] px-[7px] py-[2px] rounded w-max">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                {item.content && (
                  <RichText
                    className="mb-0 text-gray-500 text-[12px]"
                    content={item.content}
                    enableGutter={false}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
