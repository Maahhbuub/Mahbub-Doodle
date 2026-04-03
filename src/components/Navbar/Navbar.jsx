import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import styles from './Navbar.module.css';

const portfolioLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#competitive-programming', label: 'Brain Games' },
  { href: '/projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const projectLinks = [
  { href: '/projects', label: 'All Projects' },
  { href: '/projects/favorites', label: 'Favorites' },
  { href: '#contact', label: 'Contact' },
  { href: '/', label: 'Back to Home' },

];

export default function Navbar({ variant = 'portfolio' }) {
  const navLinks = variant === 'portfolio' ? portfolioLinks : projectLinks;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    navLinks.forEach(link => {
      const sectionId = link.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/#hero" className={styles.logo} onClick={() => handleNav('')}>
          <span className={styles.logoSketch}>{'<'}</span>
          <span className={styles.logoName}>Mahbub</span>
          <span className={styles.logoSketch}>{'/>'}</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${active === l.href ? styles.linkActive : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`btn-doodle pink ${styles.ctaBtn}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }} onClick={() => handleNav('#contact')}>
            Hire Me <Mail size={18} />
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
