import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon.png" />
      <link rel="canonical" href="https://oluwakeye.com" />

      <meta name="description" content={description} />

      <script
        defer
        src="//cdnjs.cloudflare.com/ajax/libs/SVG-Morpheus/0.3.2/svg-morpheus.js"
      ></script>
    </Head>
  );
};

export default Seo;
