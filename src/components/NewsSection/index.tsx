// components/LatestNews.tsx
'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function LatestNews() {
  const { data } = useSWR('/api/news?limit=1&sort=-date', fetcher)

  if (!data) return <p>Loading...</p>

  return (
    <div>
      {data.docs.map((item) => (
        <div key={item.id}>
          <a href={`/news/${item.slug}`}>{item.title}</a>
        </div>
      ))}
    </div>
  )
}
