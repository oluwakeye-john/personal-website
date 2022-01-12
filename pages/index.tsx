import type { NextPage } from "next";
import Hero from "../components/hero";
import More from "../components/more";
import Navbar from "../components/navbar/index";
import Seo from "../components/seo";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="John Oluwakeye | Software Developer" />
      <Navbar />
      <Hero />
      <Works />
      <More />
    </>
  );
};

export default Home;
