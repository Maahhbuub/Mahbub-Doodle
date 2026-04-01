import { Mailbox, Mail, Smartphone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This is under development. Please contact me via email or phone.');
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textCol}>
             <h2 className={`section-title ${styles.title}`}>
               Let's <span className="highlight-tape">Connect</span>
             </h2>
             <p className={styles.desc}>
               Have a project in mind, need a developer, or just want to say hi? 
               My inbox is always open. Drop me a line and I'll get back to you as soon as I finish my coffee!
             </p>
             
             <div className={styles.contactInfo}>
               <div className={styles.infoRow}>
                 <span className={styles.infoIcon} style={{ display: 'flex', color: 'var(--ink)' }}><Mail size={24} /></span>
                 <a href="mailto:mrahman221441@gmail.com" className={styles.infoLink}>mrahman221441@gmail.com</a>
               </div>
               <div className={styles.infoRow}>
                 <span className={styles.infoIcon} style={{ display: 'flex', color: 'var(--ink)' }}><Smartphone size={24} /></span>
                 <a href="tel:+8801744177620" className={styles.infoLink}>+880 1744 177 620</a>
               </div>
             </div>
             
             {/* Paper plane doodle */}
             <div className={styles.planeWrapper} aria-hidden="true">
               <svg className={styles.plane} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10,90 L90,10 L70,90 L40,60 L90,10 M40,60 L20,70 L10,90" fill="none" stroke="#1a1a2e" strokeWidth="4" strokeLinejoin="round"/>
               </svg>
               {/* Dotted trail */}
               <svg className={styles.trail} viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 Q40,40 100,0" fill="none" stroke="#ff6b9d" strokeWidth="3" strokeDasharray="6,8"/>
               </svg>
             </div>
          </div>
          
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={`doodle-box ${styles.form}`}>
               <div className={styles.pin} aria-hidden="true" style={{ display: 'flex', color: 'var(--accent-pink)' }}><MapPin size={28} fill="var(--accent-pink)" /></div>
               <h3 className={styles.formTitle}>Drop a Message</h3>
               
               <div className={styles.inputGroup}>
                 <label htmlFor="name" className={styles.label}>Your Name</label>
                 <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
               </div>
               
               <div className={styles.inputGroup}>
                 <label htmlFor="email" className={styles.label}>Your Email</label>
                 <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
               </div>
               
               <div className={styles.inputGroup}>
                 <label htmlFor="message" className={styles.label}>Message</label>
                 <textarea id="message" rows="4" required className={styles.textarea} placeholder="What's up?"></textarea>
               </div>
               
               <button type="submit" className={`btn-doodle pink ${styles.submitBtn}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                 Send Message <Send size={20} />
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
