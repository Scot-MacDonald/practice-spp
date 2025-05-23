'use client'
import React from 'react'
import { useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/routing'
import { TypedLocale } from 'payload'
import localization from '@/i18n/localization'
import { cn } from '@/utilities/cn'

type LocaleSwitcherProps = {
  className?: string
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const otherLocale = localization.locales.find((l) => l.code !== locale)

  async function getTranslatedSlug(
    currentLocale: string,
    newLocale: string,
    collection?: string,
    slug?: string,
  ) {
    try {
      if (!slug) return null
      const validCollections = ['posts', 'products', 'works', 'pages']
      const col = collection && validCollections.includes(collection) ? collection : 'pages'
      const res = await fetch(`/api/${col}?where[slug][equals]=${slug}&locale=${currentLocale}`)
      const data = await res.json()

      if (data?.docs?.[0]?.id) {
        const translationRes = await fetch(`/api/${col}/${data.docs[0].id}?locale=${newLocale}`)
        const translationData = await translationRes.json()
        return translationData?.slug
      }
    } catch (err) {
      console.error('Error fetching translation:', err)
    }
    return null
  }

  async function onLocaleSwitch() {
    const newLocale = otherLocale?.code as TypedLocale
    if (!newLocale) return

    startTransition(async () => {
      try {
        const currentPath = pathname.replace(/^\/[a-z]{2}\//, '/')
        const isHome = currentPath === '/'

        if (isHome) {
          router.replace('/', { locale: newLocale })
          return
        }

        const pathParts = currentPath.split('/').filter(Boolean)
        const validCollections = ['posts', 'products', 'works']

        if (pathParts.length === 1) {
          const pageSlug = pathParts[0]
          const translatedSlug = await getTranslatedSlug(locale, newLocale, 'pages', pageSlug)
          router.replace(`/${translatedSlug || pageSlug}`, {
            locale: newLocale,
          })
        } else if (pathParts.length === 2) {
          const [collection, slug] = pathParts
          if (validCollections.includes(collection)) {
            const translatedSlug = await getTranslatedSlug(locale, newLocale, collection, slug)
            router.replace(`/${collection}/${translatedSlug || slug}`, {
              locale: newLocale,
            })
          }
        } else {
          router.replace(currentPath, { locale: newLocale })
        }
      } catch (error) {
        console.error('Locale switch failed:', error)
        router.replace(pathname, { locale: newLocale })
      }
    })
  }

  return (
    <button
      onClick={onLocaleSwitch}
      className={cn('text-sm font-medium  underline hover:opacity-80 transition', className)}
    >
      {otherLocale?.label}
    </button>
  )
}
