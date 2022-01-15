export interface Work {
  image: string;
  title: string;
  liveUrl: string;
  categories: string[];
  index: number;
}

const works: Work[] = [
  {
    index: 1,
    image: "v1642181595/portfolio/projects/smarg_iebjjx.png",
    title: "Smarg",
    liveUrl: "https://smarg.io",
    categories: ["Fintech"],
  },
  {
    index: 2,
    image: "v1642181595/portfolio/projects/rutopay_mbxfgl.png",
    title: "Rutopay",
    liveUrl: "https://rutopay.com",
    categories: ["Fintech"],
  },
  {
    index: 3,
    image: "v1642181598/portfolio/projects/wallet-alert_fnnedp.png",
    title: "Wallet Alert",
    liveUrl: "http://wallet-alert.herokuapp.com",
    categories: ["Crypto"],
  },
  {
    index: 4,
    image: "v1642181601/portfolio/projects/pollussports_v96zqt.png",
    title: "Pollussports",
    liveUrl: "https://pollusport-frontend.vercel.app/",
    categories: ["Ecommerce"],
  },
  {
    index: 5,
    image: "v1642181606/portfolio/projects/jamz_rpr8f4.png",
    title: "Jamz",
    liveUrl: "https://jamzz.netlify.app",
    categories: ["Entertainment"],
  },
  {
    index: 6,
    image: "v1642181582/portfolio/projects/credmi_awjkk9.png",
    title: "Credmi",
    liveUrl: "https://credmi.co",
    categories: ["Fintech"],
  },
  {
    index: 7,
    image: "v1642181600/portfolio/projects/farmcrowdy_d9yw2t.png",
    title: "Farmcrowdy Foods",
    liveUrl: "https://foods.farmcrowdy.com",
    categories: ["Ecommerce"],
  },
  {
    index: 8,
    image: "v1642181592/portfolio/projects/hyperdrive_wu7mne.png",
    title: "Hyperdrive",
    liveUrl: "https://xhyperdrive.netlify.app",
    categories: [],
  },
];

export default works;
