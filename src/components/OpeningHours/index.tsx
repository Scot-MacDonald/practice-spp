'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/utilities/cn'
import Time from '../Time'

const weekdays = [
  { key: 'monday', label: 'montags', times: ['8:00 - 11:30', '14:30 - 18:00'] },
  { key: 'tuesday', label: 'dienstags', times: ['8:00 - 11:30', '14:30 - 18:00'] },
  { key: 'wednesday', label: 'mittwochs', times: ['8:00 - 12:00'] },
  { key: 'thursday', label: 'donnerstags', times: ['8:00 - 11:30', '13:30 - 18:35'] },
  { key: 'friday', label: 'freitags', times: ['12:00 - 22:00'] },
]

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

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000) // every second
    return () => clearInterval(interval)
  }, [])

  const currentDayIndex = now.getDay() // 0 = Sunday, 1 = Monday, ...
  const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const currentDayKey = dayKeys[currentDayIndex]

  return (
    <div className="opening-hours max-w-sm text-sm">
      {/* <h2 className="text-[#8CC63F]  uppercase tracking-wide">Sprechzeiten:</h2> */}
      {/* <p className="text-[#A299AC] text-xs mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione aperiam alias cumque
        fugit consectetur odio
      </p> */}

      <table className="w-full border-collapse">
        <tbody>
          {weekdays.map((day) => (
            <tr key={day.key} className="text-xs text-[#A299AC]">
              <td className="pb-3 font-semibold align-top text-[#A299AC]">{day.label}</td>
              <td className="pb-3 text-[#A299AC]">
                <div className="flex flex-col gap-1">
                  {day.times.map((time, i) => {
                    const isNow = day.key === currentDayKey && isTimeInRange(time, now)
                    return (
                      <span
                        key={i}
                        className={cn(isNow ? 'text-[#8CC63F] font-bold' : 'text-[#A299AC]')}
                      >
                        {time}
                      </span>
                    )
                  })}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Time />
    </div>
  )
}
