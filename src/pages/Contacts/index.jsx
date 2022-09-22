import { 
  GithubLogo,
  LinkedinLogo,
  Envelope
} from 'phosphor-react'

import HeaderBar from '../../components/HeaderBar'

import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <div className={styles.main}>
        <div className={styles.Contacts}>
          <span className={styles.itemList} >
            <a 
              href="https://github.com/IACarvalho"
              target='_blank'
            >
              <GithubLogo size={32} weight="fill" /> <span>Github</span>
            </a>
          </span>
          <span className={styles.itemList}>
            <a 
              href="https://www.linkedin.com/in/israel-afonso-de-carvalho-neto/"
              target='_blank'
            >
              <LinkedinLogo size={32} weight="fill" /> <span>Linkedin</span>
            </a>
          </span>
          <span className={styles.itemList}>
            <a href="mailto:israel_carvalho@tripjournal.online">
              <Envelope size={32} weight="fill" /> <span>israel_carvalho@tripjournal.online</span>
            </a>
          </span>
          <span className={styles.itemList}>
            <a href="mailto:israelcarvalhodesenvolvedor@gmail.com">
              <Envelope size={32} weight="fill" /> <span>israelcarvalhodesenvolvedor@gmail.com</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}