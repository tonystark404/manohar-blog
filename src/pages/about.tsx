/* eslint-disable import/no-extraneous-dependencies */
import { useConfig } from "gatsby-theme-advanced";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../themes/amaranth";


const AboutPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
      </div>
      <div>
        <h1>About</h1>
        <p>
          This is the about page of Manohar&lsquo;s Personal blog
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
