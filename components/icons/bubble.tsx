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
          animate={{ rotate: -1000 }}
          transition={{
            duration: 5,
          }}
          onAnimationComplete={() => {
            onDone?.();
          }}
          id="wrap2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.5414 55.3904C56.8193 46.102 68.4287 41.2393 80.344 37.6585C93.4845 33.7097 107.119 30.0641 120.316 33.8212C134.897 37.9726 150.86 45.3325 156.594 59.3672C162.25 73.2118 154.027 88.5244 148.313 102.346C143.917 112.979 135.569 120.566 127.79 129.044C119.947 137.591 114.044 149.274 102.764 151.984C91.356 154.724 80.5361 147.314 69.6179 143.018C57.8685 138.395 43.5912 136.676 36.8031 126.03C29.9215 115.237 32.8325 101.243 34.9308 88.6158C36.9419 76.5132 40.3788 64.5496 48.5414 55.3904Z"
          fill="url(#paint0_linear)"
          stroke="#15AABF"
        />
        <motion.path
          animate={{ rotate: 1000 }}
          transition={{
            duration: 5,
          }}
          id="wrap1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.0886 48.1177C54.3701 36.2869 74.2407 47.1778 91.2934 47.2797C106.986 47.3734 123.643 39.7681 136.559 48.6821C150.596 58.37 156.873 76.0876 157.716 93.1223C158.57 110.378 153.766 128.391 141.085 140.125C129.06 151.251 111.473 151.157 95.0909 151.067C79.6528 150.981 63.1728 150.318 52.0312 139.631C41.0078 129.057 40.8524 112.644 39.2025 97.4588C37.3526 80.432 29.7537 59.9998 42.0886 48.1177Z"
          fill="#BB6BD9"
          fillOpacity="0.5"
          stroke="#9B51E0"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="52.9736"
          y1="50.6079"
          x2="133.026"
          y2="125.009"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15AABF" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Bubble;
