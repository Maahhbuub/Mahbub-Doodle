import { Swords, FileCode2, Atom, Hexagon, Type, Paintbrush, Triangle, GitBranch, PenTool, Leaf, Network, Server, Flame, Database, Wind, Terminal, Coffee } from 'lucide-react';
import { useRef } from 'react';
import styles from './Skills.module.css';
import { useSkillsAnimations } from './skillsAnimations';

const skills = [
  { name: 'React', icon: <Atom size={16} />, color: 'blue' },
  { name: 'React Native', icon: <Atom size={16} />, color: 'blue' },
  { name: 'JavaScript', icon: <FileCode2 size={16} />, color: 'yellow' },
  { name: 'TypeScript', icon: <Type size={16} />, color: 'blue' },
  { name: 'Node.js', icon: <Hexagon size={16} />, color: 'green' },
  { name: 'Express.js', icon: <Server size={16} />, color: 'yellow' },
  { name: 'Firebase', icon: <Flame size={16} />, color: 'pink' },
  { name: 'Supabase', icon: <Database size={16} />, color: 'green' },
  { name: 'MongoDB', icon: <Leaf size={16} />, color: 'green' },
  { name: 'Mongoose', icon: <Database size={16} />, color: 'green' },
  { name: 'Redis', icon: <Database size={16} />, color: 'pink' },
  { name: 'PostgreSQL', icon: <Database size={16} />, color: 'blue' },
  { name: 'Prisma', icon: <Database size={16} />, color: 'blue' },
  { name: 'MySQL', icon: <Database size={16} />, color: 'purple' },
  { name: 'Tailwind CSS', icon: <Wind size={16} />, color: 'blue' },
  { name: 'C', icon: <FileCode2 size={16} />, color: 'blue' },
  { name: 'C++', icon: <FileCode2 size={16} />, color: 'blue' },
  { name: 'Python', icon: <Terminal size={16} />, color: 'yellow' },
  { name: 'Java', icon: <Coffee size={16} />, color: 'yellow' },
  { name: 'PHP', icon: <Server size={16} />, color: 'purple' },
  // { name: 'CSS/HTML', icon: <Paintbrush size={16} />, color: 'pink' },
  // { name: 'Next.js', icon: <Triangle size={16} />, color: 'purple' },
  { name: 'Git', icon: <GitBranch size={16} />, color: 'purple' },
  // { name: 'Figma', icon: <PenTool size={16} />, color: 'pink' },
  // { name: 'GraphQL', icon: <Network size={16} />, color: 'pink' },
];

export default function Skills() {
  const containerRef = useRef(null);
  useSkillsAnimations(containerRef);

  return (
    <section ref={containerRef} className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className={`${styles.header} gsap-skills-header`}>
          <h2 className="section-title">
            Skills & <span className="wobbly-underline">Tools</span>
          </h2>
          <p className="section-subtitle">The things I use to turn coffee into code.</p>
        </div>

        <div className={`${styles.skillsGrid} gsap-skills-grid`}>
          {skills.map((s, i) => (
            <div key={s.name}
              className={`doodle-box ${styles.skillBadge} ${styles[s.color]} gsap-skill-badge`}>
              <span className={styles.skillIcon} style={{ display: 'flex' }}>{s.icon}</span>
              <span className={styles.skillName}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* Decorative squiggle */}
        <div className={`${styles.decoration} gsap-skills-deco`} aria-hidden="true" style={{ transformOrigin: 'center' }}>
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20"
              fill="none" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
