import Head from "next/head";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon.png" />
    </Head>
  );
};

export default Seo;
