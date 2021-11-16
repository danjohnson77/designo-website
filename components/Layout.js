import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Designo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/icons/favicon-32x32.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
            integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
