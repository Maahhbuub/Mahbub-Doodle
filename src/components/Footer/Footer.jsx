import { Heart, Coffee, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Torn paper edge effect */}
      <div className={styles.tornEdge} aria-hidden="true"></div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <span className={styles.logoSketch}>{'<'}</span>
              <span className={styles.logoName}>Mahbub</span>
              <span className={styles.logoSketch}>{'/>'}</span>
            </a>
            <p className={styles.tagline}>Building the web, one doodle at a time.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#competitive-programming">Brain Games</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Socials</h4>
              <a href="https://github.com/Maahhbuub" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/maahhbuub" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/Maahhbuub" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://instagram.com/maahhbuub" target="_blank" rel="noreferrer">Instagram</a>
              {/* <a href="https://codepen.io/" target="_blank" rel="noreferrer">CodePen</a> */}
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            &copy; {currentYear} Mahbub. Designed with <span className={styles.heart} style={{ display: 'flex' }}><Heart size={16} fill="currentColor" /></span> and way too much caffeine <span style={{ display: 'flex' }}><Coffee size={16} /></span>
          </p>
          <div className={styles.backToTop}>
            <a href="#hero" className="btn-doodle outline" aria-label="Back to top" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUp size={16} /> Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
