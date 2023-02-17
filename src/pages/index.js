import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function Index() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline} (Coming soon)</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              Get s️tarted
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Build awesmoe command line tools with Ruby"
    >
      <Index />
    </Layout>
  );
}
