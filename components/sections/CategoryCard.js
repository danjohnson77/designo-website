import styles from "../../styles/Category.module.scss";

const CategoryCard = ({ title, category }) => {
  return (
    <section className={`${styles[category]} ${styles.category}`}>
      <h2>{title}</h2>
      <a href={`/design/${category}`}>
        VIEW PROJECTS{" "}
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd" />
        </svg>
      </a>
    </section>
  );
};

export default CategoryCard;
