/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import social from "../../data/social";

interface IMobileMenu {
  open: boolean;
  toggle: () => void;
}

const MobileMenu = ({ open, toggle }: IMobileMenu) => {
  const animation = useAnimation();

  const variants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const v: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
    visible: {
      opacity: 1,
      x: -0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        animation.start("visible");
      }, 1000);
    } else {
      animation.start("hidden");
    }
  }, [open]);

  return (
    <motion.div variants={variants} animate={animation} initial="hidden">
      <MobileMenuContainer open={open}>
        <motion.div variants={v}>
          <MobileMenuItem onClick={toggle}>
            <Link href="/#works">
              <a>My Works</a>
            </Link>
          </MobileMenuItem>
        </motion.div>
        <motion.div variants={v}>
          <MobileMenuItem onClick={toggle}>
            <a href={social.resume} target="_blank" rel="noreferrer">
              Download Résumé
            </a>
          </MobileMenuItem>
        </motion.div>
        <motion.div variants={v}>
          <MobileMenuItemUnderline onClick={toggle}>
            <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
              Schedule a Call
            </a>
          </MobileMenuItemUnderline>
        </motion.div>

        <motion.div variants={v}>
          <MobileMenuIconContainer>
            <MobileMenuIcon onClick={toggle}>
              <a
                href={social.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </MobileMenuIcon>
            <MobileMenuIcon onClick={toggle}>
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </MobileMenuIcon>
            <MobileMenuIcon onClick={toggle}>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </MobileMenuIcon>
            <MobileMenuIcon onClick={toggle}>
              <a
                href={social.dev}
                target="_blank"
                rel="noreferrer"
                aria-label="Dev"
              >
                <FaDev />
              </a>
            </MobileMenuIcon>
          </MobileMenuIconContainer>
        </motion.div>
      </MobileMenuContainer>
    </motion.div>
  );
};

export default MobileMenu;

export const MobileMenuContainer = styled.div<{ open: Boolean }>`
  display: none;
  z-index: 4;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  ${({ theme }) => theme.media.lg} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;

    transform: ${({ open }) => (!open ? "translateX(-100%)" : "translateX(0)")};
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 4rem;

    transition: 0.8s all ease-in-out;
    transition-delay: ${({ open }) => (open ? 0 : "1.5s")};

    ${({ theme }) => theme.media.sm} {
      padding: 1.5rem 1.5rem;
      flex-direction: column;
    }
  }
`;

export const MobileMenuItem = styled.div`
  color: #fff;
  margin: 2rem 0;
  font-weight: 200;
  font-size: 30px;
  line-height: 28.35px;
`;

export const MobileMenuItemUnderline = styled(MobileMenuItem)`
  text-decoration: underline;
`;

export const MobileMenuIconContainer = styled(MobileMenuItem)`
  display: flex;
  justify-content: space-between;
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }

  path {
    fill: #fff;
  }
`;
