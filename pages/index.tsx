import type { NextPage } from "next";
import Footer from "../components/footer";
import Hero from "../components/hero";
import More from "../components/more";
import Navbar from "../components/navbar/index";
import Seo from "../components/seo";
import Works from "../components/works";
import RecentWritings from "../components/writings";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="John Oluwakeye | Software Developer"
        description="I'm a software developer based in Ibadan, Nigeria. I have over 3 years of professional experience developing web applications."
      />
      <Navbar />
      <Hero />
      <Works />
      <More />
      <RecentWritings />
      <Footer />
    </>
  );
};

export default Home;
