import Link from "next/link";
import Layout from "../Components/Layout";
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Layout title="Page Not Found">
        <div className={styles.error}>
          <hi>404</hi>
          <h3>sorry, there is nothing here</h3>
          <Link href="/">Go to home page</Link>
        </div>
      </Layout>
    </div>
  );
}
