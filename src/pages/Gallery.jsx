import styles from './Gallery.module.css';
import GalleryComponent from '../components/Gallery/Gallery';


export default function GalleryPage() {
    return (
        <div className={styles.gallery}>
            <GalleryComponent />
        </div>
    );
}