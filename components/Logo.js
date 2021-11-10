import styles from "../styles/Logo.module.scss";

const Logo = ({ styleProp = null }) => {
  return (
    <a href="/" style={{ display: "block" }} className={styleProp}>
      <div className={styles.logo}>
        <span className={styles.circle}>
          <span></span>
        </span>
        <span className={styles.name}>DESIGNO</span>
      </div>
    </a>
  );
};

export default Logo;
