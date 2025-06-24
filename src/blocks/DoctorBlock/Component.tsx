import type { Doctor, DoctorBlock as DoctorBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionDoctor } from '@/components/CollectionDoctor'

export const DoctorBlock: React.FC<
  DoctorBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let doctors: Doctor[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedDoctors = await payload.find({
      collection: 'doctors',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              specialties: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    doctors = fetchedDoctors.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedDoctors = selectedDocs.map((doctor) => {
        if (typeof doctor.value === 'object') return doctor.value
      }) as Doctor[]

      doctors = filteredSelectedDoctors
    }
  }

  return (
    <div className="container my-16" id={`block-${id}`}>
      <div className=" page-with-header">
        <h1 className="page-header">Unser Team</h1>
      </div>
      {introContent && (
        <div className="mb-16 ">
          <RichText
            className="ms-0 max-w-[48rem] text-gray-500"
            content={introContent}
            enableGutter={false}
          />
        </div>
      )}
      <CollectionDoctor doctors={doctors} />
    </div>
  )
}
