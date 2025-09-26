"use client"
import Image from 'next/image'
import React from 'react'
import AuthModal from '../ui/AuthModal'


export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-10 pt-16 md:grid-cols-2 lg:gap-16 lg:pt-24'>
          {/* Left: Content */}
          <div className='relative z-10'>
            <div className='inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700'>
              <span className='h-1.5 w-1.5 rounded-full bg-green-500' />
              <span>Welcome to Fresh Harvest</span>
            </div>

            <h1 className='mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl'>
              Fresh Fruits and
              <br />
              Vegetables
            </h1>

            <p className='mt-4 max-w-xl text-sm text-slate-600 sm:text-base'>
              At Fresh Harvest, we are passionate about providing you with the freshest
              and most flavorful fruits and vegetables.
            </p>

            <div className='mt-6 flex items-center gap-4'>
              <button className='rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2'>
                Shop Now
              </button>

              {/* Decorative arrow */}
              <svg className='hidden h-10 w-10 text-orange-400 sm:block' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 24h36M30 12l12 12-12 12' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>

            {/* Offer card */}
            <div className='mt-8 w-full max-w-sm rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md backdrop-blur'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-xs text-slate-500'>Special Offer</p>
                  <p className='mt-1 text-lg font-semibold text-slate-900'>Fresh Salad</p>
                  <p className='text-xs text-slate-500'>Up to <span className='font-bold text-emerald-600'>70% off</span></p>

                  <span className='mt-3 inline-flex items-center justify-center rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700'>
                    Code: Fresh25
                  </span>
                </div>

                <div className='relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white'>
                  <Image
                    src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=256&auto=format&fit=crop'
                    alt='Fresh salad bowl'
                    fill
                    sizes='80px'
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </div>

            {/* App badges */}
            <div className='mt-8 flex items-center gap-3'>
              <a
                href='#'
                className='inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm transition hover:shadow-md'
              >
                <Image
                  src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                  alt='Download on the App Store'
                  width={140}
                  height={40}
                />
              </a>
              <a
                href='#'
                className='inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm transition hover:shadow-md'
              >
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                  alt='Get it on Google Play'
                  width={150}
                  height={45}
                />
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className='relative'>
            <div className='pointer-events-none absolute -right-24 -top-24 hidden aspect-square w-[620px] rounded-[48px] bg-emerald-100/60 blur-3xl md:block' />

            <div className='relative mx-auto max-w-md'>
              <div className='absolute -left-6 -top-6 -z-10 hidden h-24 w-24 rotate-[15deg] rounded-2xl bg-emerald-200 md:block' />
              <div className='absolute -bottom-6 -right-6 -z-10 hidden h-24 w-24 -rotate-6 rounded-2xl bg-orange-200 md:block' />

              <div className='relative overflow-hidden rounded-3xl bg-emerald-50'>
                <Image
                  src='https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1080&auto=format&fit=crop'
                  alt='Kid holding a crate of fresh vegetables'
                  width={900}
                  height={900}
                  className='h-auto w-full object-cover'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle texture bg */}
      <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-emerald-50' />


      {/* Auth Modal */}
      <AuthModal  />

    </section>
  )
}
