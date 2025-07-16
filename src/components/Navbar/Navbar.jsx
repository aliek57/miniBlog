import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Mini <span>blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar