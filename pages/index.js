import styles from "../styles/Home.module.scss";
import layoutStyles from "../styles/Layout.module.scss";
import traitStyles from "../styles/Trait.module.scss";
import Hero from "../components/sections/Hero";
import AboutCard from "../components/sections/AboutCard";
import TraitCard from "../components/sections/TraitCard";

export default function Home() {
  return (
    <main className={`${layoutStyles.outerGrid} ${styles.home}`}>
      <Hero styleProps={styles.hero}>
        <div className={styles.action}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
            and engaging brand experiences. Find out more about our services.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className={styles.phoneImg}>
          <img src="/images/image-hero-phone.png" alt="" />
        </div>
      </Hero>
      <div className={layoutStyles.about}>
        <AboutCard title="WEB DESIGN" category="web" />
        <AboutCard title="APP DESIGN" category="app" />
        <AboutCard title="GRAPHIC DESIGN" category="graphic" />
      </div>

      <div className={layoutStyles.traits}>
        <h2 className={layoutStyles.hidden}>Our Qualities</h2>
        <TraitCard>
          <div className={traitStyles.imgWrap}>
            <div className={traitStyles.passionate}></div>
            <img src="/images/home/illustration-passionate.svg" />
          </div>
          <div className={traitStyles.textWrap}>
            <h3>PASSIONATE</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we only create products that serve a
              purpose. We merge art, design, and technology into exciting new solutions.
            </p>
          </div>
        </TraitCard>

        <TraitCard>
          <div className={traitStyles.imgWrap}>
            <div className={traitStyles.resourceful}></div>
            <img src="/images/home/illustration-resourceful.svg" />
          </div>
          <div className={traitStyles.textWrap}>
            <h3>RESOURCEFUL</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value
              customer collaboration. It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </TraitCard>
        <TraitCard>
          <div className={traitStyles.imgWrap}>
            <div className={traitStyles.friendly}></div>
            <img src="/images/home/illustration-friendly.svg" />
          </div>
          <div className={traitStyles.textWrap}>
            <h3>FRIENDLY</h3>
            <p>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our
              customers, and we strive to give them the best experience a company can provide.
            </p>
          </div>
        </TraitCard>
      </div>
    </main>
  );
}
