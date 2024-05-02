'use client'

import { Gauge } from '@/components/gauge'
import { GitHub, Sparkle, Vercel } from '@/components/icons'
import { Examples, four, one, three, two } from '@/lib/examples'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [examples, setExamples] = useState<Examples[]>(one)

  return (
    <main
      className={cn(
        'flex flex-col justify-center',
        'container relative mx-auto max-h-[1100px] max-w-[1100px] px-2 py-4 lg:py-16'
      )}
    >
      <div
        className={cn(
          'relative flex flex-col bg-ds-background-100',
          'h-[calc(100svh_-_theme(spacing.8))] min-h-96 lg:h-[calc(100svh_-_theme(spacing.32))]'
        )}
      >
        {/* Corners */}
        <Sparkle className='absolute -left-2 -top-2 z-10 size-4 fill-ds-gray-1000 stroke-ds-gray-1000' />
        <Sparkle className='absolute -bottom-2 -right-2 z-10 size-4 fill-ds-gray-1000 stroke-ds-gray-1000' />

        {/* Header */}
        <div className=' flex basis-1/4 border border-b-0'>
          <Link
            href='https://vercel.com/geist/gauge'
            target='_blank'
            className='flex basis-1/4 cursor-pointer items-center justify-center hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70'
          >
            <Vercel />
          </Link>
          <div className=' flex basis-2/4 items-center justify-center border-x'>
            <h1 className='text-5xl sm:text-7xl'>Gauge</h1>
          </div>
          <Link
            href='https://github.com/ajayvignesh01/geist-gauge'
            target='_blank'
            className='flex basis-1/4 cursor-pointer items-center justify-center hover:bg-ds-gray-100/30 active:bg-ds-gray-200/70'
          >
            <GitHub />
          </Link>
        </div>

        {/* Content */}
        <div className='relative flex flex-1 basis-2/4 items-center justify-evenly border'>
          {examples.map((example, index) => (
            <div
              key={index}
              className='size-16 cursor-pointer sm:size-24'
              onClick={() => {
                const change = JSON.parse(JSON.stringify(examples))
                change[index].props.value = Math.random() * 100
                setExamples(change)
              }}
            >
              <Gauge {...examples[index].props} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className={cn('group flex basis-1/4 border border-t-0', 'grid grid-cols-4')}
          data-example={examples[0].example}
        >
          <button
            onClick={() => setExamples(one)}
            className='flex cursor-pointer items-center justify-center border-r-[0.5px] hover:bg-ds-gray-100/30 group-data-[example="1"]:bg-ds-gray-200/70'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tl bg-ds-red-700'></span>
                <span className='h-3 w-2 rounded-bl bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-amber-700'></span>
                <span className='h-3 w-2 bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-blue-700'></span>
                <span className='h-3 w-2 bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tr bg-ds-green-700'></span>
                <span className='h-3 w-2 rounded-br bg-ds-gray-300'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setExamples(two)}
            className='flex cursor-pointer items-center justify-center border-l-[0.5px] border-r-[0.5px] hover:bg-ds-gray-100/30 group-data-[example="2"]:bg-ds-gray-200/70'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tl bg-ds-red-700'></span>
                <span className='h-3 w-2 rounded-bl bg-ds-red-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-amber-700'></span>
                <span className='h-3 w-2 bg-ds-amber-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-blue-700'></span>
                <span className='h-3 w-2 bg-ds-blue-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tr bg-ds-green-700'></span>
                <span className='h-3 w-2 rounded-br bg-ds-green-300'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setExamples(three)}
            className='flex cursor-pointer items-center justify-center border-l-[0.5px] border-r-[0.5px] hover:bg-ds-gray-100/30 group-data-[example="3"]:bg-ds-gray-200/70'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tl bg-ds-pink-300'></span>
                <span className='h-3 w-2 rounded-bl bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-pink-500'></span>
                <span className='h-3 w-2 bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-pink-700'></span>
                <span className='h-3 w-2 bg-ds-gray-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tr bg-ds-pink-900'></span>
                <span className='h-3 w-2 rounded-br bg-ds-gray-300'></span>
              </div>
            </div>
          </button>
          <button
            onClick={() => setExamples(four)}
            className='flex cursor-pointer items-center justify-center border-l-[0.5px] hover:bg-ds-gray-100/30 group-data-[example="4"]:bg-ds-gray-200/70'
          >
            <div className='flex h-6 w-8 flex-row items-center justify-center'>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tl bg-ds-green-900'></span>
                <span className='h-3 w-2 rounded-bl bg-ds-red-300'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-green-700'></span>
                <span className='h-3 w-2 bg-ds-red-500'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 bg-ds-green-500'></span>
                <span className='h-3 w-2 bg-ds-red-700'></span>
              </div>
              <div className='flex h-6 w-2 flex-col'>
                <span className='h-3 w-2 rounded-tr bg-ds-green-300'></span>
                <span className='h-3 w-2 rounded-br bg-ds-red-900'></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </main>
  )
}
