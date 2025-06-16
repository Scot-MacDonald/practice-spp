import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { CollectionDoctor } from '@/components/CollectionDoctor'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const doctors = await payload.find({
    collection: 'doctors',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container px-4 mb-16">
        <div className=" page-with-header">
          <h1 className="page-header">Our Doctors</h1>
        </div>
      </div>

      {/* <div className="container mb-8">
        <PageRange
          collection="doctors"
          currentPage={doctors.page}
          limit={12}
          totalDocs={doctors.totalDocs}
        />
      </div> */}

      <CollectionDoctor doctors={doctors.docs} />

      <div className="container">
        {doctors.totalPages > 1 && doctors.page && (
          <Pagination page={doctors.page} totalPages={doctors.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template doctors`,
  }
}
