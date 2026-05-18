import { useRef } from 'react';
import { Trophy, Code, Star, Medal, Award } from 'lucide-react';
import styles from './Achievements.module.css';
import { achievements } from '../../data/achievements';
import { useAchievementsAnimations } from './achievementsAnimations';

const iconMap = {
    Trophy: <Trophy size={40} strokeWidth={1.5} />,
    Code: <Code size={40} strokeWidth={1.5} />,
    Star: <Star size={40} strokeWidth={1.5} />,
    Medal: <Medal size={40} strokeWidth={1.5} />,
    Award: <Award size={40} strokeWidth={1.5} />
};

function Achievements() {
    const containerRef = useRef(null);
    useAchievementsAnimations(containerRef);

    return (
        <section className={styles.achievements} ref={containerRef} id="achievements">
            <div className={`gsap-achievements-header ${styles.header}`}>
                <h2 className={styles.title}>
                    My Achievements
                    <svg className={styles.titleUnderline} viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`gsap-achievements-deco ${styles.path}`} d="M3 9C80.5 4.5 220.5 -1.5 297 9" stroke="#ff9a3c" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                </h2>
            </div>

            <div className={styles.grid}>
                {achievements.map((achievement, index) => (
                    <div className={`gsap-achievement-card ${styles.card} ${styles[`card${(index % 4) + 1}`]}`} key={achievement.id}>
                        <div className={styles.iconContainer}>
                            {iconMap[achievement.icon] || <Award size={40} strokeWidth={1.5} />}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{achievement.title}</h3>
                            <p className={styles.cardDate}>{achievement.date}</p>
                            <p className={styles.cardDescription}>{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Achievements;
