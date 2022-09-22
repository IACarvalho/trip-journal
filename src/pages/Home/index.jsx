import HeaderBar from '../../components/HeaderBar'
import style from './Home.module.css'

export default function Home() {
  return(
    <div className={style.container}>
      <HeaderBar />
      <h1>HOME</h1>
    </div>
  )
}