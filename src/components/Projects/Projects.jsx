import { Briefcase, Folder, Code, ExternalLink } from 'lucide-react';
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
          {projects.map((p) => (
            <article key={p.id} className={`doodle-box ${styles.card} ${styles[p.color]}`}>
              <div className={styles.cardHeader}>
                <div className={styles.folders} style={{ display: 'flex', color: 'var(--ink)' }}>
                   <Folder size={32} />
                </div>
                <div className={styles.links}>
                  <a href={p.repo} aria-label="Github Repo" style={{ display: 'flex', color: 'var(--ink)' }}>
                    <Code size={22} />
                  </a>
                  <a href={p.link} aria-label="Live Demo" style={{ display: 'flex', color: 'var(--ink)' }}>
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
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
