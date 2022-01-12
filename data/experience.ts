export interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
  location: string;
}

const experiences: Experience[] = [
  {
    startDate: "July 2021",
    endDate: "Present",
    company: "Helicarrier",
    description:
      "The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info. The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info.",
    location: "Lagos, Nigeria",
    position: "Frontend Engineer",
  },
  {
    startDate: "August 2020",
    endDate: "May 2021",
    company: "Credmi",
    description:
      "The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info. The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info.",
    location: "Lagos, Nigeria",
    position: "Software Developer",
  },
  {
    startDate: "May 2019",
    endDate: "March 2021",
    company: "F&K Savings",
    description:
      "The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info. The Flutterwave API only returns the bank name and account number. I have no idea how dollar payments can be made with just that info.",
    location: "Ibadan, Nigeria",
    position: "Frontend Engineer",
  },
];
export default experiences;
