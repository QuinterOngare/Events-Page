import Head from "next/head";
//package comes with the next.js thats why it doesn't have .
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";
import next from "next";

export default function Layout({ title, keyword, description, children }) {
  // can be imported using anyname(export default)
  const router = useRouter();
  //  routers function is to read your path
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
      {/* children is special name given to us by next js so anything btwn Components  elements and layout are children */}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keyword: "Music, Dance, Rock, Bands",
};
