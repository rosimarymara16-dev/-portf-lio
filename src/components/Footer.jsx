export default function Footer() {
  return (
    <footer id="contato">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-title">Vamos trabalhar juntos?</h2>
            <p className="footer-subtitle">Entre em contato para discutir seu próximo projeto</p>
          </div>
          <div className="footer-links">
            <div className="footer-info">
              <h3>Contato</h3>
              <a href="mailto:rosimarymara16@gmail.com" className="footer-link">rosimarymara16@gmail.com</a>
            </div>
            <div className="footer-social">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://github.com/rosimarymara16-dev" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Rosimary. Desenvolvido com dedicação.</p>
        </div>
      </div>
    </footer>
  )
}
