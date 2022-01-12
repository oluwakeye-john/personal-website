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
      "I’ve undertaken more senior responsibilities in addition to my previous role. While advocating for the brand within the company, I help make sure the work we produce adheres to our brand standards by providing guidance and mentorship to other members of the team. I am accountable for my projects as a design lead for their entire lifecycle from conception to completion, and responsible in presenting each stage to stakeholders and the team with rationale for my design decisions. ",
    location: "Lagos, Nigeria",
    position: "Frontend Engineer",
  },
  {
    startDate: "August 2020",
    endDate: "May 2021",
    company: "Credmi",
    description:
      "I’ve undertaken more senior responsibilities in addition to my previous role. While advocating for the brand within the company, I help make sure the work we produce adheres to our brand standards by providing guidance and mentorship to other members of the team. I am accountable for my projects as a design lead for their entire lifecycle from conception to completion, and responsible in presenting each stage to stakeholders and the team with rationale for my design decisions. ",
    location: "Lagos, Nigeria",
    position: "Software Developer",
  },
  {
    startDate: "May 2019",
    endDate: "March 2021",
    company: "F&K Savings",
    description:
      "I’ve undertaken more senior responsibilities in addition to my previous role. While advocating for the brand within the company, I help make sure the work we produce adheres to our brand standards by providing guidance and mentorship to other members of the team. I am accountable for my projects as a design lead for their entire lifecycle from conception to completion, and responsible in presenting each stage to stakeholders and the team with rationale for my design decisions. ",
    location: "Ibadan, Nigeria",
    position: "Frontend Engineer",
  },
];
export default experiences;
