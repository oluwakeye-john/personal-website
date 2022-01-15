import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon.png" />
      <link rel="canonical" href={router.pathname} />
    </Head>
  );
};

export default Seo;
