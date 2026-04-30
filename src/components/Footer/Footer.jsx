import { Heart, Coffee, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const portfolioLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#competitive-programming', label: 'Brain Games' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

const projectLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#competitive-programming', label: 'Brain Games' },
  { href: '/projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
];

export default function Footer({ variant = 'portfolio' }) {
  const navLinks = variant === 'portfolio' ? portfolioLinks : projectLinks;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Torn paper edge effect */}
      <div className={styles.tornEdge} aria-hidden="true"></div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/#hero" className={styles.logo}>
              <span className={styles.logoSketch}>{'<'}</span>
              <span className={styles.logoName}>Mahbub</span>
              <span className={styles.logoSketch}>{'/>'}</span>
            </Link>
            <p className={styles.tagline}>Building the web, making mistakes, solving problems and enjoying the coffee!! </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              {navLinks.map((item, i) => (
                <Link key={i} to={item.href}>{item.label}</Link>
              ))}
            </div>

            <div className={styles.linkGroup}>
              <h4>Socials</h4>
              <a href="https://github.com/Maahhbuub" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/maahhbuub" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/Maahhbuub" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://instagram.com/maahhbuub" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/maahhbuub" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            &copy; {currentYear} Mahbub. Designed with <span className={styles.heart} style={{ display: 'flex' }}><Heart size={16} fill="currentColor" /></span> and way too much caffeine <span style={{ display: 'flex' }}><Coffee size={16} /></span>
          </p>
          <div className={styles.backToTop}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-doodle outline" aria-label="Back to top" style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <ArrowUp size={16} /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
