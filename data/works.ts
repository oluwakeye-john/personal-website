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
    image: "v1642461470/portfolio/projects/Group_5_y5f6ab.png",
    title: "Smarg",
    liveUrl: "https://smarg.io",
    categories: ["Fintech"],
  },
  {
    index: 2,
    image: "v1642464224/portfolio/projects/Slice_2_q5rmuw.png",
    title: "Wallet Alert",
    liveUrl: "http://wallet-alert.herokuapp.com",
    categories: ["Crypto"],
  },
  {
    index: 3,
    image: "v1642461761/portfolio/projects/Group_7_eilqjf.png",
    title: "Rutopay",
    liveUrl: "https://rutopay.com",
    categories: ["Fintech"],
  },
  {
    index: 4,
    image: "v1642465344/portfolio/projects/Group_24_d8l1ay.png",
    title: "Pollussports",
    liveUrl: "https://pollusport-frontend.vercel.app/",
    categories: ["E-Commerce"],
  },
  {
    index: 5,
    image: "v1642461319/portfolio/projects/Group_3_rphcje.png",
    title: "Jamz",
    liveUrl: "https://jamzz.netlify.app",
    categories: ["Entertainment"],
  },
  {
    index: 6,
    image: "v1642465347/portfolio/projects/Group_22_1_k2rjjp.png",
    title: "Credmi",
    liveUrl: "https://credmi.co",
    categories: ["Fintech"],
  },
  {
    index: 7,
    image: "v1642463052/portfolio/projects/Group_12_nhwzsc.png",
    title: "Farmcrowdy Foods",
    liveUrl: "https://foods.farmcrowdy.com",
    categories: ["E-Commerce"],
  },
  {
    index: 8,
    image: "v1642462352/portfolio/projects/Group_9_yqiafd.png",
    title: "Hyperdrive",
    liveUrl: "https://xhyperdrive.netlify.app",
    categories: [],
  },
];

export default works;
