import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Modal from '../Modal/Modal'

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Mini <span>blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/'
            className={({ isActive }) => (isActive ? styles.active : "")}>
              Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
            <NavLink to='/login'
              className={({ isActive }) => (isActive ? styles.active : "")}>
                Login
            </NavLink>
            </li>
            <li>
              <NavLink to='/register'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about'
            className={({ isActive }) => (isActive ? styles.active : "")}>
              Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={handleLogoutClick} className={styles.btnLogout}>Sair</button>
          </li>
        )}
      </ul>
      <Modal
        show={showLogoutModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
        message="Tem certeza que deseja sair?"
      />
    </nav>
  )
}

export default Navbar