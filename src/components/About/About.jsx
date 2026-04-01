import { GraduationCap, Briefcase, Globe, Coffee, User } from 'lucide-react';
import styles from './About.module.css';

const facts = [
  { icon: <GraduationCap size={28} />, label: 'Education', value: 'B.Sc. in CSE, BUET' },
  { icon: <Briefcase size={28} />, label: 'Experience', value: '3+ Years' },
  { icon: <Globe size={28} />, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: <Coffee size={28} />, label: 'Fuel', value: '∞ cups of coffee' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about"
             style={{ background: 'var(--paper-dark)' }}>
      <div className="container">
        <div className={styles.grid}>
          {/* Doodle illustration side */}
          <div className={styles.illustrationCol}>
            <div className={styles.sketchCard}>
              <svg className={styles.sketch} viewBox="0 0 320 380" xmlns="http://www.w3.org/2000/svg">
                {/* Monitor */}
                <rect x="40" y="30" width="240" height="170" rx="8" ry="8"
                      fill="#faf6f0" stroke="#1a1a2e" strokeWidth="4"/>
                <rect x="55" y="45" width="210" height="140" rx="4" ry="4"
                      fill="#1a1a2e"/>
                {/* Code on screen */}
                <rect x="70" y="58" width="120" height="6" rx="3" fill="#4ecdc4" opacity="0.8"/>
                <rect x="70" y="72" width="80" height="6" rx="3" fill="#ffd60a" opacity="0.8"/>
                <rect x="85" y="86" width="100" height="6" rx="3" fill="#ff6b9d" opacity="0.8"/>
                <rect x="85" y="100" width="60" height="6" rx="3" fill="#95e1a5" opacity="0.8"/>
                <rect x="70" y="114" width="90" height="6" rx="3" fill="#4ecdc4" opacity="0.8"/>
                <rect x="70" y="128" width="110" height="6" rx="3" fill="#c77dff" opacity="0.8"/>
                <rect x="70" y="142" width="70" height="6" rx="3" fill="#ffd60a" opacity="0.8"/>
                <rect x="68" y="56" width="8" height="6" rx="2" fill="#ff6b9d"/>
                {/* Stand */}
                <rect x="140" y="200" width="40" height="30" rx="2" fill="#f5f0e8" stroke="#1a1a2e" strokeWidth="3"/>
                <rect x="100" y="228" width="120" height="12" rx="4" fill="#f5f0e8" stroke="#1a1a2e" strokeWidth="3"/>
                {/* Keyboard */}
                <rect x="60" y="268" width="200" height="50" rx="6" fill="#f5f0e8" stroke="#1a1a2e" strokeWidth="3"/>
                <rect x="75" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="93" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="111" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="129" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="147" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="165" y="278" width="12" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="183" y="278" width="18" height="8" rx="2" fill="#1a1a2e" opacity="0.3"/>
                <rect x="90" y="294" width="140" height="8" rx="2" fill="#1a1a2e" opacity="0.2"/>
                {/* Coffee cup */}
                <ellipse cx="270" cy="290" rx="20" ry="10" fill="#ffd60a" stroke="#1a1a2e" strokeWidth="2.5"/>
                <rect x="250" y="290" width="40" height="30" fill="#ffd60a" stroke="#1a1a2e" strokeWidth="2.5"/>
                <path d="M290,300 Q305,300 305,312 Q305,325 290,325" fill="none" stroke="#1a1a2e" strokeWidth="2.5"/>
                {/* Decorations */}
                <text x="250" y="50" fontFamily="Caveat" fontSize="18" fill="#ff6b9d" transform="rotate(15,260,50)">// magic</text>
                <text x="10" y="320" fontFamily="Caveat" fontSize="16" fill="#4ecdc4" transform="rotate(-10,30,320)">git push ✓</text>
              </svg>
              <div className={styles.sketchLabel}>my natural habitat 🏠</div>
            </div>
          </div>

          {/* Text side */}
          <div className={styles.textCol}>
            <span className="doodle-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              About Me <User size={16} />
            </span>
            <h2 className={`section-title ${styles.title}`}>
              Who's this guy?
            </h2>

            <div className={styles.bio}>
              <p>
                I'm <strong>Mahbub</strong> — a passionate software engineer who loves building
                things on the web. I thrive at the intersection of <span className="highlight-tape">creativity</span> and
                technical precision.
              </p>
              <p>
                When I'm not hammering at the keyboard, you'll find me sketching UI ideas on paper,
                contributing to open source, or debugging something I definitely didn't break 🙃
              </p>
              <p>
                I believe great software is built with <em>empathy for users</em>, obsession over
                details, and a pinch of madness.
              </p>
            </div>

            {/* Fact grid */}
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label} className={`doodle-box ${styles.factCard}`}>
                  <span className={styles.factEmoji}>{f.icon}</span>
                  <div>
                    <div className={styles.factLabel}>{f.label}</div>
                    <div className={styles.factValue}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
