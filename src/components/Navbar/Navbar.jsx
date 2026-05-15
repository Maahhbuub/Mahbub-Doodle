import { useState, useEffect, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';
import styles from './Navbar.module.css';
import { useNavbarAnimations } from './navbarAnimations';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'competitive-programming', label: 'Brain Games' },
  { id: 'projects', label: 'Projects', isPage: true },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery', isGallery: true },
];

function getNavLinks(variant) {
  return NAV_ITEMS.map(({ id, label, isPage, isGallery }) => {
    if (isPage) return { href: '/projects', label };
    if (isGallery) return { href: '/gallery', label };
    const hash = `#${id}`;
    return { href: variant === 'portfolio' ? hash : `/${hash}`, label };
  });
}

function getSectionId(href) {
  if (href === '/projects') return 'projects';
  if (href === '/gallery') return 'gallery';
  if (href.startsWith('/#')) return href.slice(2);
  if (href.startsWith('#')) return href.slice(1);
  return '';
}

function getInitialActive(location) {
  return location.pathname === '/projects' ? '/projects' : (location.hash || '');
}

export default function Navbar({ variant = 'portfolio' }) {
  const containerRef = useRef(null);
  useNavbarAnimations(containerRef);

  const location = useLocation();
  const navLinks = getNavLinks(variant);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => getInitialActive(location));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setActive(getInitialActive(location));
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = navLinks.find((l) => getSectionId(l.href) === entry.target.id);
          if (link) setActive(link.href);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const sectionId = getSectionId(href);
      const el = sectionId && document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header ref={containerRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <NavLink to="/#hero" className={styles.logo} onClick={() => handleNav('')}>
          <span className={styles.logoSketch}>{'<'}</span>
          <span className={styles.logoName}>Mahbub</span>
          <span className={styles.logoSketch}>{'/>'}</span>
        </NavLink>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={`${styles.link} ${active === l.href ? styles.linkActive : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/#contact"
            className={`btn-doodle pink ${styles.ctaBtn}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            onClick={() => handleNav('/#contact')}
          >
            Hire Me <Mail size={18} />
          </NavLink>
        </nav>

        <button
          className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          <span /><span /><span />
        </button>
      </div >
    </header >
  );
}