import type { Metadata } from 'next'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import type { Doctor } from '@/payload-types'
import { PostHero } from '@/heros/PostHero' // consider renaming to DoctorHero
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const locales = ['en', 'de'] // Add all your supported locales here

  const doctors = await payload.find({
    collection: 'doctors',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  const params = doctors.docs.flatMap(({ slug }) =>
    locales.map((locale) => ({
      slug,
      locale,
    })),
  )

  return params
}

type Args = {
  params: {
    slug?: string
    locale: string
  }
}

export default async function Doctor({ params }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '', locale } = params
  const url = `/${locale}/doctors/${slug}`

  const doctor = await queryDoctorBySlug({ slug, locale })

  if (!doctor) return <PayloadRedirects url={url} />

  return (
    <article className="pt-36 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={doctor} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText className="max-w-[48rem]" content={doctor.content} enableGutter={false} />
          {doctor.relatedDoctors && doctor.relatedDoctors.length > 0 && (
            <RelatedPosts
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={doctor.relatedDoctors.filter((doc) => typeof doc === 'object')}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = '', locale } = params
  const doctor = await queryDoctorBySlug({ slug, locale })

  return generateMeta({ doc: doctor })
}

// ✅ Accept locale here
const queryDoctorBySlug = cache(async ({ slug, locale }: { slug: string; locale: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'doctors',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    locale, // ✅ Set locale here
  })

  return result.docs?.[0] || null
})
