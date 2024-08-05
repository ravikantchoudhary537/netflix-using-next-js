import React from 'react'
import styles from './styles/navbar.module.css';
import Link from 'next/link';


const Header = () => {
  return (
   <header className={styles.main_header}>
    <div className={styles.navbar_brand}> 
        <Link href="/">NETFLIX</Link>
    </div>

   </header>
  )
}

export default Header