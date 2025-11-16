import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Values from './components/Values'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Top nav (simple MVP) */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-black/5 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-[#0057A3]">Caprecon</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programs" className="hover:text-[#0057A3]">Programs</a>
            <a href="#impact" className="hover:text-[#0057A3]">Impact</a>
            <a href="#values" className="hover:text-[#0057A3]">Values</a>
            <a href="#contact" className="hover:text-[#0057A3]">Contact</a>
            <a href="#donate" className="ml-2 inline-flex items-center px-3 py-2 rounded-lg bg-[#FF8C00] text-white font-semibold shadow-sm hover:brightness-95">Donate</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Stats />
        <Programs />
        <Values />

        {/* Newsletter / Footer */}
        <section className="bg-[#FFF7E6]" id="contact">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-semibold">Stay updated</h3>
              <p className="text-[#333333]/80 mt-1">Get stories and impact updates in your inbox.</p>
              <form className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="col-span-2 h-11 px-4 rounded-lg border border-black/10 focus:outline-none focus:ring-4 focus:ring-[#0057A3]/30" placeholder="Email address" />
                <button className="h-11 rounded-lg bg-[#0057A3] text-white font-semibold shadow-sm hover:brightness-95">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0057A3] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-white">Caprecon</div>
              <p className="text-white/80 text-sm mt-1">Protecting and empowering children in crisis and displacement.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#programs" className="hover:underline">Programs</a>
              <a href="#impact" className="hover:underline">Impact</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-white/70">© {new Date().getFullYear()} Caprecon International Development and Humanitarian Foundation</div>
        </div>
      </footer>
    </div>
  )
}

export default App
