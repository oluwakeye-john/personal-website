import type { NextPage } from "next";
import Hero from "../components/hero";
import Navbar from "../components/navbar/index";
import Seo from "../components/seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="John Oluwakeye | Software Developer" />
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
