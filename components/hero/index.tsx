import HeroAbout from "./about";
import HeroServices from "./my-services";
import HeroWelcome from "./welcome";

const Hero = () => {
  return (
    <div>
      <HeroWelcome />
      <HeroAbout />
      <HeroServices />
    </div>
  );
};

export default Hero;
