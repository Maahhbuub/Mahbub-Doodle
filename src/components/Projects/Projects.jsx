import { Annoyed, Code, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'SatheCholo',
    desc: 'A ride-sharing platform that integrates intra-city ride sharing and inter-city carpooling.',
    tags: ['React Native', 'Express.Js', 'Redis', 'Firebase', 'PostgreSQL'],
    color: 'pink',
    link: 'https://www.example.com/',
    repo: 'https://github.com/SatheCholo/sathecholo-app',
  },
  {
    id: 2,
    title: 'DirectEdge',
    desc: 'Built a 3-sided platform connecting farmers, distributors, and retailers to reduce supply chain inefficiencies.',
    tags: ['Python', 'PHP', 'JavaScript', 'MySQL'],
    color: 'blue',
    link: 'https://www.example.com/',
    repo: 'https://github.com/TashinParvez/direct-edge',
  },
  {
    id: 3,
    title: 'Wanderlust',
    desc: 'Developed a full-stack rental platform for discovering and managing accommodation listings.',
    tags: ['EJS', 'ExpressJs', 'MongoDB', 'Cloudinary'],
    color: 'green',
    link: 'https://wanderlust-ltah.onrender.com/',
    repo: 'https://github.com/Maahhbuub/Wanderlust',
  },
  {
    id: 4,
    title: 'Smaller',
    desc: 'Built a full-stack URL shortening platform with QR code generation, password-protected links, and AI-based click analysis to track and predict user engagement.',
    tags: ['React', 'ExpressJs', 'MongoDB', 'Redis'],
    color: 'yellow',
    link: 'https://www.example.com/',
    repo: 'https://github.com/Maahhbuub/Shorten',
  },
  {
    id: 5,
    title: 'Cook Corner',
    desc: 'A full-featured web platform that helps users discover recipes, plan meals, track nutrition, and manage kitchen activities more efficiently.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    color: 'blue',
    link: 'https://www.example.com/',
    repo: 'https://github.com/TashinParvez/Cook-Corner',
  },
  {
    id: 6,
    title: 'ExeCode',
    desc: 'ExeCode is a comprehensive online competitive programming platform that provides a complete ecosystem for competitive programming.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    color: 'pink',
    link: 'https://www.example.com/',
    repo: 'https://github.com/Maahhbuub/ExeCode',
  }
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects"
      style={{ background: 'var(--paper)' }}>
      {/* Background tape strips */}
      <div className={styles.tapeTopLeft} aria-hidden="true" />
      <div className={styles.tapeBottomRight} aria-hidden="true" />

      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">
            Featured <span className="highlight-tape">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of stuff I've built.
            <br />Mostly it works. Sometimes it breaks
            <span className='project-icon'><Annoyed size={12} /></span>
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article key={p.id} className={`doodle-box ${styles.card}`}>

              {/* Illustration Header representing a sketch placeholder */}
              <div className={`${styles.cardHeader} ${styles[p.color]}`}>
                <div className={styles.cardTape} aria-hidden="true" />
                <svg className={styles.abstractSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
                  {i % 2 === 0 ? (
                    <>
                      <circle cx="20" cy="80" r="10" fill="none" stroke="var(--ink)" strokeWidth="3" />
                      <path d="M40,50 Q60,10 80,60 T100,50" fill="none" stroke="var(--ink)" strokeWidth="3" />
                      <rect x="70" y="20" width="15" height="15" fill="none" stroke="var(--ink)" strokeWidth="3" transform="rotate(15 70 20)" />
                    </>
                  ) : (
                    <>
                      <path d="M10,90 L50,10 L90,90 Z" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M30,50 L70,50" fill="none" stroke="var(--ink)" strokeWidth="3" strokeDasharray="5,5" />
                      <circle cx="50" cy="50" r="5" fill="var(--ink)" stroke="none" />
                    </>
                  )}
                </svg>

                <div className={styles.linksOverlay}>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
                    <Code size={18} />
                  </a>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.more}>
          <a href="https://github.com/Maahhbuub" target="_blank" rel="noreferrer" className="btn-doodle">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
