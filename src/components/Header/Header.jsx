import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerDiv}>
      <header>
        <nav className={styles.headerNav}>
          <div>
            
            <ul
              className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
            >
              <li>
                <Link to="/">
                  <h2>Inicio</h2>
                </Link>
              </li>
              <li>
                <Link to="/Carousel">
                  <h2>Carousel</h2>
                </Link>
              </li>
              <li>
                <Link to="/Empleados">
                  <h2>Empleados</h2>
                </Link>
              </li>
            </ul>
            <div
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;