import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-xl border border-black/5 shadow-sm overflow-hidden flex flex-col">
      <div className="bg-[#0057A3]/10 h-32" />
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-[#333333]">{program.title}</h3>
        <p className="mt-2 text-sm md:text-base text-[#333333]/80 line-clamp-3">{program.summary}</p>
        {program.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {program.tags.slice(0,3).map((t) => (
              <span key={t} className="px-2 py-1 rounded-full text-xs bg-[#FFF7E6] text-[#333333]/80 border border-black/5">{t}</span>
            ))}
          </div>
        ) : null}
        <div className="mt-4 pt-4 border-t border-black/5 flex items-center gap-3">
          <a href="#" className="text-[#0057A3] font-medium hover:underline">Learn more</a>
          <a href="#donate" className="ml-auto inline-flex items-center px-3 py-2 rounded-lg bg-[#0057A3] text-white text-sm font-semibold shadow-sm hover:brightness-95">Donate</a>
        </div>
      </div>
    </div>
  )
}

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/programs`)
        const data = await res.json()
        setPrograms(data)
      } catch (e) {
        setPrograms([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="programs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">Our Programs</h2>
            <p className="text-[#333333]/80 mt-2 max-w-2xl">Education as protection, community engagement, awareness, psychosocial support, livelihoods, and policy advocacy.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-[#0057A3] font-medium hover:underline">View all</a>
        </div>

        {loading ? (
          <div className="text-center text-[#333333]/70">Loading programs…</div>
        ) : programs.length === 0 ? (
          <div className="text-center text-[#333333]/70">Programs will appear here once published.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map(p => <ProgramCard key={p.title} program={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
