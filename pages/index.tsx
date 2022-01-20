import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Loader from "../components/loader";
import More from "../components/more";
import Navbar from "../components/navbar/index";
import Seo from "../components/seo";
import Works from "../components/works";
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
      <Wrapper alt={done}>
        <Navbar />
        <Hero />
        <Works />
        <More />
        <RecentWritings />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ alt?: boolean }>`
  width: ${({ alt }) => (alt ? "100%" : 0)};
  height: ${({ alt }) => (alt ? "100%" : 0)};
  overflow: ${({ alt }) => (alt ? "visible" : "hidden")};
  opacity: ${({ alt }) => (alt ? 1 : 0)};

  transition: opacity 0.5s;
`;

export default Home;
