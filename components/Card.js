import styles from "../styles/Card.module.scss";

const Card = ({ children, styleProps }) => {
  return <section className={`${styles.card} ${styleProps}`}>{children}</section>;
};

export default Card;
