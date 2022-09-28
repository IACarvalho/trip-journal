import { Link } from 'react-router-dom'
import { GlobeHemisphereWest } from 'phosphor-react'

export default function HeaderBar() {
  return (
    <nav class="navbar navbar-expand-lg" style={{
      background: 'var(--primary)',
    }}>
      <div class="container-fluid">
        <Link class="navbar-brand text-light" to="/">
          <GlobeHemisphereWest size={32} /> Trip Journal
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link text-light" to="/">Home</Link>
            <Link class="nav-link text-light" to="/articles">Artigos</Link>
            <Link class="nav-link text-light" to="#">Projetos</Link>
            <Link class="nav-link text-light" to="/contacts">Contatos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}