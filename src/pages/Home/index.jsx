import HeaderBar from '../../components/HeaderBar'
import { GithubLogo, LinkedinLogo, At } from 'phosphor-react'

import styles from './Home.module.css'

export default function Home() {
  return(
    <div className='container w-75 m-h'>
      <HeaderBar />
      <articlec className={styles.article}>
        <div>
          <img
            src="https://avatars0.githubusercontent.com/u/47701050?s=460&u=beed608808e6eb287e86a9b946a110cb4153a07b&v=4" 
            alt="Profile image"
            className={styles.profileImage}  
          />
          <div className={styles.techs}>
            <a 
              href='https://github.com/IACarvalho' 
              target='_blank'
            >
                <GithubLogo size={32} weight="fill" /> Github
              </a>
            <a
              href='https://www.linkedin.com/in/israel-afonso-de-carvalho-neto/'
              target='_blank'
            >
              <LinkedinLogo size={32} weight="fill" /> Linkedin
            </a>
            <a
              href='mailto:israelcarvalhodesenvolvedor@gmail.com'
            >
              <At size={32} weight="fill" /> E-mail
            </a>
          </div>
        </div>
        <div className={styles.text}>
          <p>Olá, meu nome é Israel Afonso, sou um desenvolvedor full stack a pouco mais de dois anos e meio. Venho trabalhando em grandes projetos, principalmente na sustentação, além de fazer alguns projetos pessoais para manter meus conhecimetnos atualizados.</p>
          <p>Minha stack atualmente consiste em <strong>ReactJS</strong>, <strong>JavaScript</strong>, <strong>NodeJS</strong>, <strong>SQL</strong>, <strong>C#</strong>e <strong>React Native</strong></p>

          <div align="center" className={styles.githubPlugin}>
            <img height="180em" src="https://github-readme-stats.vercel.app/api?username=IACarvalho&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=IACarvalho&layout=compact&langs_count=7&theme=dracula"/>
          </div>
        </div>
      </articlec>
    </div>
  )
}