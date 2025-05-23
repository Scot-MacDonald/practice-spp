import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { CMSLink } from '@/components/Link'
import { TypedLocale } from 'payload'
import { Logo } from '@/components/Logo/Logo'

export async function Footer({ locale }: { locale: TypedLocale }) {
  const footer: Footer = await getCachedGlobal('footer', 1, locale)()

  const navItems = footer?.navItems || []

  return (
    <footer className="border-t border-border">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-start gap-2">
          {/* <Link href="/" className="flex">
            <Logo className="h-8" />
          </Link> */}
          <div className="text-sm leading-snug">
            <div>SPP-Mitte</div>
            <div>Linienstraße 127 (VH, 2. OG rechts)</div>
            <div>10115 Berlin-Mitte</div>
            <div>Tel.: 030 - 282 50 52</div>
            <div>Fax: 030 - 278 90 537</div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="" key={i} {...link} />
            })}
          </nav>
          <LocaleSwitcher className="ml-5" />
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
