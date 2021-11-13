import layoutStyles from "../styles/Layout.module.scss";
import ContactForm from "../components/ContactForm";
import Locations from "../components/sections/Locations";

const contact = () => {
  return (
    <main className={layoutStyles.outerGrid}>
      <ContactForm />
      <Locations />
    </main>
  );
};

export default contact;
