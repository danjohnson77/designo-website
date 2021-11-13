import Card from "../components/Card";
import layoutStyles from "../styles/Layout.module.scss";
import styles from "../styles/Locations.module.scss";

const locations = () => {
  return (
    <main className={`${styles.main}`}>
      <h1 className={layoutStyles.hidden}>Locations</h1>
      <Card styleProps={styles.card}>
        <div className={styles.text}>
          <h2>Canada</h2>
          <address>
            <div>
              <p>
                {" "}
                <strong>Designo Central Office</strong>
              </p>
              <p>3886 Wellington Street </p>
              <p>Toronto, Ontario M9C 3J5</p>{" "}
            </div>
            <div>
              <p>
                {" "}
                <strong>Contact</strong>
              </p>
              <p>P : +1 253-863-8967</p>
              <p> M : contact@designo.co</p>
            </div>
          </address>
        </div>
        <div className={`${styles.image} ${styles.canada}`}></div>
      </Card>
      <Card styleProps={styles.card}>
        <div className={styles.text}>
          <h2>Australia</h2>
          <address>
            <div>
              <p>
                {" "}
                <strong>Designo AU Office</strong>
              </p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>{" "}
            </div>
            <div>
              <p>
                {" "}
                <strong>Contact</strong>
              </p>
              <p>P : (02) 6720 9092</p>
              <p> M : contact@designo.au</p>
            </div>
          </address>
        </div>
        <div className={`${styles.image} ${styles.australia}`}></div>
      </Card>
      <Card styleProps={styles.card}>
        <div className={styles.text}>
          <h2>United Kingdom</h2>
          <address>
            <div>
              <p>
                {" "}
                <strong>Designo UK Office</strong>
              </p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>{" "}
            </div>
            <div>
              <p>
                {" "}
                <strong>Contact</strong>
              </p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </address>
        </div>
        <div className={`${styles.image} ${styles.uk}`}></div>
      </Card>
    </main>
  );
};

export default locations;
