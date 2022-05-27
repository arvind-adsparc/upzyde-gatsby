import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import Seo from "../components/SEO/seo";
import "../markdown-pages/styles.scss";

const PrivacyPolicy = ({ data }) => {
  console.log("data", data);
  const { markdownRemark } = data;

  const { frontmatter, html } = markdownRemark;

  return (
    <React.Fragment>
      <Seo
        url=""
        title="Privacy Policy | Upzyde"
        description="The world around us is constantly changing and the speed at which it changes increases rapidly. In this dynamic and challenging environment, Upzyde connects the dots to ensure publishers maximise yield of their inventory."
      />
      <Layout>
        <div className="inner-container privacy-container">
          <h2>{frontmatter.title}</h2>

          <div
            className="section-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PrivacyPolicy;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
