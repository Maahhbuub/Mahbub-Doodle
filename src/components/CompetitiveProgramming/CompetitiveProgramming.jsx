import { Trophy, Code, ChefHat, SquareTerminal, Globe, BarChart2, Gavel, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import styles from './CompetitiveProgramming.module.css';
import { useCPAnimations } from './cpAnimations';

const platforms = [
  { name: 'Codeforces', handle: '@mahbubur', stats: 'Specialist · 1400+ rating', icon: <BarChart2 size={24} />, color: 'blue', link: 'https://codeforces.com/profile/mahbubur' },
  { name: 'LeetCode', handle: '@mahbubur_rahman', stats: '500+ problems solved', icon: <Code size={24} />, color: 'yellow', link: 'https://leetcode.com/mahbubur_rahman' },
  { name: 'CodeChef', handle: '@mahbubur', stats: '3★ · Top 10% nationally', icon: <ChefHat size={24} />, color: 'green', link: 'https://www.codechef.com/users/mahbubur' },
  { name: 'AtCoder', handle: '@mahbubur', stats: 'Regular contest participant', icon: <Globe size={24} />, color: 'purple', link: 'https://atcoder.jp/users/mahbubur' },
];

export default function CompetitiveProgramming() {
  const containerRef = useRef(null);
  useCPAnimations(containerRef);

  return (
    <section ref={containerRef} className={`section ${styles.cp}`} id="competitive-programming">
      <div className="container">
        <div className={`${styles.header} gsap-cp-header`}>
          <h2 className="section-title">
            Competitive Programming
            <svg className="title-underline" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="gsap-cp-deco" vectorEffect="non-scaling-stroke" d="M3 9C80.5 4.5 220.5 -1.5 297 9" stroke="#ff9a3c" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="section-subtitle">Where I flex my algorithms and data structures.</p>
        </div>

        <div className={`${styles.cpGrid} gsap-cp-grid`}>
          {platforms.map((p, i) => (
            <a key={p.name}
              href={p.link !== '#' ? p.link : undefined}
              target="_blank"
              rel="noreferrer"
              className={`doodle-box ${styles.cpCard} ${styles[p.color]} gsap-cp-card`}
              style={{ animationDelay: `${i * 0.1}s` }}>

              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {p.icon}
                </div>
                <h3 className={styles.platformName}>{p.name}</h3>
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.platformHandle}>{p.handle}</h4>
                <p className={styles.platformStats}>{p.stats}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>View Profile</span>
                <ArrowRight size={18} />
              </div>
            </a>
          ))}
        </div>

        <div className={`${styles.achievementsListWrapper}`}>
          <ul className={`${styles.achievementsList} gsap-cp-list`}>
            <li>
              <span className={styles.bulletArrow}>→</span>
              ICPC Dhaka Regional Participant 2023 & 2024
            </li>
            <li>
              <span className={styles.bulletArrow}>→</span>
              National Collegiate Programming Contest qualifier
            </li>
            <li>
              <span className={styles.bulletArrow}>→</span>
              Strong in dynamic programming, graph algorithms, and number theory
            </li>
          </ul>
        </div>

        {/* Decorative squiggle */}
        <div className={`${styles.decoration} gsap-cp-wrapper-deco`} aria-hidden="true" style={{ transformOrigin: 'center' }}>
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20"
              fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
