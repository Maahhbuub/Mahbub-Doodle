import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import styles from './Gallery.module.css';
import { useGalleryAnimations } from './galleryAnimations';
import { galleryData } from '../../data/galleryData';

export default function Gallery({ limit, showMoreBtn }) {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    useGalleryAnimations(containerRef);

    const displayedData = limit ? galleryData.slice(0, limit) : galleryData;

    const closeModal = () => setSelectedImage(null);

    return (
        <section ref={containerRef} className={`section ${styles.gallerySection}`} id="gallery">
            <div className="container">
                <div className={`${styles.header} gsap-gallery-header`}>
                    <h2 className="section-title">
                        Life in Pictures
                        <svg className="title-underline" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="gsap-gallery-deco" vectorEffect="non-scaling-stroke" d="M3 9C80.5 4.5 220.5 -1.5 297 9" stroke="#ff9a3c" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                    </h2>
                    <p className="section-subtitle">A glimpse of my favorite moments & people.</p>
                </div>

                <div className={styles.grid}>
                    {displayedData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${styles.polaroid} gsap-gallery-polaroid`}
                            style={{ '--rotation': `${(index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1)}deg` }}
                            onClick={() => setSelectedImage(item.image)}
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

                {showMoreBtn && (
                    <div className={`${styles.more} gsap-gallery-more`}>
                        <Link to="/gallery" className="btn-doodle">
                            Explore More Pictures
                        </Link>
                    </div>
                )}

                {/* Lightbox Modal rendered via Portal to escape all stacking contexts */}
                {selectedImage && createPortal(
                    <div className={styles.modalOverlay} onClick={closeModal}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                                <X size={24} strokeWidth={2.5} />
                            </button>
                            <img src={selectedImage} alt="Gallery Preview" className={styles.modalImage} />
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
}
