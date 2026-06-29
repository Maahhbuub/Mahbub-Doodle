import { useEffect, useRef, useState } from 'react';
import { Sparkles, Terminal, Code, Target, Rocket, FileText, Briefcase, ChartNoAxesColumn } from 'lucide-react';
import styles from './Hero.module.css';
import { useHeroAnimations } from './heroAnimations';

const roles = ['Software Engineer', 'Competitive Programmer', 'React Developer', 'Coffee Addict', 'Video Games Lover'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);
  const container = useRef(null);

  useHeroAnimations(container);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 45);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <section ref={container} className={styles.hero} id="hero">
      {/* Background doodles */}
      <div className={styles.bgDoodles} aria-hidden="true">
        <span className={`${styles.doodleEl} ${styles.d1} gsap-doodle`}>{'{ }'}</span>
        <span className={`${styles.doodleEl} ${styles.d2} gsap-doodle`}>{'</>'}</span>
        <span className={`${styles.doodleEl} ${styles.d3} gsap-doodle`}>★</span>
        <span className={`${styles.doodleEl} ${styles.d4} gsap-doodle`}>⚡</span>
        <span className={`${styles.doodleEl} ${styles.d5} gsap-doodle`}>✦</span>
        <span className={`${styles.doodleEl} ${styles.d6} gsap-doodle`}>{'// The OTC'}</span>
        <span className={`${styles.doodleEl} ${styles.d7} gsap-doodle`}>∞</span>

        {/* Animated spiral */}
        <svg className={`${styles.spiralSvg} gsap-doodle-svg`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.drawScribble} d="M100,100 m0,-50 a50,50 0 1,1 -1,0 m1,-30 a80,80 0 1,0 1,0"
            fill="none" stroke="var(--accent-yellow)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Floating crosshairs */}
        <svg className={`${styles.crosshair1} gsap-doodle-svg`} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,5 L25,45 M5,25 L45,25" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.1" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Left text column */}
          <div className={styles.textCol}>
            <div className={`${styles.badgeWrapper} gsap-text`}>
              {/* <div className={styles.badge}>
                <Sparkles size={16} /> Available for work!
              </div> */}
              <svg className={styles.badgeArrow} viewBox="0 0 50 50" aria-hidden="true">
                <path className={styles.drawScribbleDel} d="M5,40 Q25,10 45,20 L35,10 M45,20 L35,30" fill="none" stroke="var(--accent-pink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h1 className={`${styles.heading} gsap-text`}>
              Hey, I'm{' '}
              <span className={styles.nameHighlight}>
                Mahbub
                {/* Drawn circle around name */}
                <svg className={styles.nameCircle} viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path className={styles.drawScribbleDelay} d="M10,40 C10,10 190,10 190,40 C190,70 10,70 10,35 C10,20 50,15 50,15" fill="none" stroke="var(--accent-yellow)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className={`${styles.roleRow} gsap-text`}>
              <span className={styles.rolePrefix}>A </span>
              <span className={styles.roleTyped}>{displayed}</span>
              <span className={styles.cursor}>|</span>
            </div>

            <p className={`${styles.bio} gsap-text`}>
              I craft pixel-perfect, lightning-fast web experiences with clean code and
              creative problem-solving. I love turning complex ideas into elegant solutions.
            </p>

            <div className={`${styles.actions} gsap-text`}>
              <a href="#projects" className="btn-doodle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Rocket size={16} className={styles.btnIconFly} /> See My Work
              </a>
              <a href="/Mahbub-Resume.pdf" className={`btn-doodle ${styles.resumeBtn}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--paper)' }}>
                <FileText size={16} /> Resume
              </a>
            </div>

            <div className={`${styles.socials} gsap-text`}>
              {[
                { label: 'GitHub', icon: <Code size={16} />, href: 'https://github.com/Maahhbuub', brand: 'github' },
                { label: 'LinkedIn', icon: <Briefcase size={16} />, href: 'https://www.linkedin.com/in/maahhbuub/', brand: 'linkedin' },
                { label: 'LeetCode', icon: <Target size={16} />, href: 'https://leetcode.com/u/Maahhbuub/', brand: 'leetcode' },
                { label: 'Codeforces', icon: <ChartNoAxesColumn size={16} />, href: 'https://codeforces.com/profile/TribalLiege', brand: 'codeforces' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles[s.brand]}`} aria-label={s.label} title={s.label}>
                  <span style={{ display: 'flex' }}>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right avatar column */}
          <div className={`${styles.avatarCol} gsap-avatar`}>
            <div className={styles.avatarWrapper}>

              {/* Extra sketchy border layers to make it look hand-drawn */}
              <div className={styles.avatarSketchLayer1}></div>
              <div className={styles.avatarSketchLayer2}></div>

              <div className={styles.avatarFrame}>
                <img src="/avatar.png" alt="Mahbub - Software Engineer" className={styles.avatar} />
                {/* Crosshatch shading overlay built natively */}
                <div className={styles.avatarShading} aria-hidden="true"></div>
              </div>
              <div className={styles.avatarTag1} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>React <Code size={14} /></div>
              <div className={styles.avatarTag2} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Node.js <Terminal size={14} /></div>
              <div className={styles.avatarTag3} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>10+ Projects <Target size={14} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom */}
      <div className={`${styles.waveBottom} gsap-wave`}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q150,80 300,40 Q450,0 600,40 Q750,80 900,40 Q1050,0 1200,40 L1200,80 L0,80 Z"
            fill="#f5f0e8" />
        </svg>
      </div>
    </section>
  );
}
