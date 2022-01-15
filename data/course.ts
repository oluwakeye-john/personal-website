export interface Course {
  bgColor: string;
  lineColor: string;
  hubColor: string;

  issuer: string;
  courseName: string;
  date: string;
  logo: string;
}

const courses: Course[] = [
  {
    bgColor: "#d9fff3",
    lineColor: "#ABFFE4",
    hubColor: "#4CE2B2",

    courseName: "Advanced SVG Animation",
    issuer: "LinkedIn",
    date: "February 2021",
    logo: "/images/pluralsight.svg",
  },
  {
    bgColor: "#fffde6",
    hubColor: "#FFF6A3",
    lineColor: "#FFF8B7",

    courseName: "RESTful Web Services with Node.js and Express",
    issuer: "LinkedIn",
    date: "June 2020",
    logo: "/images/pluralsight.svg",
  },
  {
    bgColor: "#FFE6E3",
    hubColor: "#FF7262",
    lineColor: "#FFCDC8",

    courseName: "React Fundamentals",
    issuer: "Udemy",
    date: "November 2019",
    logo: "/images/udemy.svg",
  },
];

export default courses;
