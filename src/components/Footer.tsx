import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Share2, MapPin } from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#" },
    { label: "Events Archive", href: "#events" },
    { label: "Our Mission", href: "#" },
    { label: "Team Members", href: "#team" },
  ],
  community: [
    { label: "Apply for Membership", href: "#join" },
    { label: "Sponsorships", href: "#" },
    { label: "Code of Conduct", href: "#" },
    { label: "Technical Roadmap", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#" },
  { icon: Mail, href: "mailto:hssc2025@srmap.edu.in" },
  { icon: Share2, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-card py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1 flex flex-col gap-6">
          <Logo size="sm" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            The Student Chapter of SRM University-AP. Focus on innovation, discipline, and technical rigor.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="text-foreground/60 hover:text-primary transition-colors"
                href={social.href}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground text-sm font-medium">
            {footerLinks.navigation.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Community</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground text-sm font-medium">
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Location</h4>
          <div className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              SRM University-AP,<br />
              Neerukonda, Mangalagiri Mandal,<br />
              Guntur District, Andhra Pradesh 522502
            </p>
          </div>
          <div className="w-full h-24 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center grayscale opacity-50"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1iS18tTym3ePS6ILFpPh-zs5GiYEk-VUmb_w7g7AnmwRo_9_6GqXWL9XMVnviYCJO1Z7_1gGK6N0KBQlgXjfbOqF7I_SVYDpzUfFotto_itFq3xmkhYG1VW0unqR2teY8Rfg8uIe2UatEqJf-1uiqr_3xhhMn40_nOt93dtqFxwbkUOrwdIDNEFJFknkQ5Z-Tnx2VVLYYLK7azLZfKEwTCP-rJ3qz8sbp6niyOVEcCvO8VliwyDWd1tVNMe4C3-gs9OaqW3BmfZ3M")' }}
            />
          </div>
        </div>
      </div>

      <Separator className="max-w-7xl mx-auto mt-16 mb-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
          © 2024 HACKSHASTRA SRM-AP. ALL RIGHTS RESERVED.
        </p>
        <Logo size="sm" showText={false} />
      </div>
    </footer>
  );
};

export default Footer;
