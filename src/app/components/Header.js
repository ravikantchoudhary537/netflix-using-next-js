import React from 'react'
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Nav from './Nav';


const Header = () => {
  return (
   <header className={styles.main_header}>
    <div className={styles.navbar_brand}> 
        <Link href="/">
        <img src='https://imgs.search.brave.com/2BhSv6raW7E3wOPTAUGGWArZjbqzyZvd68eVqR8ezn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw' width={90} height={70}></img>
        </Link>
    </div>
        <Nav/>

   </header>
  )
}

export default Header