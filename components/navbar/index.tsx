import { useEffect, useState } from "react";
import Dribbble from "../icons/dribbble";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import LinkedIn from "../icons/linkedin";
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
        <NavbarLeftItem>Download Resume</NavbarLeftItem>
      </NavbarLeft>
      <NavbarCenter>
        <NavbarCenterItem dark={mobileNav}>john.oluwakeye</NavbarCenterItem>
        <NavbarToggle onClick={toggleMobileNav}>
          <Menu />
        </NavbarToggle>
      </NavbarCenter>
      <NavbarRight>
        <NavbarRightItem>
          <LinkedIn />
        </NavbarRightItem>
        <NavbarRightItem>
          <Facebook />
        </NavbarRightItem>
        <NavbarRightItem>
          <Instagram />
        </NavbarRightItem>
        <NavbarRightItem>
          <Dribbble />
        </NavbarRightItem>
      </NavbarRight>

      <MobileMenu open={mobileNav} />
    </NavbarContainer>
  );
};

export default Navbar;
