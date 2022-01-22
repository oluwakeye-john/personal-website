import Head from "next/head";
import social from "../data/social";

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon0.png" />
      <link rel="canonical" href="https://oluwakeye.com" />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={social.me} />
      <meta property="og:url" content="https://oluwakeye.com" />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default Seo;
