import React from "react";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/SEO/seo";
import "./styles.scss";

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <Seo
        url=""
        title="Privacy Policy | Upzyde"
        description="The world around us is constantly changing and the speed at which it changes increases rapidly. In this dynamic and challenging environment, Upzyde connects the dots to ensure publishers maximise yield of their inventory."
      />
      <Layout>
        <div className="inner-container privacy-container">
          <h2>Privacy Policy</h2>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
