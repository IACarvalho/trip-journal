import { Link } from 'react-router-dom'

import style from './HeaderBar.module.css'

export default function HeaderBar() {
  return (
    <div className={style.container}>
      <Link to="/" className={style.title}>Trip Journal</Link>
    </div>
  )
}