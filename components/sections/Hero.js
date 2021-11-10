import styles from "../../styles/Hero.module.scss";

const Hero = ({ children, styleProps = null }) => {
  return <section className={`${styles.hero} ${styleProps}`}>{children}</section>;
};

export default Hero;
