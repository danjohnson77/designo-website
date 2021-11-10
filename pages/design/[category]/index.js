import layoutStyles from "../../../styles/Layout.module.scss";
import styles from "../../../styles/Design.module.scss";
import Hero from "../../../components/sections/Hero";
import DesignCard from "../../../components/sections/DesignCard";

const index = ({ data, category }) => {
  const renderProjects = () => {
    return data.projects.map((project, i) => {
      return (
        <li>
          <DesignCard
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            category={category}
            key={i}
          />
        </li>
      );
    });
  };

  return (
    <main className={`${layoutStyles.outerGrid}`}>
      <Hero styleProps={styles.hero}>
        <h1>{data.hero.title}</h1>
        <p>{data.hero.subtitle}</p>
      </Hero>
      <h2 className={layoutStyles.hidden}>Projects</h2>
      <ul className={styles.projectList}>{renderProjects()}</ul>
    </main>
  );
};

export default index;

const pages = {
  web: {
    hero: {
      title: "Web Design",
      subtitle: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    },
    projects: [
      {
        title: "Express",
        subtitle: "A multi-carrier shipping website for ecommerce businesses",
        image: "image-express.jpg",
      },
      {
        title: "Transfer",
        subtitle: "Site for low-cost money transfers and sending money within seconds",
        image: "image-transfer.jpg",
      },
      {
        title: "Photon",
        subtitle: "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "image-photon.jpg",
      },
      {
        title: "Builder",
        subtitle: "Connects users with local contractors based on their location",
        image: "image-builder.jpg",
      },
      {
        title: "Blogr",
        subtitle: "Blogr is a platform for creating an online blog or publication",
        image: "image-blogr.jpg",
      },
      {
        title: "Camp",
        subtitle: "Get expert training in coding, data, design, and digital marketing",
        image: "image-camp.jpg",
      },
    ],
  },
  app: {
    hero: {
      title: "App Design",
      subtitle: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    },
    projects: [
      {
        title: "Airfilter",
        subtitle: "Solving the problem of poor indoor air quality by filtering the air",
        image: "image-airfilter.jpg",
      },
      {
        title: "Eyecam",
        subtitle: "Product that lets you edit your favorite photos and videos at any time",
        image: "image-eyecam.jpg",
      },
      {
        title: "Faceit",
        subtitle: "Get to meet your favorite internet superstar with the faceit app",
        image: "image-faceit.jpg",
      },
      {
        title: "Todo",
        subtitle: "A todo app that features cloud sync with light and dark mode",
        image: "image-todo.jpg",
      },
      {
        title: "Loopstudios",
        subtitle: "A VR experience app made for Loopstudios",
        image: "image-loopstudios.jpg",
      },
    ],
  },
  graphic: {
    hero: {
      title: "Graphic Design",
      subtitle: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    },
    projects: [
      {
        title: "Tim Brown",
        subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: "image-change.jpg",
      },
      {
        title: "Boxed Water",
        subtitle: "A simple packaging concept made for Boxed Water",
        image: "image-boxed-water.jpg",
      },
      {
        title: "Science!",
        subtitle: "A poster made in collaboration with the Federal Art Project",
        image: "image-science.jpg",
      },
    ],
  },
};

export async function getStaticProps({ params }) {
  return { props: { data: pages[params.category], category: params.category }, revalidate: 10 };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(pages).map((category) => `/design/${category}`) || [],
    fallback: "blocking",
  };
}
