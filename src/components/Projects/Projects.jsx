import { Annoyed, Code, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import styles from './Projects.module.css';
import { projects } from '../../data/projects';
import { useProjectsAnimations } from './projectsAnimations';
import ProjectModal from './ProjectModal';



export default function Projects({ limit, showMoreBtn }) {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  useProjectsAnimations(containerRef);

  return (
    <>
      <section ref={containerRef} className={`section ${styles.projects}`} id="projects"
        style={{ background: 'var(--paper)' }}>
        {/* Background tape strips */}
        <div className={styles.tapeTopLeft} aria-hidden="true" />
        <div className={styles.tapeBottomRight} aria-hidden="true" />

        <div className="container">
          <div className={`${styles.header} gsap-project-header`}>
            <h2 className="section-title">
              Featured Projects
              <svg className="title-underline" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="gsap-projects-deco" vectorEffect="non-scaling-stroke" d="M3 9C80.5 4.5 220.5 -1.5 297 9" stroke="#ff9a3c" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </h2>
            <p className="section-subtitle">
              A selection of stuff I've built.
              <br />Mostly it works. Sometimes it breaks
              <span className='project-icon'><Annoyed size={12} /></span>
            </p>
          </div>

          <div className={`${styles.grid} gsap-project-grid`}>
            {(limit ? projects.slice(0, limit) : projects).map((p, i) => (
              <article
                key={p.id}
                className={`doodle-box ${styles.card} gsap-project-card`}
                onClick={() => setSelectedProject(p)}
                style={{ cursor: 'pointer' }}
              >

                {/* Illustration Header */}
                <div className={`${styles.cardHeader} ${styles[p.color]}`}>

                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className={styles.cardImg}
                    />
                  ) : (
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
                  )}

                  <div className={styles.linksOverlay}>
                    {p.repos ? (
                      <>
                        <a href={p.repos.frontend} target="_blank" rel="noopener noreferrer" aria-label="Frontend Repo" title="Frontend" onClick={e => e.stopPropagation()} className={styles.repoIconBtn}>
                          <Code size={16} />
                          <span className={styles.repoLabel}>FE</span>
                        </a>
                        <a href={p.repos.backend} target="_blank" rel="noopener noreferrer" aria-label="Backend Repo" title="Backend" onClick={e => e.stopPropagation()} className={styles.repoIconBtn}>
                          <Code size={16} />
                          <span className={styles.repoLabel}>BE</span>
                        </a>
                      </>
                    ) : (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="Github Repo" onClick={e => e.stopPropagation()}>
                        <Code size={18} />
                      </a>
                    )}
                    <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" onClick={e => e.stopPropagation()}>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  {(p.achievement || p.type) && (
                    <div className={styles.badges}>
                      {p.achievement && (
                        <span className={`${styles.badge} ${styles.badgeAchievement}`}>{p.achievement}</span>
                      )}
                      {p.type && (
                        <span className={`${styles.badge} ${styles.badgeType}`}>{p.type}</span>
                      )}
                    </div>
                  )}
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <div className={styles.tags}>
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                    {p.tags.length > 4 && (
                      <span className={styles.tag}>+{p.tags.length - 4}</span>
                    )}
                  </div>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={`${styles.more} gsap-project-more`}>
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

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
