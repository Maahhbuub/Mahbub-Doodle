import { useRef } from 'react';
import styles from './Gallery.module.css';
import { useGalleryAnimations } from './galleryAnimations';
import { galleryData } from '../../data/galleryData';

export default function Gallery() {
    const containerRef = useRef(null);
    useGalleryAnimations(containerRef);

    return (
        <section ref={containerRef} className={`section ${styles.gallerySection}`} id="gallery">
            <div className="container">
                <div className={`${styles.header} gsap-gallery-header`}>
                    <h2 className="section-title">
                        Life in <span className="highlight-tape">Pictures</span>
                    </h2>
                    <p className="section-subtitle">A glimpse of my favorite moments & people.</p>
                </div>

                <div className={styles.grid}>
                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${styles.polaroid} gsap-gallery-polaroid`}
                            style={{ '--rotation': `${(index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1)}deg` }}
                        >
                            <div className={styles.tape} aria-hidden="true"></div>
                            <div className={styles.imageContainer}>
                                <img src={item.image} alt={item.name} className={styles.image} />
                            </div>
                            <div className={styles.caption}>
                                <h3 className={styles.name}>{item.name}</h3>
                                <p className={styles.message}>{item.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
