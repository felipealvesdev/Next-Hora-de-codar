import styles from '@/styles/index.module.css'
import Head from 'next/head'
import Image from 'next/image'
 

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Página principal</title>
      </Head>
      <h1>Página principal</h1>
     
      <Image
        src="/images/canarinho.jpg"
        width="550"
        height="300"
        alt='CanarinhoBrasil'/>
    </div>
  )
}
