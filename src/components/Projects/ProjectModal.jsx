import { useEffect, useRef } from 'react';
import { ExternalLink, Code, CheckCircle2, Layers, Calendar, Tag, Trophy, X } from 'lucide-react';
import styles from './ProjectModal.module.css';
import detailStyles from '../../pages/ProjectDetails.module.css';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll while modal open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={styles.modal}>
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.tape} />

        {/* Scrollable content */}
        <div className={styles.scrollBody}>
          {/* Header */}
          <div className={`${detailStyles.header}`}>
            <div className={`${detailStyles.colorBar} ${detailStyles[project.color]}`} />
            <h2 className={detailStyles.title}>{project.title}</h2>
            <p className={detailStyles.shortDesc}>{project.desc}</p>
            <div className={detailStyles.techStack}>
              {project.tags.map(tag => (
                <span key={tag} className={detailStyles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className={detailStyles.contentGrid}>
            <div className={detailStyles.mainInfo}>
              {/* Overview */}
              <section className={detailStyles.section}>
                <h3 className={detailStyles.sectionTitle}>Overview</h3>
                <p className={detailStyles.longDesc}>{project.longDesc}</p>
              </section>

              {/* Architecture */}
              {project.architecture && (
                <section className={detailStyles.section}>
                  <h3 className={detailStyles.sectionTitle}>Architecture</h3>
                  <div className={detailStyles.archGrid}>
                    {project.architecture.map((item, idx) => (
                      <div key={idx} className={detailStyles.archItem}>
                        <div className={detailStyles.archLayer}>
                          <Layers size={15} className={detailStyles.archIcon} />
                          {item.layer}
                        </div>
                        <p className={detailStyles.archDetail}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key Features */}
              <section className={detailStyles.section}>
                <h3 className={detailStyles.sectionTitle}>Key Features</h3>
                <ul className={detailStyles.featureList}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className={detailStyles.featureItem}>
                      <CheckCircle2 size={18} className={detailStyles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className={detailStyles.sidebar}>
              <div className={`${detailStyles.infoCard} doodle-box`}>
                <h3 className={detailStyles.sidebarTitle}>Project Info</h3>
                <ul className={detailStyles.infoList}>
                  {project.type && (
                    <li className={detailStyles.infoRow}>
                      <span className={detailStyles.infoLabel}><Tag size={14} /> Type</span>
                      <span className={detailStyles.infoValue}>{project.type}</span>
                    </li>
                  )}
                  {project.year && (
                    <li className={detailStyles.infoRow}>
                      <span className={detailStyles.infoLabel}><Calendar size={14} /> Year</span>
                      <span className={detailStyles.infoValue}>{project.year}</span>
                    </li>
                  )}
                  {project.status && (
                    <li className={detailStyles.infoRow}>
                      <span className={detailStyles.infoLabel}>Status</span>
                      <span className={`${detailStyles.infoValue} ${detailStyles[`status${project.status.replace(' ', '')}`]}`}>
                        <span className={detailStyles.statusDot} /> {project.status}
                      </span>
                    </li>
                  )}
                  {project.achievement && (
                    <li className={detailStyles.infoRow}>
                      <span className={detailStyles.infoLabel}><Trophy size={14} /> Award</span>
                      <span className={detailStyles.infoValue}>{project.achievement}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className={`${detailStyles.actionCard} doodle-box`}>
                <h3 className={detailStyles.sidebarTitle}>Links</h3>
                <div className={detailStyles.links}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-doodle">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-doodle outline">
                    <Code size={18} /> GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
