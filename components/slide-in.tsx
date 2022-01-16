import { motion, Variants } from "framer-motion";

interface ISlideInWrapper {
  children: React.ReactNode;
  stagger?: number;
  once?: boolean;
}

const SlideInWrapper = ({
  children,
  stagger = 0.3,
  once = true,
}: ISlideInWrapper) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

interface ISlideChild {
  children: React.ReactNode;
  stiffness?: number;
  y?: number;
}

export const SlideChild = ({
  children,
  stiffness = 100,
  y = 200,
}: ISlideChild) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness,
      },
    },
  };

  return <motion.div variants={variants}>{children}</motion.div>;
};

export default SlideInWrapper;
