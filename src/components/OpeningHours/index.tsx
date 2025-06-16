'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/utilities/cn'
import Time from '../Time'
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

  // Define time ranges by key only
  const weekdays = [
    { key: 'monday', times: ['8:00 - 11:30', '14:30 - 18:00'] },
    { key: 'tuesday', times: ['8:00 - 11:30', '14:30 - 18:00'] },
    { key: 'wednesday', times: ['8:00 - 12:00'] },
    { key: 'thursday', times: ['8:00 - 11:30', '13:30 - 18:35'] },
    { key: 'friday', times: ['8:00 - 13:00'] },
  ]

  return (
    <div className="opening-hours max-w-sm text-sm">
      <div className="flex flex-col gap-2 text-xs text-[#6b7280]">
        {weekdays.map((day) => {
          const [morning, afternoon] = day.times
          const isMorningNow = morning && isTimeInRange(morning, now) && day.key === currentDayKey
          const isAfternoonNow =
            afternoon && isTimeInRange(afternoon, now) && day.key === currentDayKey

          return (
            <div key={day.key} className="flex items-start w-full">
              {/* Day label from translation */}
              <div className="min-w-[90px]">{t(`days.${day.key}`)}</div>

              {/* Morning time (right aligned) */}
              <div className="flex-1 text-right pr-4 min-w-[110px]">
                {morning && <span className={cn(isMorningNow && 'text-[#7eb36a]')}>{morning}</span>}
              </div>

              {/* Afternoon time (right aligned) */}
              <div className="flex-1 text-right min-w-[110px]">
                {afternoon && (
                  <span className={cn(isAfternoonNow && 'text-[#7eb36a] font-bold')}>
                    {afternoon}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Time />
    </div>
  )
}
