import { Annoyed, Code, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { projects } from '../../data/projects';



export default function Projects({ limit, showMoreBtn }) {
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
          {(limit ? projects.slice(0, limit) : projects).map((p, i) => (
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

                <Link to={`/projects/${p.id}`} className={styles.viewDetails}>
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.more}>
          {showMoreBtn ? (
            <Link to="/projects" className="btn-doodle">
              Show More Projects
            </Link>
          ) : (
            <a href="https://github.com/Maahhbuub" target="_blank" rel="noreferrer" className="btn-doodle">
              View All on GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
