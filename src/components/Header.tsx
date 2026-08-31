import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteData from '@/data/siteData';

/**
 * Header Component
 * Optimized & dynamic navigation bar rendered across EVERY page on the site.
 * Displays:
 *  - Left: Back pill button + Red HACKSHASTRA SRM-AP brand title
 *  - Center: Dynamic active-tab navigation links with red glow active state
 *  - Right: Outlined red JOIN US button
 *  - Mobile: Slide-out menu drawer
 */
const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch nav links & site info directly from siteData configuration
  const navLinks = siteData.navigation.links;
  const siteName = siteData.siteInfo.name;
  const joinButtonText = siteData.navigation.joinButtonText;
  const joinHref = siteData.navigation.joinHref;

  /**
   * Check if a link is currently active based on browser location URL path
   */
 const isLinkActive = (href: string) => {
  if (href === '/') {
    return location.pathname === '/';
  }
  return location.pathname.startsWith(href);
};



  /**
   * Keyboard accessibility: Close mobile drawer on Escape key press
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 bg-black/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT SECTION: Brand Name */}
        <div className="flex items-center gap-2 sm:gap-4">
        

          {/* Brand Logo Text */}
          <Link
            to="/"
            className="text-red-600 font-black tracking-wider text-sm sm:text-lg hover:text-red-500 transition-colors uppercase"
          >
            {siteName}
          </Link>
        </div>

        {/* CENTER SECTION: Desktop Dynamic Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-950/80 border border-neutral-800/60 p-1.5 rounded-full shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.85)] font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION: Join Us Button (Desktop) & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Rectangular Red Outlined JOIN US Button */}
          <Link
            to={joinHref}
            className="hidden sm:inline-flex items-center justify-center border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-4 py-1.5 rounded-sm font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm"
          >
            {joinButtonText}
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION OVERLAY / DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-4 border-t border-neutral-800/80 flex flex-col gap-2 bg-black/95 rounded-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(220,38,38,0.7)]'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="pt-2 border-t border-neutral-800/60 mt-1">
            <Link
              to={joinHref}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center border border-red-600 text-red-500 hover:bg-red-600 hover:text-white py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase transition-all"
            >
              {joinButtonText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
