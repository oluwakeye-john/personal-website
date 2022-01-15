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
      "I've undertaken more senior responsibilities in addition to my previous role. While advocating for the brand within the company, I help make sure the work we produce adheres to our brand standards by providing guidance and mentorship to other members of the team. I am accountable for my projects as a design lead for their entire lifecycle from conception to completion, and responsible in presenting each stage to stakeholders and the team with rationale for my design decisions. ",
    location: "Lagos, Nigeria",
    position: "Frontend Engineer",
  },
  {
    startDate: "May 2021",
    endDate: "Present",
    company: "Smarg",
    description:
      "I've undertaken more senior responsibilities in addition to my previous role. While advocating for the brand within the company, I help make sure the work we produce adheres to our brand standards by providing guidance and mentorship to other members of the team. I am accountable for my projects as a design lead for their entire lifecycle from conception to completion, and responsible in presenting each stage to stakeholders and the team with rationale for my design decisions. ",
    location: "Lagos, Nigeria",
    position: "Software Developer",
  },
  {
    startDate: "August 2020",
    endDate: "April 2021",
    company: "F&K Savings",
    description:
      "F&K Savings is a Nigerian FinTech Company that helps you to save, invest, and achieve your financial goals. As a Frontend and Mobile Developer in the Tech team, our focus was good user experience, Test Driven Development(TDD) and a Fast and Secure Payment Interface.",
    location: "Ibadan, Nigeria",
    position: "Frontend Developer",
  },
  {
    startDate: "March 2019",
    endDate: "May 2020",
    company: "Eaveswall",
    description:
      "Engage in the interesting discussions and gists that happen on the eaves blogging site and the media wall for all. My team and I built Eaveswall using tools like styled-components, Gatsby and Firebase. At Eaveswall, we focused on optimisation, performance and great user experience. The project comprised of a full fledged Content Management System(CMS) and a payment system",
    location: "Ibadan, Nigeria",
    position: "Software Developer",
  },
];
export default experiences;
