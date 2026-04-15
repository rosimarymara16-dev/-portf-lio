import { useState, useEffect } from 'react'

export default function Header() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setActive(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) setActive(false)
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>ROSIMARY</h1>
        </div>
        <ul className={`menu ${active ? 'active' : ''}`}>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#projetos" onClick={handleLinkClick}>Projetos</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
        </ul>
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setActive(a => !a)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
