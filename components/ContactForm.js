import Hero from "./sections/Hero";
import styles from "../styles/Contact.module.scss";
import layoutStyles from "../styles/Layout.module.scss";
import { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({});
  const handleBlur = (e) => {
    if (e.target.value.length > 0) {
      setState({ ...state, [e.target.name]: { invalid: false, valid: true } });
    } else {
      setState({ ...state, [e.target.name]: { invalid: true, valid: false } });
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        value: e.target.value,
        invalid: e.target.value.length > 0 ? false : true,
        valid: e.target.value.length === 0 ? false : true,
      },
    });
  };

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
      <form onChange={handleChange}>
        <fieldset>
          <legend className={layoutStyles.hidden}>Contact Form</legend>

          <div
            className={`${styles.formInput} ${state?.name?.invalid ? styles.invalid : ""} ${
              state?.name?.valid ? styles.valid : ""
            }`}
          >
            <input type="text" name="name" id="name" onBlur={handleBlur} />
            <label htmlFor="name">Name</label>
            <div className={styles.error}>
              <p>
                Can't be empty<span></span>
              </p>
            </div>
          </div>

          <div
            className={`${styles.formInput} ${state?.email?.invalid ? styles.invalid : ""} ${
              state?.email?.valid ? styles.valid : ""
            }`}
          >
            <input type="email" name="email" id="email" onBlur={handleBlur} />
            <label htmlFor="email">Email Address</label>
            <div className={styles.error}>
              <p>
                Can't be empty<span></span>
              </p>
            </div>
          </div>
          <div
            className={`${styles.formInput} ${state?.phone?.invalid ? styles.invalid : ""} ${
              state?.phone?.valid ? styles.valid : ""
            }`}
          >
            <input type="tel" name="phone" id="phone" onBlur={handleBlur} />
            <label htmlFor="phone">Phone</label>
            <div className={styles.error}>
              <p>
                Can't be empty<span></span>
              </p>
            </div>
          </div>

          <div
            className={`${styles.formInput} ${state?.message?.invalid ? styles.invalid : ""} ${
              state?.message?.valid ? styles.valid : ""
            }`}
          >
            <textarea type="text" name="message" id="message" rows="3" onBlur={handleBlur} />
            <label htmlFor="message">Your Message</label>
            <div className={styles.error}>
              <p>
                Can't be empty<span></span>
              </p>
            </div>
          </div>

          <input type="submit" />
        </fieldset>
      </form>
    </Hero>
  );
};

export default ContactForm;
