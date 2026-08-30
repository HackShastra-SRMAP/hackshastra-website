import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';
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
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch nav links & site info directly from siteData configuration
  const navLinks = siteData.navigation.links;
  const siteName = siteData.siteInfo.name;
  const joinButtonText = siteData.navigation.joinButtonText;
  const joinHref = siteData.navigation.joinHref;

  /**
   * Check if a link is currently active based on browser location URL path
   */
  const isLinkActive = useCallback((href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  }, [location.pathname]);

  /**
   * Handle dynamic Back button action
   */
  const handleBackClick = useCallback(() => {
    if (window.history.length > 2 && location.pathname !== '/') {
      navigate(-1);
    } else {
      navigate('/');
    }
  }, [location.pathname, navigate]);

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
        
        {/* LEFT SECTION: Back Button + Brand Name */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Back Pill Button */}
          <button
            onClick={handleBackClick}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/90 border border-neutral-700/80 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 hover:border-blue-600/50 transition-all duration-200 shadow-md group focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Go back"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
            <span>Back</span>
          </button>

          {/* Brand Logo Text */}
          <Link
            to="/"
            className="text-blue-600 font-black tracking-wider text-sm sm:text-lg hover:text-blue-500 transition-colors uppercase"
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
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37, 99, 235,0.85)] font-semibold'
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
            className="hidden sm:inline-flex items-center justify-center border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-sm font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm"
          >
            {joinButtonText}
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    ? 'bg-blue-600 text-white font-bold shadow-[0_0_12px_rgba(37, 99, 235,0.7)]'
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
              className="w-full inline-flex items-center justify-center border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase transition-all"
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
