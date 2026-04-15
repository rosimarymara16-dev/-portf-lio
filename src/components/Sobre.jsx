export default function Sobre() {
  const skills = [
    { icon: '💻', name: 'HTML5' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '⚡', name: 'JavaScript' },
    { icon: '📱', name: 'Responsive' },
    { icon: '🔀', name: 'Git' },
    { icon: '🚀', name: 'GitHub' },
  ]

  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-imagem">
            <div className="image-wrapper">
              <img src="/perfil.jpeg" alt="Rosimary - Desenvolvedora Web" className="foto-perfil" />
            </div>
          </div>
          <div className="sobre-texto">
            <span className="section-label">Sobre mim</span>
            <h2 className="section-title">Rosimary</h2>
            <p className="sobre-intro">Olá! Sou estudante do curso de Tecnologia em Sistemas de Internet, focada em desenvolvimento front-end e criação de interfaces modernas.</p>
            <p>Com conhecimento sólido em HTML5, CSS3 e JavaScript, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades para criar experiências digitais que fazem a diferença.</p>

            <div className="habilidades">
              <h3>Stack</h3>
              <div className="skills-grid">
                {skills.map(s => (
                  <div key={s.name} className="skill-item">
                    <span className="skill-icon">{s.icon}</span>
                    <span className="skill-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
