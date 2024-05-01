'use client'

import { four, Mode, one, three, two } from '@/app/modes'
import { Gauge } from '@/components/gauge'
import { GitHub, Sparkle, Vercel } from '@/components/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mode, setMode] = useState<Mode[]>(one)

  return (
    <main
      className={cn(
        'flex flex-col justify-center',
        'container relative mx-auto max-h-[1100px] max-w-[1100px] px-2 py-4 lg:py-16'
      )}
    >
      <div
        className={cn(
          'bg-ds-background-100 relative flex flex-col',
          'h-[calc(100svh_-_theme(spacing.8))] min-h-96 lg:h-[calc(100svh_-_theme(spacing.32))]'
        )}
      >
        {/* Corners */}
        <Sparkle className='fill-ds-gray-1000 stroke-ds-gray-1000 absolute -left-2 -top-2 z-10 size-4' />
        <Sparkle className='fill-ds-gray-1000 stroke-ds-gray-1000 absolute -bottom-2 -right-2 z-10 size-4' />

        {/* Header */}
        <div className=' flex basis-1/4 border border-b-0'>
          <Link
            href='https://vercel.com/geist/gauge'
            target='_blank'
            className='hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70 flex basis-1/4 cursor-pointer items-center justify-center'
          >
            <Vercel />
          </Link>
          <div className=' flex basis-2/4 items-center justify-center border-x'>
            <h1 className='text-5xl sm:text-7xl'>Gauge</h1>
          </div>
          <Link
            href='https://github.com/ajayvignesh01/geist-gauge'
            target='_blank'
            className='hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70 flex basis-1/4 cursor-pointer items-center justify-center'
          >
            <GitHub />
          </Link>
        </div>

        {/* Content */}
        <div className='relative flex flex-1 basis-2/4 items-center justify-evenly border'>
          <div
            className='size-16 cursor-pointer sm:size-24'
            onClick={() => {
              const change = JSON.parse(JSON.stringify(mode))
              change[0].props.value = Math.random() * 100
              setMode(change)
            }}
          >
            <Gauge {...mode[0].props} />
          </div>

          <div
            className='size-16 cursor-pointer sm:size-24'
            onClick={() => {
              const change = JSON.parse(JSON.stringify(mode))
              change[1].props.value = Math.random() * 100
              setMode(change)
            }}
          >
            <Gauge {...mode[1].props} />
          </div>

          <div
            className='size-16 cursor-pointer sm:size-24'
            onClick={() => {
              const change = JSON.parse(JSON.stringify(mode))
              change[2].props.value = Math.random() * 100
              setMode(change)
            }}
          >
            <Gauge {...mode[2].props} />
          </div>

          <div
            className='size-16 cursor-pointer sm:size-24'
            onClick={() => {
              const change = JSON.parse(JSON.stringify(mode))
              change[3].props.value = Math.random() * 100
              setMode(change)
            }}
          >
            <Gauge {...mode[3].props} />
          </div>

          {/*<button className='bg-ds-background-100 hover:bg-ds-gray-100 active:bg-ds-gray-200 absolute bottom-3 right-3 flex size-12 items-center justify-center border'>*/}
          {/*  <RefreshClockwise />*/}
          {/*</button>*/}
        </div>

        {/* Footer */}
        <div
          className={cn('group flex basis-1/4 border border-t-0', 'grid grid-cols-4')}
          data-mode={mode[0].mode}
        >
          <button
            onClick={() => setMode(one)}
            className='hover:bg-ds-gray-100/30 group-data-[mode="1"]:bg-ds-gray-200/70 flex cursor-pointer items-center justify-center border-r-[0.5px]'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-red-700 h-3 w-2 rounded-tl'></span>
                <span className='bg-ds-gray-300 h-3 w-2 rounded-bl'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-blue-700 h-3 w-2'></span>
                <span className='bg-ds-gray-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-amber-700 h-3 w-2'></span>
                <span className='bg-ds-gray-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-700 h-3 w-2 rounded-tr'></span>
                <span className='bg-ds-gray-300 h-3 w-2 rounded-br'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setMode(two)}
            className='hover:bg-ds-gray-100/30 group-data-[mode="2"]:bg-ds-gray-200/70 flex cursor-pointer items-center justify-center border-l-[0.5px] border-r-[0.5px]'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-red-700 h-3 w-2 rounded-tl'></span>
                <span className='bg-ds-red-300 h-3 w-2 rounded-bl'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-blue-700 h-3 w-2'></span>
                <span className='bg-ds-blue-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-amber-700 h-3 w-2'></span>
                <span className='bg-ds-amber-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-700 h-3 w-2 rounded-tr'></span>
                <span className='bg-ds-green-300 h-3 w-2 rounded-br'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setMode(three)}
            className='hover:bg-ds-gray-100/30 group-data-[mode="3"]:bg-ds-gray-200/70 flex cursor-pointer items-center justify-center border-l-[0.5px] border-r-[0.5px]'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-pink-300 h-3 w-2 rounded-tl'></span>
                <span className='bg-ds-gray-300 h-3 w-2 rounded-bl'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-pink-500 h-3 w-2'></span>
                <span className='bg-ds-gray-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-pink-700 h-3 w-2'></span>
                <span className='bg-ds-gray-300 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-pink-900 h-3 w-2 rounded-tr'></span>
                <span className='bg-ds-gray-300 h-3 w-2 rounded-br'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setMode(four)}
            className='hover:bg-ds-gray-100/30 group-data-[mode="4"]:bg-ds-gray-200/70 flex cursor-pointer items-center justify-center border-l-[0.5px]'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-900 h-3 w-2 rounded-tl'></span>
                <span className='bg-ds-red-300 h-3 w-2 rounded-bl'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-700 h-3 w-2'></span>
                <span className='bg-ds-red-500 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-500 h-3 w-2'></span>
                <span className='bg-ds-red-700 h-3 w-2'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='bg-ds-green-300 h-3 w-2 rounded-tr'></span>
                <span className='bg-ds-red-900 h-3 w-2 rounded-br'></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </main>
  )
}
