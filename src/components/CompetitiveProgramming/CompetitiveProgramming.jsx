import { Trophy, Code, ChefHat, SquareTerminal, Globe, BarChart2, Gavel } from 'lucide-react';
import styles from './CompetitiveProgramming.module.css';

const platforms = [
  { name: 'Codeforces', icon: <BarChart2 size={16} />, color: 'blue', link: 'https://codeforces.com/profile/Maahhbuub' },
  { name: 'LeetCode', icon: <Code size={16} />, color: 'yellow', link: 'https://leetcode.com/Maahhbuub/' },
  { name: 'CodeChef', icon: <ChefHat size={16} />, color: 'green', link: 'https://www.codechef.com/users/maahhbuub' },
  { name: 'HackerRank', icon: <SquareTerminal size={16} />, color: 'green', link: 'https://www.hackerrank.com/Maahhbuub' },
  { name: 'HackerEarth', icon: <Globe size={16} />, color: 'pink', link: 'https://www.hackerearth.com/@Maahhbuub' },
  { name: 'Vjudge', icon: <Gavel size={16} />, color: 'purple', link: 'https://vjudge.net/user/Maahhbuub' },
];

export default function CompetitiveProgramming() {
  return (
    <section className={`section ${styles.cp}`} id="competitive-programming">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">
            Competitive <span className="wobbly-underline">Programming</span>
          </h2>
          <p className="section-subtitle">Where I flex my algorithms and data structures.</p>
        </div>

        <div className={styles.cpGrid}>
          {platforms.map((p, i) => (
            <a key={p.name}
              href={p.link !== '#' ? p.link : undefined}
              target="_blank"
              rel="noreferrer"
              className={`doodle-box ${styles.cpBadge} ${styles[p.color]}`}
              style={{ animationDelay: `${i * 0.1}s`, textDecoration: 'none' }}>
              <span className={styles.cpIcon} style={{ display: 'flex' }}>{p.icon}</span>
              <span className={styles.cpName}>{p.name}</span>
            </a>
          ))}
        </div>

        {/* Decorative squiggle */}
        <div className={styles.decoration} aria-hidden="true">
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q20,0 40,20 T80,20 T120,20 T160,20 T200,20"
              fill="none" stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
