import HeaderBar from "../../components/HeaderBar";

import styles from './Articles.module.css'

export default function Articles() {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <h1>Artigos</h1>
    </div>
  )
}