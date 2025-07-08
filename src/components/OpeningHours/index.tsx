'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/utilities/cn'
import { useTranslations } from 'next-intl'

function parseTime(str: string): Date {
  const [hours, minutes] = str.split(':').map(Number)
  const now = new Date()
  now.setHours(hours)
  now.setMinutes(minutes)
  now.setSeconds(0)
  return now
}

function isTimeInRange(range: string, now: Date): boolean {
  if (range === 'closed') return false
  const [start, end] = range.split(' - ').map(parseTime)
  return now >= start && now <= end
}

export const OpeningHours = () => {
  const [now, setNow] = useState(new Date())
  const t = useTranslations()

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const currentDayIndex = now.getDay()
  const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const currentDayKey = dayKeys[currentDayIndex]

  const weekdays = [
    { key: 'monday', times: ['8:00 - 13:00'] },
    { key: 'tuesday', times: ['8:00 - 13:00', '14:30 - 18:00'] },
    { key: 'wednesday', times: ['8:00 - 12:00'] },
    { key: 'thursday', times: ['8:00 - 11:30', '13:30 - 18:35'] },
    { key: 'friday', times: ['8:00 - 13:00'] },
  ]

  // Determine if currently open
  const today = weekdays.find((day) => day.key === currentDayKey)
  const isOpenNow = today ? today.times.some((range) => isTimeInRange(range, now)) : false

  return (
    <div className="opening-hours pr-[49px]">
      <h2
        className={cn(' text-xs font-normal mb-4', isOpenNow ? 'text-[#7eb36a]' : 'text-[#e15555]')}
      >
        {isOpenNow ? t('open') : t('closed')}
      </h2>
      <div className="flex flex-col gap-2 text-[#4a5565]">
        {weekdays.map((day) => {
          const [morning, afternoon] = day.times

          const isMorningNow = morning && isTimeInRange(morning, now) && day.key === currentDayKey
          const isAfternoonNow =
            afternoon && isTimeInRange(afternoon, now) && day.key === currentDayKey

          return (
            <div key={day.key} className="flex items-start w-full">
              <p className="w-1/2 text-left">{t(`days.${day.key}`)}</p>

              <p className="w-1/4 text-left">
                {morning && <span className={cn(isMorningNow && 'text-[#7eb36a]')}>{morning}</span>}
              </p>

              <p className="w-1/4 text-right">
                {afternoon && (
                  <span className={cn(isAfternoonNow && 'text-[#7eb36a]')}>{afternoon}</span>
                )}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
