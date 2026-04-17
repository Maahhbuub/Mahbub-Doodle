import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from 'lucide-react';
import styles from './ProjectDetails.module.css';
import { useProjectDetailsAnimations } from './projectDetailsAnimations';

const ProjectDetails = () => {
    const { id } = useParams();
    const containerRef = useRef(null);
    const project = projects.find(p => p.id === parseInt(id));

    useProjectDetailsAnimations(containerRef);

    if (!project) {
        return (
            <div className={`container ${styles.notFound}`}>
                <h2 className="section-title">Project Not Found</h2>
                <Link to="/projects" className={styles.backBtn}>
                    <ArrowLeft size={20} /> Back to All Projects
                </Link>
            </div>
        );
    }

    return (
        <>
            <div ref={containerRef} className={`section ${styles.projectDetail}`}>
                <div className="container">
                    <Link to="/projects" className={`${styles.backBtn} gsap-pd-back`}>
                        <ArrowLeft size={20} /> Back to All Projects
                    </Link>

                    <div className={`${styles.detailLayout} doodle-box`}>
                        <div className={styles.tape} />

                        <div className={`${styles.header} gsap-pd-header`}>
                            <div className={`${styles.colorBar} ${styles[project.color]}`} />
                            <h1 className={styles.title}>{project.title}</h1>
                            <p className={styles.shortDesc}>{project.desc}</p>

                            <div className={styles.techStack}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.contentGrid}>
                            <div className={styles.mainInfo}>
                                <section className={`${styles.section} gsap-pd-section`}>
                                    <h3 className={styles.sectionTitle}>Overview</h3>
                                    <p className={styles.longDesc}>{project.longDesc}</p>
                                </section>

                                <section className={`${styles.section} gsap-pd-section`}>
                                    <h3 className={styles.sectionTitle}>Key Features</h3>
                                    <ul className={styles.featureList}>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className={`${styles.featureItem} gsap-pd-feature`}>
                                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className={styles.sidebar}>
                                <div className={`${styles.actionCard} doodle-box gsap-pd-sidebar`}>
                                    <h3 className={styles.sidebarTitle}>Links</h3>
                                    <div className={styles.links}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-doodle">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-doodle outline">
                                            <Code size={18} /> GitHub Repo
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.sketchCard} doodle-box gsap-pd-sidebar`}>
                                    <h3 className={styles.sidebarTitle}>Project Sketch</h3>
                                    <div className={styles.sketchContainer}>
                                        <svg viewBox="0 0 100 100" className={styles.sketchSvg}>
                                            <rect x="10" y="10" width="80" height="60" fill="none" stroke="var(--ink)" strokeWidth="2" rx="4" />
                                            <circle cx="50" cy="40" r="15" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="4 4" />
                                            <path d="M20 80 L80 80" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
                                            <path d="M30 85 L70 85" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
