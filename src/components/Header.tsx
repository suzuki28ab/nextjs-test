import styles from '@/components/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>へっだーだよ</a>
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
    </header>
  )
}

export default Header
