import { Link } from 'react-router-dom'
import { GlobeHemisphereWest } from 'phosphor-react'

export default function HeaderBar() {
  return (
    <nav className='navbar' style={{
      background: 'var(--primary)',
    }}>
      <div className="container-fluid">
        <Link to="/" className='navbar-brand'><GlobeHemisphereWest size={40} /> Trip Journal</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/articles" className="nav-link">Artigos</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projetos</Link>
            </li>
            <li className="navitem">
              <Link to="/contact" className="nav-link">Contato</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}