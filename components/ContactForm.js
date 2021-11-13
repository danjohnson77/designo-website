import Hero from "./sections/Hero";
import styles from "../styles/Contact.module.scss";
import layoutStyles from "../styles/Layout.module.scss";

const ContactForm = () => {
  return (
    <Hero styleProps={styles.contact}>
      <div className={styles.text}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your
          business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a
          line.
        </p>
      </div>
      <form action="">
        <fieldset>
          <legend className={layoutStyles.hidden}>Contact Us</legend>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" />

          <label htmlFor="message">Your Message </label>
          <textarea name="message" id="message" rows="3" />

          <button>SUBMIT</button>
        </fieldset>
      </form>
    </Hero>
  );
};

export default ContactForm;
