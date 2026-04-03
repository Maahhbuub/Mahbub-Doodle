import styles from './Projects.module.css';

import ProjectsComponent from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Projects() {
    return (
        <>
            <div className={styles.projects}>
                <Link to="/" className={styles.backBtn}>
                    <ArrowLeft size={20} /> Go Home
                </Link>
                <ProjectsComponent />
                <Contact />
            </div>
        </>
    );
}

export default Projects;