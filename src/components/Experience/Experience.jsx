import { Rocket, Laptop, Palette, MapPinned } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Co-founder',
    company: 'Valeria',
    period: '2026 - Present',
    desc: 'Co-founder of an AI-driven technology company, specializing in machine learning systems and scalable software solutions.',
    icon: <Rocket size={24} />,
    color: 'pink'
  },
  {
    role: 'Co-founder',
    company: 'SinapsisIT',
    period: '2025 - Present',
    desc: 'Co-founder of a tech company built with a close collaborator, focused on developing custom websites and mobile applications for clients. We help businesses turn their ideas into functional, user-friendly digital products.',
    icon: <Laptop size={24} />,
    color: 'blue'
  },
  {
    role: 'Project Developer (University Projects)',
    company: 'Freelance',
    period: '2022 - 2026',
    desc: 'Worked on multiple academic projects involving web and application development. Built functional systems using modern technologies such as JavaScript, Python, and databases. Focused on problem-solving, clean design, and user experience.',
    icon: <Palette size={24} />,
    color: 'yellow'
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">
            <span className="wobbly-underline">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey and the impact I've made.</p>
        </div>

        <div className={styles.timeline}>
          {/* Handdrawn squiggly line SVG spanning the height */}
          <div className={styles.lineWrapper} aria-hidden="true">
            <svg width="40" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M20,0 Q35,50 20,100 T20,200 T20,300 T20,400 T20,500 T20,600 T20,700 T20,800 T20,900 T20,1000 T20,1100 T20,1200 T20,1300 T20,1400 T20,1500 T20,1600 T20,1700 T20,1800 T20,1900 T20,2000"
                fill="none" stroke="var(--ink)" strokeWidth="4" strokeDasharray="10 15" strokeLinecap="round" />
            </svg>
          </div>

          {experiences.map((exp, i) => (
            <div key={i} className={`${styles.item} ${i % 2 === 0 ? styles.itemLeft : styles.itemRight}`}>

              <div className={styles.dotWrapper}>
                <div className={`${styles.dot} ${styles[exp.color]}`}>
                  <span style={{ display: 'flex' }}>{exp.icon}</span>
                </div>
              </div>

              <div className={`doodle-box ${styles.content} ${styles[`content-${exp.color}`]}`}>
                {/* Paper clip doodle matching the alignment */}
                <div className={`${styles.paperclip} ${i % 2 === 0 ? styles.clipRight : styles.clipLeft}`} aria-hidden="true">
                  <svg viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15,20 L15,80 A10,10 0 0,0 35,80 L35,15 A15,15 0 0,0 5,15 L5,70 A5,5 0 0,0 15,70 L15,30"
                      fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>

                <div className={styles.periodBadge}>{exp.period}</div>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>@ {exp.company}</h4>
                <p className={styles.desc}>{exp.desc}</p>

                {/* Abstract corner doodle */}
                <svg className={styles.cornerDoodle} viewBox="0 0 50 50" aria-hidden="true">
                  <path d="M40,10 L10,40 M30,10 L10,30 M50,20 L20,50" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                </svg>
              </div>
            </div>
          ))}

          {/* Endpoint 'X marks the spot' */}
          <div className={styles.endpoint} aria-hidden="true">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,10 L40,40 M40,10 L10,40" stroke="var(--accent-pink)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
