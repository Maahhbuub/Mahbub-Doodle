import { Briefcase, Code, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'DoodleTask',
    desc: 'A minimalist task manager designed entirely with a hand-drawn sketch aesthetic. Keeps your chaos organized in style.',
    tags: ['React', 'CSS Modules', 'Firebase'],
    color: 'pink',
    link: '#',
    repo: '#',
  },
  {
    id: 2,
    title: 'CodeSnippet.io',
    desc: 'Share and discover beautiful, syntactic-sugar code snippets. Features syntax highlighting and one-click copy.',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
    color: 'blue',
    link: '#',
    repo: '#',
  },
  {
    id: 3,
    title: 'WeatherSketch',
    desc: 'Real-time weather data displayed with dynamically generated illustrations based on current conditions.',
    tags: ['TypeScript', 'OpenWeather API'],
    color: 'green',
    link: '#',
    repo: '#',
  },
  {
    id: 4,
    title: 'Terminal Portfolio',
    desc: 'A geeky, interactive portfolio that looks and feels exactly like a Linux terminal. Try typing "help"!',
    tags: ['Vanilla JS', 'HTML5', 'CSS3'],
    color: 'yellow',
    link: '#',
    repo: '#',
  },
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
          <span className="doodle-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            My Work <Briefcase size={16} />
          </span>
          <h2 className="section-title">
            Featured <span className="highlight-tape">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of stuff I've built.
            <br/>Mostly it works. Sometimes it breaks. 😅
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
                    <a href={p.repo} aria-label="Github Repo">
                      <Code size={20} />
                    </a>
                    <a href={p.link} aria-label="Live Demo">
                      <ExternalLink size={20} />
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
           <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-doodle">
             View All on GitHub
           </a>
        </div>
      </div>
    </section>
  );
}
