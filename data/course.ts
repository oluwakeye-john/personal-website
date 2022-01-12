export interface Course {
  bgColor: string;
  lineColor: string;
  hubColor: string;

  issuer: string;
  courseName: string;
  date: string;
}

const courses: Course[] = [
  {
    bgColor: "#d9fff3",
    lineColor: "#ABFFE4",
    hubColor: "#4CE2B2",

    courseName: "Mobile Application\nDevelopment",
    issuer: "LinkedIn",
    date: "January 2021",
  },
  {
    bgColor: "#fffde6",
    hubColor: "#FFF6A3",
    lineColor: "#FFF8B7",

    courseName: "Mobile Application\nDevelopment",
    issuer: "LinkedIn",
    date: "January 2021",
  },
  {
    bgColor: "#FFE6E3",
    hubColor: "#FF7262",
    lineColor: "#FFCDC8",

    courseName: "Mobile Application\nDevelopment",
    issuer: "LinkedIn",
    date: "January 2021",
  },
];

export default courses;
