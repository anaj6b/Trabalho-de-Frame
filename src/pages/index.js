import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Projeto Bocaweb </title>
      </Head>
      <Navbar/>
      <div className={styles.principal}>
      <h1> Projeto Bocaweb </h1> 
      <p><a href="\objetos"> Ver lista de objetos </a></p>
      </div>
      <Footer/>
    </div>
  )
}
