import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, org } from '@/data/content';
import { navigateTo } from '@/router';
import Logo from '@/components/Logo';

export default function Header({ currentPath }: { currentPath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (path: string) => {
    setMenuOpen(false);
    navigateTo(path);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-cream-50 shadow-sm py-2"
      >
        <div className="container-mw container-px flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            aria-label="Go to homepage"
          >
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`btn-ghost text-sm ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-cream-800 hover:text-cream-950'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('/contact')}
              className="hidden sm:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Contact Us
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg text-cream-900 hover:bg-cream-100"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-cream-950/60 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
              <Logo compact />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg text-cream-700 hover:bg-cream-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <li
                    key={link.path}
                    className={`transition-all duration-500 ${
                      menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
                  >
                    <button
                      onClick={() => handleNav(link.path)}
                      className={`w-full text-left py-3.5 px-4 rounded-xl font-serif text-2xl transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-primary-700 bg-primary-50 font-semibold'
                          : 'text-cream-800 hover:text-primary-700 hover:bg-cream-100'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social section */}
            <div className="px-6 py-6 border-t border-cream-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-500 mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {org.social.facebook && (
                  <a
                    href={org.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
                  </a>
                )}
                {org.social.instagram && (
                  <a
                    href={org.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                  </a>
                )}
                {org.social.youtube && (
                  <a
                    href={org.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>
                  </a>
                )}
                {org.social.tiktok && (
                  <a
                    href={org.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.16v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.61c.3 0 .6.05.89.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.2a4.85 4.85 0 01-1.84-.3z"/></svg>
                  </a>
                )}
                {org.social.x && (
                  <a
                    href={org.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.83-5.97 6.83H1.65l7.73-8.84L1.24 2.25h6.83l4.72 6.24zm-1.16 17.52h1.83L7.02 4.13H5.06z"/></svg>
                  </a>
                )}
                {!org.social.facebook &&
                  !org.social.instagram &&
                  !org.social.youtube &&
                  !org.social.tiktok &&
                  !org.social.x && (
                    <span className="text-sm text-cream-500">
                      Social links to be added
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
