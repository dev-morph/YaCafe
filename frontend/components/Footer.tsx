import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Footer</span>
      <Link href="/category">
        <span>Home</span>
      </Link>
      <Link href="/login">
        <span>MenuBtn</span>
      </Link>
      <Link href="/signup">
        <span>회원가입</span>
      </Link>
    </footer>
  )
}

export default Footer
