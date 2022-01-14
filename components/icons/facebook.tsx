import social from "../../data/social";

const Facebook = () => {
  return (
    <a href={social.facebook} rel="noreferrer" target="_blank">
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16668 6.87499H5.62501L6.20834 4.54166H4.16668V3.37499C4.16668 2.77416 4.16668 2.20832 5.33334 2.20832H6.20834V0.248323C6.01818 0.22324 5.30009 0.166656 4.54176 0.166656C2.95801 0.166656 1.83334 1.13324 1.83334 2.90832V4.54166H0.0833435V6.87499H1.83334V11.8333H4.16668V6.87499Z"
          fill="black"
        />
      </svg>
    </a>
  );
};

export default Facebook;
