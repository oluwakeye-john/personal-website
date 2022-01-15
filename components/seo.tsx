import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon.png" />
      <link rel="canonical" href="https://oluwakeye.com" />

      <script
        defer
        src="//cdnjs.cloudflare.com/ajax/libs/SVG-Morpheus/0.3.2/svg-morpheus.js"
      ></script>
    </Head>
  );
};

export default Seo;
