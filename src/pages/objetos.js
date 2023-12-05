import React from 'react';
import styles from '../styles/Pages.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';


function Objetos({ objetos }) {
    return (

        <div >
            <Navbar/>
            <div className={styles.lista}>
            <h1> Lista de Objetos </h1>
            {objetos.map((objetos, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={objetos._id}> <p> {objetos.nome} </p> </div>
                </Link>
            ))}
            </div>
            <Footer/>
        </div>
        
       
        
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objetos = await repo;
    return {
        props: { objetos }
    }
})
export default Objetos;