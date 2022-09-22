import { Link } from 'react-router-dom'
import { GlobeHemisphereWest } from 'phosphor-react'
import styles from './HeaderBar.module.css'

export default function HeaderBar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.title}><GlobeHemisphereWest size={40} /> Trip Journal</Link>
      <div className={styles.navigation}>
        <Link to='/articles' className={styles.navItem}>Artigos</Link>
        <span className={styles.navItem}>Sobre</span>
        <Link to="/contacts" className={styles.navItem}>Contato</Link>
      </div>
    </div>
  )
}