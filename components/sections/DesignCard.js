import React from "react";
import styles from "../../styles/Design.module.scss";

const DesignCard = ({ title, subtitle, image, category }) => {
  return (
    <section className={styles.card}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <img src={`/images/design/${category}/${image}`} alt={`${title} image`} />
    </section>
  );
};

export default DesignCard;
