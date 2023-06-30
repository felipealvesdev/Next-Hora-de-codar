import Head from 'next/head'
import Link from 'next/link'
 

export default function About() {
  return (
    <div>
      <Head>
        <title>Sobre</title>

      </Head>
      <h1>Pagina About</h1>
      <Link href="/">Voltar para Home</Link>
    </div>
  )
}
