import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keyword, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      {router.pathname === "/" && <ShowCase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keyword: "Music, Dance, Rock, Bands",
};
