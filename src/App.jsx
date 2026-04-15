import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Projetos from './components/Projetos.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const targetId = link.getAttribute('href')
      if (targetId === '#') return
      const targetSection = document.querySelector(targetId)
      if (!targetSection) return
      e.preventDefault()
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: 'smooth',
      })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  )
}
