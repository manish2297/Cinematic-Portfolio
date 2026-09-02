import React from 'react';
import styles from './sections.module.css';

export default function ContactSection() {
  return (
    <footer id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactCard}>
          <div className={styles.contactHeader}>
            <span className={styles.sectionBadge}>LET&apos;S CONNECT</span>
            <h2 className={styles.contactTitle}>Ready to build scalable, bug-free applications?</h2>
            <p className={styles.contactSubtitle}>
              Open to Software Development Engineer in Test (SDET), QA Automation, and Full-Stack Engineering roles.
            </p>
          </div>

          <div className={styles.contactInfoGrid}>
            <a href="mailto:manishsingh179805@gmail.com" className={styles.contactLink}>
              <span className={styles.contactIcon}>✉</span>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>manishsingh179805@gmail.com</span>
              </div>
            </a>

            <div className={styles.contactLink}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>Durgapur, West Bengal, India</span>
              </div>
            </div>

            <div className={styles.contactLink}>
              <span className={styles.contactIcon}>📱</span>
              <div>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>+91 8250713524</span>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Manish Singh. Crafted with Next.js, Three.js & GSAP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
