import { Swords, FileCode2, Atom, Hexagon, Type, Paintbrush, Triangle, GitBranch, PenTool, Leaf, Network } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
  { name: 'JavaScript', icon: <FileCode2 size={24} />, color: 'yellow' },
  { name: 'React', icon: <Atom size={24} />, color: 'blue' },
  { name: 'Node.js', icon: <Hexagon size={24} />, color: 'green' },
  { name: 'TypeScript', icon: <Type size={24} />, color: 'blue' },
  { name: 'CSS/HTML', icon: <Paintbrush size={24} />, color: 'pink' },
  { name: 'Next.js', icon: <Triangle size={24} />, color: 'purple' },
  { name: 'Git', icon: <GitBranch size={24} />, color: 'purple' },
  { name: 'Figma', icon: <PenTool size={24} />, color: 'pink' },
  { name: 'MongoDB', icon: <Leaf size={24} />, color: 'green' },
  { name: 'GraphQL', icon: <Network size={24} />, color: 'pink' },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">
            Skills & <span className="wobbly-underline">Tools</span>
          </h2>
          <p className="section-subtitle">The things I use to turn coffee into code.</p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((s, i) => (
            <div key={s.name} 
                 className={`doodle-box ${styles.skillBadge} ${styles[s.color]}`}
                 style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={styles.skillIcon} style={{ display: 'flex' }}>{s.icon}</span>
              <span className={styles.skillName}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* Decorative squiggle */}
        <div className={styles.decoration} aria-hidden="true">
           <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20" 
                    fill="none" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" />
           </svg>
        </div>
      </div>
    </section>
  );
}
