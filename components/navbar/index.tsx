import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import social from "../../data/social";
import MobileMenu from "./mobile-menu";
import {
  NavbarCenter,
  NavbarCenterItem,
  NavbarContainer,
  NavbarLeft,
  NavbarLeftItem,
  NavbarLinkButton,
  NavbarRight,
  NavbarRightItem,
  NavbarToggle,
  NavbarToggleContent,
} from "./styles";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleEsc);

    return () => {
      window.removeEventListener("keyup", handleEsc);
    };
  }, []);

  const onClick = () => {
    document.querySelector("#works")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <NavbarContainer mobileNav={mobileNav}>
      <NavbarLeft>
        <NavbarLeftItem>
          <NavbarLinkButton onClick={onClick}>My Works</NavbarLinkButton>
        </NavbarLeftItem>
        <NavbarLeftItem>
          <a href={social.resume} target="_blank" rel="noreferrer">
            Download Résumé
          </a>
        </NavbarLeftItem>
      </NavbarLeft>
      <NavbarCenter>
        <NavbarCenterItem dark={mobileNav}>
          <Link href="/">
            <a>john.oluwakeye</a>
          </Link>
        </NavbarCenterItem>
        <NavbarToggle
          aria-label="menu"
          open={mobileNav}
          onClick={toggleMobileNav}
        >
          <NavbarToggleContent open={mobileNav}>
            <div />
            <div />
            <div />
          </NavbarToggleContent>
        </NavbarToggle>
      </NavbarCenter>
      <NavbarRight>
        <NavbarRightItem>
          <a
            href={social.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </NavbarRightItem>
        <NavbarRightItem>
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </NavbarRightItem>
        <NavbarRightItem>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </NavbarRightItem>
        <NavbarRightItem>
          <a
            href={social.dev}
            target="_blank"
            rel="noreferrer"
            aria-label="Dev"
          >
            <FaDev />
          </a>
        </NavbarRightItem>
      </NavbarRight>

      <MobileMenu open={mobileNav} toggle={toggleMobileNav} />
    </NavbarContainer>
  );
};

export default Navbar;
