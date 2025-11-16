import React from 'react'

const COLORS = {
  primary: '#0057A3',
  accent: '#FF8C00',
  soft: '#FFF7E6',
  dark: '#333333',
  white: '#FFFFFF',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,87,163,0.35), rgba(0,87,163,0.35)), url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop)'
        }} />
      </div>

      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-20 md:pt-36 md:pb-32 text-white">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight drop-shadow-sm">
              Protecting and empowering children in crisis and displacement
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl/8 text-white/90 max-w-2xl">
              Caprecon restores hope through education, psychosocial support, community awareness,
              and resilience building in IDP and refugee communities.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#donate" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4"
                 style={{ backgroundColor: COLORS.primary, boxShadow: '0 10px 20px rgba(0,87,163,0.20)'}}>
                Donate
              </a>
              <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border border-white/70 text-white hover:bg-white/10 transition">
                See Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
