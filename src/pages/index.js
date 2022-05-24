import * as React from "react";
import Seo from "../components/SEO/seo";
import Hero from "../components/Hero/hero";
import Layout from "../components/Layout/layout";
import Overview from "../components/Overview/overview";

// styles
// const pageStyles = {
//   color: "#232129",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo
        url=""
        title="Header Bidding Solution - Increase your yield by up to 50%!"
        description="The world around us is constantly changing and the speed at which it changes increases rapidly. In this dynamic and challenging environment, Upzyde connects the dots to ensure publishers maximise yield of their inventory."
      />

      <title>Home Page</title>

      <Layout>
        <Hero />
        <Overview />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
