export interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
  location: string;
  doings?: string[];
}

const experiences: Experience[] = [
  {
    startDate: "July 2021",
    endDate: "Present",
    company: "Helicarrier",
    description:
      "Helicarrier develops crypto infrastructure for Africa (Buycoins / Buycoins Pro / Sendcash / Sendcash Pay / Ramp). At Helicarrier, I've",
    doings: [
      "Implemented the P2P feature on Sendcash via CashApp and Zelle",
      "Fixed bugs and maintained the Buycoins / Buycoins Pro apps",
      "Improved the performance of the Single Sign-On JavaScript SDK ",
    ],
    location: "Lagos, Nigeria",
    position: "Frontend Engineer",
  },
  {
    startDate: "May 2021",
    endDate: "Present",
    company: "Smarg",
    description:
      "Smarg is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers. At Smarg, I:",
    doings: [
      "Developed the new customer facing website",
      "Improved the code structure and gave code reviews",
      "Implemented the new payment method",
      "Setup workflows and pipelines to aid development process",
    ],
    location: "Lagos, Nigeria.",
    position: "Frontend Developer",
  },
  {
    startDate: "August 2020",
    endDate: "April 2021",
    company: "F&K Savings",
    description:
      "F&K Savings is a Nigerian FinTech Company that helps you to save, invest, and achieve your financial goals. As a Frontend and Mobile Developer in the Tech team, I",
    doings: [
      "Collaborated with other developers to build the new customer facing website",
      "Improved the load-time of the user dashboard and the overall user experience",
      "Developed the agent dashboard from scratch",
      "Integrated analytics tools which effectively provided valuable insight to the growth team",
    ],
    location: "Ibadan, Nigeria",
    position: "Frontend Developer",
  },
  {
    startDate: "March 2019",
    endDate: "May 2020",
    company: "Eaveswall",
    description:
      "Engage in the interesting discussions and gists that happen on the eaves blogging site and the media wall for all. At Eaveswall, I:",
    doings: [
      "Developed custom monetization logic and paywall for authors.",
      "Implemented a secure subscription system using Paystack",
      "Built a full fledged Content Management System",
    ],
    location: "Ibadan, Nigeria",
    position: "Software Developer",
  },
];
export default experiences;
