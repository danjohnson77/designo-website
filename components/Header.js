import styles from "../styles/Header.module.scss";
import Logo from "./Logo";
import Nav from "./Nav";
import { useRef } from "react";

const Header = () => {
  const checkboxRef = useRef();

  const handleClick = (header) => {
    if (header) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.toggle}>
        <label htmlFor="toggle">Open Navigation Menu</label>
        <input type="checkbox" name="toggle" ref={checkboxRef} id="toggle" />
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" className={styles.hamburger}>
          <g fill="#1D1C1E" fillRule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
          </g>
        </svg>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className={styles.close}>
          <path
            d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
            fill="#1D1C1E"
            fillRule="evenodd"
          />
        </svg>
        <Nav handleClick={handleClick} header={true} />
      </div>
    </header>
  );
};

export default Header;
