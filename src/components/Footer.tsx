import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import siteData from "@/data/siteData";

const Footer = () => {
  const links = siteData.navigation.links;
  const siteName = siteData.siteInfo.name;
  const locationText = siteData.siteInfo.location;
  const socials = siteData.socialLinks;

  const socialLinks = [
    { icon: Instagram, href: socials.instagram, label: "Instagram" },
    { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
    { icon: MessageCircle, href: socials.discord, label: "Discord" },
    { icon: Mail, href: `mailto:${siteData.siteInfo.contactEmail}`, label: "Email" },
  ];

  return (
    <footer className="bg-background py-12 md:py-16 px-4 sm:px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Brand & Tagline */}
        <div className="md:col-span-1 flex flex-col gap-4 md:gap-6">
          <Logo size="sm" />
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            The Student Chapter of SRM University-AP. Focus on innovation, discipline, and technical rigor.
          </p>
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="text-muted-foreground hover:text-red-500 transition-colors p-2 bg-neutral-900 rounded-lg border border-neutral-800"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-foreground font-bold text-xs md:text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="flex flex-col gap-3 text-muted-foreground text-xs md:text-sm font-medium">
            {links.slice(0, 4).map((link) => (
              <li key={link.label}>
                <Link className="hover:text-red-500 transition-colors" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Community */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-foreground font-bold text-xs md:text-sm uppercase tracking-widest">Community</h4>
          <ul className="flex flex-col gap-3 text-muted-foreground text-xs md:text-sm font-medium">
            {links.slice(4).map((link) => (
              <li key={link.label}>
                <Link className="hover:text-red-500 transition-colors" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-red-500 transition-colors" to={siteData.navigation.joinHref}>
                {siteData.navigation.joinButtonText}
              </Link>
            </li>
          </ul>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=16.462717,80.506813"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-20 md:h-24 bg-neutral-900 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-colors group relative"
            role="img"
            aria-label="Map showing SRM University-AP campus location"
          >
            <div
              className="w-full h-full bg-cover bg-center grayscale opacity-60 group-hover:scale-105 transition-transform"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1iS18tTym3ePS6ILFpPh-zs5GiYEk-VUmb_w7g7AnmwRo_9_6GqXWL9XMVnviYCJO1Z7_1gGK6N0KBQlgXjfbOqF7I_SVYDpzUfFotto_itFq3xmkhYG1VW0unqR2teY8Rfg8uIe2UatEqJf-1uiqr_3xhhMn40_nOt93dtqFxwbkUOrwdIDNEFJFknkQ5Z-Tnx2VVLYYLK7azLZfKEwTCP-rJ3qz8sbp6niyOVEcCvO8VliwyDWd1tVNMe4C3-gs9OaqW3BmfZ3M")' }}
            />
            <span className="absolute text-[10px] uppercase font-bold tracking-widest bg-black/80 px-2.5 py-1 rounded text-red-500 border border-neutral-700">
              Open Map ↗
            </span>
          </a>
        </div>

        {/* Column 4: Location */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-foreground font-bold text-xs md:text-sm uppercase tracking-widest">Location</h4>
          <div className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm leading-relaxed">
            <MapPin className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
            <p className="whitespace-pre-line">
              {locationText}
            </p>
          </div>
        </div>
      </div>

      <Separator className="max-w-7xl mx-auto mt-12 mb-8 bg-neutral-800" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-[10px] md:text-xs font-bold tracking-widest uppercase text-center md:text-left">
          &copy; {new Date().getFullYear()} {siteName}. ALL RIGHTS RESERVED.
        </p>
        <Logo size="sm" showText={false} />
      </div>
    </footer>
  );
};

export default Footer;
