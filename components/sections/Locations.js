import styles from "../../styles/Locations.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <section className={styles.locations}>
      <h2 className={layoutStyles.hidden}>Locations</h2>
      <LocationCard title="CANADA" image="/images/about/illustration-canada.svg" />
      <LocationCard title="AUSTRALIA" image="/images/about/illustration-australia.svg" />
      <LocationCard title="UNITED KINGDOM" image="/images/about/illustration-united-kingdom.svg" />
    </section>
  );
};

export default Locations;
