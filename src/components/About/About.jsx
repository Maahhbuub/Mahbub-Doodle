import { GraduationCap, Briefcase, Globe, Coffee, User } from 'lucide-react';
import styles from './About.module.css';

const facts = [
  { icon: <GraduationCap size={24} />, label: 'Education', value: 'B.Sc. in CSE, BUET', color: 'yellow' },
  { icon: <Briefcase size={24} />, label: 'Experience', value: '3+ Years', color: 'blue' },
  { icon: <Globe size={24} />, label: 'Location', value: 'Dhaka, Bangladesh', color: 'pink' },
  { icon: <Coffee size={24} />, label: 'Fuel', value: '∞ cups of coffee', color: 'green' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      {/* Hand-drawn section separator */}
      <div className={styles.topSquiggle} aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 Q150,60 300,30 T600,30 T900,30 T1200,30" 
                fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.header}>
          <h2 className="section-title">
            Behind the <span className="highlight-tape">Code</span>
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          {/* Main notepad bio */}
          <div className={`doodle-box ${styles.notepad}`}>
            <div className={styles.tape} aria-hidden="true" />
            {/* <div className={styles.pin} aria-hidden="true">📍</div> */}
            
            <div className={styles.bio}>
              <p>
                Hello! I'm <strong>Mahbub</strong> — a passionate software engineer who thrives at the intersection of <em className="wobbly-underline">creativity</em> and technical precision. I don't just write code; I craft digital experiences.
              </p>
              <p>
                When I'm not hammering at the keyboard debugging things that I swear were working yesterday, you'll find me sketching UI ideas, contributing to open source, or hunting for the world's best cup of coffee.
              </p>
              <p>
                I believe great software is built with empathy for users, an obsession over the smallest details, and a tiny pinch of madness!
              </p>
            </div>
          </div>

          {/* Sticky notes facts */}
          <div className={styles.factsGrid}>
            {facts.map((f, i) => (
              <div key={f.label} 
                   className={`${styles.postIt} ${styles[f.color]}`}
                   style={{ '--rotation': `${(i % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2)}deg` }}>
                <div className={styles.postItPin} aria-hidden="true" />
                <span className={styles.factIcon} style={{ display: 'flex' }}>{f.icon}</span>
                <div>
                  <div className={styles.factLabel}>{f.label}</div>
                  <div className={styles.factValue}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating doodles */}
        <div className={styles.doodles}>
          <svg className={styles.arrow} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q40,40 90,20 M70,10 L90,20 L80,40" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className={styles.doodleText}>Facts!</div>
        </div>
      </div>
    </section>
  );
}
