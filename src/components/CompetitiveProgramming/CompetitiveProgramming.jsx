import { Trophy, Code, ChefHat, SquareTerminal, Globe, BarChart2, Gavel, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import styles from './CompetitiveProgramming.module.css';
import { useCPAnimations } from './cpAnimations';

const platforms = [
  { name: 'Codeforces', icon: <BarChart2 size={24} />, color: 'blue', link: 'https://codeforces.com/profile/TribalLiege' },
  { name: 'LeetCode', icon: <Code size={24} />, color: 'yellow', link: 'https://leetcode.com/Maahhbuub/' },
  { name: 'CodeChef', icon: <ChefHat size={24} />, color: 'green', link: 'https://www.codechef.com/users/maahhbuub' },
  { name: 'HackerRank', icon: <SquareTerminal size={24} />, color: 'green', link: 'https://www.hackerrank.com/profile/maahhbuub' },
  { name: 'HackerEarth', icon: <Globe size={24} />, color: 'pink', link: 'https://www.hackerearth.com/@maahhbuub/' },
  { name: 'Vjudge', icon: <Gavel size={24} />, color: 'purple', link: 'https://vjudge.net/user/mahbub620' },
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
                {/* Hand-drawn style activity graph */}
                <svg className={styles.graphDoodle} viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,25 Q10,15 20,20 T40,10 T60,20 T80,5 T100,15" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" opacity="0.5" />
                </svg>
              </div>

              <div className={styles.cardFooter}>
                <span>View Profile</span>
                <ArrowRight size={18} />
              </div>
            </a>
          ))}
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
