import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import social from "../../data/social";
import Instagram from "../icons/instagram";
import Menu from "../icons/menu";
import MobileMenu from "./mobile-menu";
import {
  NavbarCenter,
  NavbarCenterItem,
  NavbarContainer,
  NavbarLeft,
  NavbarLeftItem,
  NavbarRight,
  NavbarRightItem,
  NavbarToggle,
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

  return (
    <NavbarContainer>
      <NavbarLeft>
        <NavbarLeftItem>
          <Link href="/#works">
            <a>My Works</a>
          </Link>
        </NavbarLeftItem>
        <NavbarLeftItem>
          <a href={social.resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </NavbarLeftItem>
      </NavbarLeft>
      <NavbarCenter>
        <NavbarCenterItem dark={mobileNav}>
          <Link href="/">
            <a>john.oluwakeye</a>
          </Link>
        </NavbarCenterItem>
        <NavbarToggle onClick={toggleMobileNav}>
          <Menu />
        </NavbarToggle>
      </NavbarCenter>
      <NavbarRight>
        <NavbarRightItem>
          <FaLinkedinIn />
        </NavbarRightItem>
        <NavbarRightItem>
          <FaFacebookF />
        </NavbarRightItem>
        <NavbarRightItem>
          <Instagram />
        </NavbarRightItem>
        <NavbarRightItem>
          <FaGithub />
        </NavbarRightItem>
      </NavbarRight>

      <MobileMenu open={mobileNav} />
    </NavbarContainer>
  );
};

export default Navbar;
