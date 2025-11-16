import React from 'react'

const items = [
  { label: 'Children supported', value: '12,500+' },
  { label: 'Communities reached', value: '65+' },
  { label: 'Volunteers mobilized', value: '420+' },
  { label: 'Protection networks', value: '80+' },
]

export default function Stats() {
  return (
    <section className="bg-[#FFF7E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((it) => (
            <div key={it.label} className="bg-white rounded-xl shadow-sm border border-black/5 p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-[#0057A3]">{it.value}</div>
              <div className="text-sm md:text-base text-[#333333]/80 mt-1">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
