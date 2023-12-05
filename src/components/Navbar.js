import styles from '../styles/Components.module.css'
export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li>
                    <a href='/'> Home </a>
                </li>
                <li>
                    <a href='/objetos'> Objetos</a>
                </li>
               
            </ul>
        </div>
    )
}