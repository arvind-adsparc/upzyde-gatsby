import * as React from "react";
import Seo from "../components/SEO/seo";
import Hero from "../components/Hero/hero";
import Layout from "../components/Layout/layout";
import Overview from "../components/Overview/overview";
import Channels from "../components/Channels/channels";
import Features from "../components/Features/features";
import Benefits from "../components/Benefits/benefits";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo
        url=""
        title="Header Bidding Solution - Increase your yield by up to 50%!"
        description="The world around us is constantly changing and the speed at which it changes increases rapidly. In this dynamic and challenging environment, Upzyde connects the dots to ensure publishers maximise yield of their inventory."
      />

      <Layout>
        <Hero />
        <Overview />
        <Channels />
        <Features />
        <Benefits />
        <About />
        <Contact />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
