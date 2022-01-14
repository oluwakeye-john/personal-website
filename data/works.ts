export interface Work {
  image: string;
  title: string;
  liveUrl?: string;
}

const works: Work[] = [
  {
    image: "/images/projects/smarg.png",
    title: "Smarg",
    liveUrl: "https://smarg.io",
  },
  {
    image: "/images/projects/rutopay.png",
    title: "Rutopay",
    liveUrl: "https://rutopay.com",
  },
  {
    image: "/images/projects/wallet-alert.png",
    title: "Wallet Alert",
    liveUrl: "http://wallet-alert.herokuapp.com",
  },
  {
    image: "/images/projects/jamz.png",
    title: "Jamz",
    liveUrl: "https://jamzz.netlify.app",
  },
  {
    image: "/images/projects/credmi.png",
    title: "Credmi",
    liveUrl: "https://credmi.co",
  },
  {
    image: "/images/projects/farmcrowdy.png",
    title: "Farmcrowdy Foods",
    liveUrl: "https://foods.farmcrowdy.com",
  },
  {
    image: "/images/projects/hyperdrive.png",
    title: "Hyperdrive",
    liveUrl: "https://xhyperdrive.netlify.app",
  },
];

export default works;
