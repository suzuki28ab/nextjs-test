import styles from '@/components/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>
        <Link href="/">
          <a>ふったーですう</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/counter">
              <a>カウンター</a>
            </Link>
          </li>
          <li>
            <a href="#">SERVICE</a>
          </li>
          <li>
            <a href="#">COMPANY</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
