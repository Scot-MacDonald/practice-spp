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
      <div className="container py-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm mt-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-1 text-sm leading-snug">
            {/* <Link href="/" className="flex">
        <Logo className="h-8" />
      </Link> */}
            <div className="font-semibold">SPP-Mitte</div>
            <div>Linienstraße 127 (VH, 2. OG rechts)</div>
            <div>10115 Berlin-Mitte</div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-1 text-sm leading-snug">
            <div className="font-semibold">Kontact</div>
            <div>Tel.: 030 - 282 50 52</div>
            <div>Fax: 030 - 278 90 537</div>
            <div>info@spp.de</div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-1 text-sm leading-snug">
            <div className="font-semibold">Infos</div>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => (
                <CMSLink className="" key={i} {...link} />
              ))}
            </nav>
            {/* <LocaleSwitcher className="ml-5" />
      <ThemeSelector /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
