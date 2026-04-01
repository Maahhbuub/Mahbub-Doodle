import { useEffect, useRef, useState } from 'react';
import { Sparkles, Terminal, Code, Target, Rocket, FileText, Briefcase, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

const roles = ['Software Engineer', 'React Developer', 'Problem Solver', 'Coffee Addict', 'Bug Slayer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

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
    <section className={styles.hero} id="hero">
      {/* Background doodles */}
      <div className={styles.bgDoodles} aria-hidden="true">
        <span className={`${styles.doodleEl} ${styles.d1}`}>{'{ }'}</span>
        <span className={`${styles.doodleEl} ${styles.d2}`}>{'</>'}</span>
        <span className={`${styles.doodleEl} ${styles.d3}`}>★</span>
        <span className={`${styles.doodleEl} ${styles.d4}`}>⚡</span>
        <span className={`${styles.doodleEl} ${styles.d5}`}>✦</span>
        <span className={`${styles.doodleEl} ${styles.d6}`}>{'// TODO'}</span>
        <span className={`${styles.doodleEl} ${styles.d7}`}>∞</span>
        
        {/* Animated spiral */}
        <svg className={styles.spiralSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.drawScribble} d="M100,100 m0,-50 a50,50 0 1,1 -1,0 m1,-30 a80,80 0 1,0 1,0" 
                fill="none" stroke="var(--accent-yellow)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Floating crosshairs */}
        <svg className={styles.crosshair1} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,5 L25,45 M5,25 L45,25" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.1"/>
        </svg>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Left text column */}
          <div className={styles.textCol}>
            <div className={styles.badgeWrapper}>
               <div className={styles.badge}>
                 <Sparkles size={16} /> Available for work!
               </div>
               <svg className={styles.badgeArrow} viewBox="0 0 50 50" aria-hidden="true">
                  <path className={styles.drawScribbleDel} d="M5,40 Q25,10 45,20 L35,10 M45,20 L35,30" fill="none" stroke="var(--accent-pink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>

            <h1 className={styles.heading}>
              Hey, I'm{' '}
              <span className={styles.nameHighlight}>
                Mahbub
                {/* Drawn circle around name */}
                <svg className={styles.nameCircle} viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path className={styles.drawScribbleDelay} d="M10,40 C10,10 190,10 190,40 C190,70 10,70 10,35 C10,20 50,15 50,15" fill="none" stroke="var(--accent-yellow)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <div className={styles.roleRow}>
              <span className={styles.rolePrefix}>A </span>
              <span className={styles.roleTyped}>{displayed}</span>
              <span className={styles.cursor}>|</span>
            </div>

            <p className={styles.bio}>
              I craft pixel-perfect, lightning-fast web experiences with clean code and
              creative problem-solving. I love turning complex ideas into elegant solutions.
            </p>

            <div className={styles.actions}>
              <a href="#projects" className="btn-doodle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Rocket size={20} className={styles.btnIconFly} /> See My Work
              </a>
              <a href="/resume.pdf" className={`btn-doodle outline ${styles.resumeBtn}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={20} /> Resume
              </a>
            </div>

            <div className={styles.socials}>
              {[
                { label: 'GitHub', icon: <Code size={18} />, href: 'https://github.com', brand: 'github' },
                { label: 'LinkedIn', icon: <Briefcase size={18} />, href: 'https://linkedin.com', brand: 'linkedin' },
                { label: 'Twitter', icon: <MessageCircle size={18} />, href: 'https://twitter.com', brand: 'twitter' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className={`${styles.socialLink} ${styles[s.brand]}`}>
                  <span style={{ display: 'flex' }}>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right avatar column */}
          <div className={styles.avatarCol}>
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
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q150,80 300,40 Q450,0 600,40 Q750,80 900,40 Q1050,0 1200,40 L1200,80 L0,80 Z"
                fill="#f5f0e8"/>
        </svg>
      </div>
    </section>
  );
}
