import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout title="about">
      <h1>About Page</h1>
      <p>This is an app for events</p>
      <Link href="/">Home page</Link>
    </Layout>
  );
}
