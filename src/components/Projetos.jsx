import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="projetos-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projetos Selecionados</h2>
          <p className="projetos-intro">Uma coleção dos meus trabalhos mais recentes em desenvolvimento web</p>
        </div>

        <div id="projetos-container" className="projetos-grid">
          {projetos.map(p => (
            <div key={p.id} className="projeto-card">
              <div className="projeto-imagem">
                <span>{p.emoji}</span>
              </div>
              <div className="projeto-conteudo">
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <div className="projeto-tecnologias">
                  {p.tecnologias.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
