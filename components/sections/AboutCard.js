import styles from "../../styles/About.module.scss";

const AboutCard = ({ title, category }) => {
  return (
    <section className={`${styles[category]} ${styles.about}`}>
      <h2>{title}</h2>
      <p>
        VIEW PROJECTS{" "}
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd" />
        </svg>
      </p>
    </section>
  );
};

export default AboutCard;
