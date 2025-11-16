import React from 'react'

const values = [
  { title: 'Compassion', desc: 'Dignifying support that centers children and families.' },
  { title: 'Integrity', desc: 'Transparent, accountable, and ethical actions.' },
  { title: 'Empowerment', desc: 'Building skills and agency for lasting change.' },
  { title: 'Collaboration', desc: 'Working with communities and partners as equals.' },
  { title: 'Respect for Dignity', desc: 'Protective, sensitive language and imagery.' },
]

export default function Values() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map(v => (
            <div key={v.title} className="bg-white rounded-xl border border-black/5 shadow-sm p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#0057A3]">{v.title}</h3>
              <p className="mt-2 text-[#333333]/80">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
