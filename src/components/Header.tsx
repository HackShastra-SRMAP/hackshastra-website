import Logo from "./Logo";
import GooeyNav from "@/components/ui/GooeyNav";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import GooeyButton from "@/components/ui/GooeyButton";
import logoPng from '@/assets/download.png';

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home", link: "#" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Events", ariaLabel: "View our events", link: "/events" },
  { label: "Gallery", ariaLabel: "View gallery", link: "/gallery" },
  { label: "Team", ariaLabel: "Meet the team", link: "/team" },
  { label: "Contact", ariaLabel: "Contact us", link: "/contact" },
  { label: "Join Us", ariaLabel: "Join our club", link: "/join" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Discord", link: "https://discord.com" },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo size="sm" />
          
          {/* Desktop Nav with Gooey Effect */}
          <div className="hidden md:block">
            <GooeyNav
              items={navLinks}
              particleCount={20}
              particleDistances={[70, 10]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 4, 5, 1, 2, 3]}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <GooeyButton href="/join">Join Us</GooeyButton>
            </div>

            {/* Mobile Menu - StaggeredMenu */}
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
      </div>
    </header>
  );
};

export default Header;
