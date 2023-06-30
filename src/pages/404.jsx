import Link from "next/link";


export default function Erro(){

    return(
        <>
            <h1>404</h1>
            <p>Esta página não existe.</p>
            <Link href={`/`}>Voltar para home</Link>
        </>
    )
}