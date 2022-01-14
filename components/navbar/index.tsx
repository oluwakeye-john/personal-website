import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
        <NavbarLeftItem>My Works</NavbarLeftItem>
        <NavbarLeftItem>
          <a
            href="https://drive.google.com/file/d/1FBJa0LeD8vFW1eVcYCEHMNAoFr-VjXGh/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
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
