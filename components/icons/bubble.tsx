import { motion, useAnimation, Variants } from "framer-motion";

const Bubble = ({ onDone }: any) => {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 186 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="mobileDesign">
        <motion.path
          initial={{ transformStyle: "preserve-3d" }}
          animate={{ rotateZ: -1000, rotateX: -1000, rotateY: -1000 }}
          transition={{
            duration: 5,
          }}
          onAnimationComplete={() => {
            onDone?.();
          }}
          id="wrap2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.5415 55.3899C56.8194 46.1015 68.4288 41.2388 80.3441 37.658C93.4846 33.7092 107.119 30.0636 120.316 33.8207C134.897 37.9721 150.86 45.332 156.594 59.3667C162.25 73.2113 154.027 88.5239 148.313 102.346C143.917 112.979 135.569 120.566 127.79 129.044C119.947 137.591 114.044 149.274 102.764 151.984C91.3561 154.724 80.5362 147.314 69.618 143.018C57.8686 138.395 43.5913 136.676 36.8032 126.03C29.9216 115.237 32.8326 101.243 34.9309 88.6153C36.942 76.5127 40.3789 64.5491 48.5415 55.3899Z"
          fill="url(#paint0_linear_23_2)"
          stroke="#4CE2B2"
        />
        <motion.path
          initial={{ transformStyle: "preserve-3d" }}
          animate={{ rotateZ: 1000, rotateX: 1000, rotateY: 1000 }}
          transition={{
            duration: 5,
          }}
          id="wrap1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.0887 48.1183C54.3702 36.2875 74.2408 47.1784 91.2935 47.2803C106.986 47.374 123.643 39.7687 136.559 48.6827C150.596 58.3706 156.873 76.0882 157.716 93.1229C158.57 110.379 153.766 128.392 141.085 140.126C129.06 151.252 111.473 151.158 95.091 151.068C79.6529 150.982 63.1729 150.319 52.0313 139.632C41.0079 129.058 40.8525 112.645 39.2026 97.4594C37.3527 80.4326 29.7538 60.0004 42.0887 48.1183Z"
          fill="#4CE2B2"
          fillOpacity="0.5"
          stroke="#4CE2B2"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_23_2"
          x1="52.9737"
          y1="50.6074"
          x2="133.026"
          y2="125.009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15AABF" />
          <stop offset="1" stopColor="#4CE2B2" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Bubble;
