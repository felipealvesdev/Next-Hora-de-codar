import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
      <div className={styles.container}>
      <h1>Barra de navegação</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre</Link></li>
        <li><Link href="/todos">Todos</Link></li>
      </ul>
      
      
      </div>
    )
  }
  