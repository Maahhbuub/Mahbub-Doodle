import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mailbox, Mail, Smartphone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';
import { useContactAnimations } from './contactAnimations';

export default function Contact() {
  const formRef = useRef();
  const containerRef = useRef(null);
  const [status, setStatus] = useState('');

  useContactAnimations(containerRef);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <section ref={containerRef} className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <div className={styles.header}>
              <h2 className={`section-title gsap-contact-text`}>
                Let's Connect
                <svg className="title-underline" preserveAspectRatio="none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="gsap-contact-deco" vectorEffect="non-scaling-stroke" d="M3 9C80.5 4.5 220.5 -1.5 297 9" stroke="#ff9a3c" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </h2>
              <p className={`section-subtitle ${styles.desc} gsap-contact-text`}>
                Have a project in mind, need a developer, or just want to say hi?
                My inbox is always open. Drop me a line and I'll get back to you as soon as I finish my coffee!
              </p>
            </div>

            <div className={styles.contactInfo}>
              <div className={`${styles.infoRow} gsap-contact-info`}>
                <span className={styles.infoIcon} style={{ display: 'flex', color: 'var(--ink)' }}><Mail size={24} /></span>
                <a href="mailto:mrahman221441@gmail.com" className={styles.infoLink}>mrahman221441@gmail.com</a>
              </div>
              <div className={`${styles.infoRow} gsap-contact-info`}>
                <span className={styles.infoIcon} style={{ display: 'flex', color: 'var(--ink)' }}><Smartphone size={24} /></span>
                <a href="tel:+8801744177620" className={styles.infoLink}>+88 017 441 77 620</a>
              </div>
            </div>

            {/* Paper plane doodle */}
            <div className={`${styles.planeWrapper} gsap-contact-plane`} aria-hidden="true">
              <svg className={styles.plane} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,90 L90,10 L70,90 L40,60 L90,10 M40,60 L20,70 L10,90" fill="none" stroke="#1a1a2e" strokeWidth="4" strokeLinejoin="round" />
              </svg>
              {/* Dotted trail */}
              <svg className={styles.trail} viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 Q40,40 100,0" fill="none" stroke="#ff6b9d" strokeWidth="3" strokeDasharray="6,8" />
              </svg>
            </div>
          </div>

          <div className={`${styles.formCol} gsap-contact-form`}>
            <form ref={formRef} onSubmit={sendEmail} className={`doodle-box ${styles.form}`}>
              <div className={styles.pin} aria-hidden="true" style={{ display: 'flex', color: 'var(--accent-pink)' }}><MapPin size={28} fill="var(--accent-pink)" /></div>
              <h3 className={styles.formTitle}>Drop a Message</h3>

              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input type="text" name="user_name" id="name" required className={styles.input} placeholder="Mahbub" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Your Email</label>
                <input type="email" name="user_email" id="email" required className={styles.input} placeholder="mahbub@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" rows="4" required className={styles.textarea} placeholder="What's up Dude?"></textarea>
              </div>

              {status && <p className={styles.statusMsg} style={{ color: 'var(--ink)', fontWeight: 'bold', marginBottom: '10px' }}>{status}</p>}

              <button type="submit" disabled={status === 'Sending...'} className={`btn-doodle pink ${styles.submitBtn}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
