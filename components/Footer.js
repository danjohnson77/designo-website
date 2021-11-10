import styles from "../styles/Footer.module.scss";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.action}>
          <div>
            <h2>Let's talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out how our expertise can help your business
              grow.
            </p>
          </div>
          <button>GET IN TOUCH</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <Logo styleProp={styles.footerLogo} />
          <div className={styles.line}></div>
          <Nav styleProp={styles.footerNav} />
        </div>
        <div>
          <address>
            <div>
              <p className={styles.strong}>Designo Central Office</p>
              <p> 3886 Wellington Street</p> <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p className={styles.strong}> Contact Us (Central Office) </p>
              <a href="tel:+12538638967">P : +1 253-863-8967</a> <a href="contact@designo.co">M : contact@designo.co</a>
            </div>
          </address>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
