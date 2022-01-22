import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Loader from "../components/loader";
import More from "../components/more";
import Navbar from "../components/navbar/index";
import Seo from "../components/seo";
import Works from "../components/works";
import { ContentWrapperWithOpacity } from "../components/wrapper";
import RecentWritings from "../components/writings";

const Home: NextPage = () => {
  const [done, setDone] = useState(false);
  return (
    <>
      <Seo
        title="John Oluwakeye | Software Developer"
        description="I'm a software developer based in Nigeria with 3 years of professional experience developing web applications."
      />
      {!done && <Loader setDone={setDone} />}
      <ContentWrapperWithOpacity active={done}>
        <Navbar />
        <Hero />
        <Works />
        <More />
        <RecentWritings />
        <Footer />
      </ContentWrapperWithOpacity>
    </>
  );
};

export default Home;
