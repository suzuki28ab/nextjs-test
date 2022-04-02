import styles from '@/components/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="#">へっだーだよ</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">ABOUT</a>
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
