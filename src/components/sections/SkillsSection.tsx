import React from 'react';
import styles from './sections.module.css';

const skillCategories = [
  {
    title: 'Test Automation Frameworks',
    skills: ['Cypress.io', 'Selenium WebDriver', 'Page Object Model (POM)', 'Cucumber BDD', 'Gherkin Syntax'],
  },
  {
    title: 'Testing Tools & Verification',
    skills: ['Postman API Testing', 'REST Assured', 'TestNG', 'JUnit', 'Maven', 'Regression & Exploratory Testing', 'SDLC / STLC'],
  },
  {
    title: 'Programming & Logic',
    skills: ['Core Java', 'JavaScript (ES6+)', 'Node.js', 'React.js', 'React Native', 'SQL Server / Relational Data'],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: ['Jenkins CI/CD Gates', 'Git & GitHub', 'Gradle', 'Android SDK Automation', 'VS Code', 'Agile / Scrum'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>TECHNICAL CAPABILITIES</span>
          <h2 className={styles.sectionTitle}>Core Competencies & Tooling</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3 className={styles.skillCategoryTitle}>{cat.title}</h3>
              <div className={styles.pillCluster}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
