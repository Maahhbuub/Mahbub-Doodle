import { Rocket, Laptop, Palette, MapPinned } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechDoodles Inc.',
    period: '2023 - Present',
    desc: 'Leading a team of 4 developers. Redesigned the core platform using React and Tailwind, improving performance by 40%.',
    icon: <Rocket size={24} />,
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Studio 99',
    period: '2020 - 2023',
    desc: 'Built custom e-commerce solutions and interactive web apps. Managed databases and API integrations via Node.js.',
    icon: <Laptop size={24} />,
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance',
    period: '2019 - 2020',
    desc: 'Crafted WordPress themes and custom HTML/CSS landing pages for local businesses. Learned the art of debugging.',
    icon: <Palette size={24} />,
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <span className="doodle-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            My Journey <MapPinned size={16} />
          </span>
          <h2 className="section-title">
            <span className="wobbly-underline">Experience</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {/* Handdrawn dotted line in background */}
          <div className={styles.line} aria-hidden="true" />

          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}>
                <span style={{ display: 'flex' }}>{exp.icon}</span>
              </div>
              
              <div className={`doodle-box ${styles.content} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>@ {exp.company}</h4>
                <p className={styles.desc}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
