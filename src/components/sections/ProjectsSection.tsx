import React from 'react';
import styles from './sections.module.css';

const projects = [
  {
    title: 'QA-Pulse: Quality Analytics Dashboard',
    category: 'Full-Stack & Test Analytics',
    stack: ['JavaScript', 'Node.js', 'JSON Parsing', 'DOM Manipulation'],
    description:
      'Engineered a centralized data reporting platform designed to ingest raw test logs and programmatically display real-time test execution health, code coverage, and automation pass/fail trends across fragmented Selenium and Cypress runners.',
  },
  {
    title: 'Expense FinTech: Test Automation Matrix',
    category: 'Mobile & Offline-First QA',
    stack: ['Core Java', 'Selenium WebDriver', 'Android SDK Build Automation'],
    description:
      'Architected an end-to-end automation verification layout targeting an offline-first financial logging application. Built boundary-value analyses and data assertion loops to stress-test data persistence and local serialization mechanics.',
  },
  {
    title: 'HSBC Banking Application Automation',
    category: 'Enterprise Functional Verification',
    stack: ['Cypress.io', 'Node.js', 'Headless Browser Execution', 'Agile'],
    description:
      'Built a high-speed functional testing framework using Cypress to isolate regressions and enforce extreme script reliability. Programmed headless end-to-end suites simulating transaction processing, authentication, and multi-tenant ledger variations.',
  },
  {
    title: 'Pizza Hut Application Automation',
    category: 'Behavior-Driven Development (BDD)',
    stack: ['Java', 'Selenium WebDriver', 'Cucumber BDD', 'Gherkin', 'Maven', 'TestNG'],
    description:
      'Formulated a structured BDD testing suite using Cucumber for human-readable test steps. Implemented robust Page Object Models (POM) with dynamic wait mechanics to interact seamlessly with dynamic UI components.',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>CASE STUDIES</span>
          <h2 className={styles.sectionTitle}>Featured Engineering Projects</h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectStack}>
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className={styles.techTag}>
                    {tech}
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
