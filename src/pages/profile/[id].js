import Navbar from '@/components/Navbar';
import styles from '../../styles/Pages.module.css';
import Footer from '@/components/Footer';
function Objeto({ objetos = {} }) {
    return (
       
        <div >
            <Navbar/>
            <div className={styles.obj}>
            <fieldset>
            
            <p>Nome do objeto: {objetos.nome}</p>
            <br></br>
            <p>Usuário: {objetos.usuario}</p>
            <br></br>
            <p>Descrição: {objetos.descricao}</p>
            </fieldset>
            </div>
             <Footer/>
        </div>
        
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objetos = await repo[context.params.id];
    return {
        props: { objetos }
    }
})
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
        ],
        fallback: true,
    };
}
export default Objeto;
