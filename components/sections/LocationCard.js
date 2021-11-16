import styles from "../../styles/Locations.module.scss";

const LocationCard = ({ title, image }) => {
  return (
    <section>
      <h3>{title}</h3>
      <div className={styles.imgWrap}>
        <div className={styles.passionate}></div>
        <img src={image} alt={`${title} image`} />
      </div>

      <a href="/locations">
        <button>SEE LOCATION</button>
      </a>
    </section>
  );
};

export default LocationCard;
