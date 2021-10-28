import Head from "next/head";
import styles from "../styles/layout.module.css";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
      </Head>
      <div classname={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaulprops = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keyword: "Music, Dance, Rock, Bands",
};
