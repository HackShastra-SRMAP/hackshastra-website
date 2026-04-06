import Logo from "./Logo";
import GooeyNav from "@/components/ui/GooeyNav";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import logoPng from '@/assets/download.png';
import { useNavigate} from 'react-router-dom';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },       // ✅ direct route
  { label: "Events", href: "/events" },     // ✅ direct route
  { label: "Gallery", href: "/gallery" },   // ✅ direct route
  { label: "Team", href: "/team" },         // ✅ direct route
  { label: "Contact", href: "/contact" },   // ✅ direct route
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Events", ariaLabel: "View our events", link: "/events" },
  { label: "Gallery", ariaLabel: "View gallery", link: "/gallery" },
  { label: "Team", ariaLabel: "Meet the team", link: "/team" },
  { label: "Contact", ariaLabel: "Contact us", link: "/contact" },
  { label: "Join Us", ariaLabel: "Join our club", link: "/join" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/hackshastra" },
  { label: "Instagram", link: "https://www.instagram.com/hackshastra.srmap/" },
  { label: "Discord", link: "https://discord.gg/hackshastra" },
];

const Header = () => {
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    navigate(href);
  };

  const navLinksWithHandler = navLinks.map(item => ({
    ...item,
    onClick: () => handleNavClick(item.href),
  }));

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo size="sm" />
          
          <div className="hidden md:block">
            <GooeyNav
              items={navLinksWithHandler}
              particleCount={20}
              particleDistances={[70, 10]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 4, 5, 1, 2, 3]}
            />
          </div>

          <div className="md:hidden">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#fff"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#990000', '#cc2200']}
              logoUrl={logoPng}
              accentColor="#990000"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;