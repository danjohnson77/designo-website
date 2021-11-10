import styles from "../../styles/Trait.module.scss";

const TraitCard = ({ children }) => {
  return <section className={styles.trait}>{children}</section>;
};

export default TraitCard;
