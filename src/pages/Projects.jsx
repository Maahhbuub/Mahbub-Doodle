import styles from './Projects.module.css';
import ProjectsComponent from '../components/Projects/Projects';

function Projects() {
    return (
        <>
            <div className={styles.projects}>
                <ProjectsComponent />
            </div>
        </>
    );
}

export default Projects;