import React from 'react';
import styles from './sections.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>PROFILE & PHILOSOPHY</span>
          <h2 className={styles.sectionTitle}>Precision Quality Engineering Meets Modern Development</h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCardMain}>
            <p className={styles.leadParagraph}>
              Analytical Electrical Engineering graduate with <strong>1.75 years</strong> of disciplined professional experience specializing in manual, regression, and automated software quality assurance.
            </p>
            <p className={styles.bodyParagraph}>
              Proven expertise in diagnosing complex software system failures, authoring scalable test automation suites, and executing shift-left testing methodologies. Adept at analyzing application source code to rapidly isolate defects and collaborating with cross-functional development squads to optimize CI/CD delivery pipelines and minimize production defect escape rates.
            </p>

            <div className={styles.credentialsList}>
              <div className={styles.credentialItem}>
                <span className={styles.credIcon}>✦</span>
                <div>
                  <strong>ISTQB Certified Tester</strong>
                  <p>AI Testing Specialization — Algorithmic Quality Validation Models</p>
                </div>
              </div>
              <div className={styles.credentialItem}>
                <span className={styles.credIcon}>✦</span>
                <div>
                  <strong>B.Tech in Electrical Engineering</strong>
                  <p>Asansol Engineering College, West Bengal</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsColumn}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>1.75+</span>
              <span className={styles.statLabel}>Years Industry Experience</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>20%</span>
              <span className={styles.statLabel}>Reduction in Production Defects</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>CI/CD Pipeline Gate Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
