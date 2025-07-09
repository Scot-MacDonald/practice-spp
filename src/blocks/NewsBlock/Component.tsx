'use client'

import React, { useEffect, useState } from 'react'
import RichText from '@/components/RichText'
import { OpeningHours } from '@/components/OpeningHours'
import { useTranslations, useLocale } from 'next-intl'
import Time from '@/components/Time'

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
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/news?limit=2&sort=-publishedAt&locale=${locale}`,
        )
        const data = await res.json()
        setNews(data.docs)
      } catch (err) {
        console.error('Failed to fetch news:', err)
      }
    }

    fetchNews()
  }, [locale])

  return (
    <section className="container py-8">
      <div className="page-with-header mb-8">
        <h2 className="page-header">{t('welcome')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Opening hours */}
        <div className="lg:col-span-5">
          <h2 className="uppercase text-[#7eb36a] font-medium mb-4">{t('consultation-hours')}</h2>
          <OpeningHours />
          <Time />
        </div>

        {/* Right: News Items */}
        <div className="lg:col-span-7">
          {title && <h2 className="uppercase text-[#7eb36a] font-medium mb-4">{title}</h2>}
          <div className="flex flex-wrap gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="w-full lg:w-[calc(50%-0.75rem)] bg-white border border-gray-200 p-6 flex flex-col"
              >
                <p className="text-sm bg-[#c0eeff] px-2 py-1 rounded w-max mb-2">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                {item.content && (
                  <RichText className="mb-0" content={item.content} enableGutter={false} />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import React, { useEffect, useState } from 'react'
// import { cn } from 'src/utilities/cn'
// import RichText from '@/components/RichText'
// import { OpeningHours } from '@/components/OpeningHours'
// import { useTranslations, useLocale } from 'next-intl'
// import Time from '@/components/Time'

// type NewsItem = {
//   id: string
//   title: string
//   content: any
//   publishedAt: string
// }

// export const NewsBlockComponent: React.FC<{
//   title?: string
// }> = ({ title }) => {
//   const [news, setNews] = useState<NewsItem[]>([])
//   const t = useTranslations()
//   const locale = useLocale()

//   useEffect(() => {
//     const fetchNews = async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/news?limit=2&sort=-publishedAt&locale=${locale}`,
//       )
//       const data = await res.json()
//       setNews(data.docs)
//     }

//     fetchNews()
//   }, [locale])

//   return (
//     <>
//       <div className="page-with-header py-6 mx-8">
//         <h2 className="page-header font-normal">{t('welcome')}</h2>
//       </div>
//       <section className="  py-0">
//         <div className="w-full  grid grid-cols-12 ">
//           <div className="col-span-8 px-8 ">
//             <h2 className="">Latest news</h2>
//           </div>
//           <div className="col-span-4 px-8">
//             <h2 className=" ">{t('consultation-hours')}</h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 w-full border-t border-border">
//           {/* Replace the two static columns with dynamic news items */}
//           {news.map((item) => (
//             <article
//               key={item.id}
//               className="border-r border-border p-8 flex flex-col justify-start"
//             >
//               <h3 className="inline-flex items-center bg-[#c0eeff] px-[7px] py-[2px] rounded w-max mb-4">
//                 {new Date(item.publishedAt).toLocaleDateString()}
//               </h3>
//               {item.content && (
//                 <RichText className="mb-0 " content={item.content} enableGutter={false} />
//               )}
//             </article>
//           ))}
//           <div className="p-8">
//             {/* <h2 className="text-xl font-bold mb-4 ">Open</h2> */}
//             <OpeningHours />
//             <Time />
//           </div>
//         </div>
{
  /* <div className="w-full  grid grid-cols-12">
          
          <div className="lg:col-span-4 ">
            <div className="lg:col-span-2">
              <h2 className="inline-flex uppercase items-center font-normal mb-4 px-[0px] py-[2px] rounded w-max text-[#7eb36a]">
                {t('consultation-hours')}
              </h2>
            </div>

            <OpeningHours />
            <Time />
          </div>
          <div className="lg:col-span-8">
            {title && (
              <div className="lg:col-span-2">
                <h2 className="inline-flex ml-0 lg:ml-[49px] items-center  font-normal mb-4 px-[0px] py-[2px] rounded w-max uppercase text-[#7eb36a]">
                  {title}
                </h2>
              </div>
            )}
            <div className="flex flex-wrap gap-6 pl-0  ">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="w-full lg:w-[calc(50%-0.75rem)] min-h-[190px] bg-white h-full flex flex-col  px-[49px] lg:border-l lg:border-gray-200"
                >
                  <p className="inline-flex items-center text-sm bg-[#c0eeff] px-[7px] py-[2px] rounded w-max">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </p>
                  {item.content && (
                    <RichText className="mb-0  " content={item.content} enableGutter={false} />
                  )}
                </article>
              ))}
            </div>
          </div>
//         </div> */
}
//       </section>
//     </>
//   )
// }

//

// 'use client'

// import React, { useEffect, useState } from 'react'
// import { cn } from 'src/utilities/cn'
// import RichText from '@/components/RichText'
// import { OpeningHours } from '@/components/OpeningHours'
// import { useTranslations, useLocale } from 'next-intl'
// import Time from '@/components/Time'

// type NewsItem = {
//   id: string
//   title: string
//   content: any
//   publishedAt: string
// }

// export const NewsBlockComponent: React.FC<{
//   title?: string
// }> = ({ title }) => {
//   const [news, setNews] = useState<NewsItem[]>([])
//   const t = useTranslations()
//   const locale = useLocale()

//   useEffect(() => {
//     const fetchNews = async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/news?limit=2&sort=-publishedAt&locale=${locale}`,
//       )
//       const data = await res.json()
//       setNews(data.docs)
//     }

//     fetchNews()
//   }, [locale])

//   return (
//     <section className="container  py-0">
//       <div className=" page-with-header ">
//         <h2 className="page-header">{t('welcome')}</h2>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-12 ">
//         <div className="lg:col-span-5  ">
//           <h2 className="inline-flex uppercase items-center font-normal mb-4 px-[0px] py-[2px] rounded w-max text-[#7eb36a]">
//             {t('consultation-hours')}
//           </h2>

//           <OpeningHours />
//           <Time />
//         </div>
//         <div className="lg:col-span-7">
//           {title && (
//             <div className="lg:col-span-2">
//               <h2 className="inline-flex ml-0 lg:ml-[49px] items-center  font-normal mb-4 px-[0px] py-[2px] rounded w-max uppercase text-[#7eb36a]">
//                 {title}
//               </h2>
//             </div>
//           )}
//           <div className="flex flex-wrap gap-6 pl-0  ">
//             {news.map((item) => (
//               <article
//                 key={item.id}
//                 className="w-full flex flex-col min-h-[190px] bg-white h-full  px-[49px] lg:border-l lg:border-gray-200"
//               >
//                 <p className="inline-flex items-center text-sm bg-[#c0eeff] px-[7px] py-[2px] rounded w-max">
//                   {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//                 {item.content && (
//                   <RichText className="mb-0  " content={item.content} enableGutter={false} />
//                 )}
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
