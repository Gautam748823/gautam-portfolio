import { useEffect, useId, useState } from 'react';
import { Container } from '@/components/layout';
import { isEscapeKey } from '@/utils/accessibility';

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEscapeKey(event)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="shell-navbar">
      <Container>
        <nav aria-label="Primary navigation" className="shell-navbar__inner">
          <a className="shell-navbar__brand" href="#home" onClick={closeMenu}>
            <span aria-hidden="true" className="shell-navbar__brand-mark">
              G
            </span>
            <span>Gautam</span>
          </a>

          <button
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="shell-navbar__toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`shell-navbar__menu ${isMenuOpen ? 'shell-navbar__menu--open' : ''}`}
            id={menuId}
          >
            {navigationLinks.map((link) => (
              <a
                className="shell-navbar__link"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
