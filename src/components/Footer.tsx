import styles from '@/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h1>
        <a href="#">ふったーですう</a>
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
    </footer>
  )
}

export default Footer
