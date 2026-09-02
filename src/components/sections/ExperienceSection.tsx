import React from 'react';
import styles from './sections.module.css';

const experiences = [
  {
    role: 'Tester Intern',
    company: 'Divergent Consultancy Services',
    location: 'Kolkata, West Bengal, India',
    period: 'Jan 2026 – Apr 2026',
    highlights: [
      'Spearheaded extensive regression and exploratory testing cycles across high-traffic web and mobile web environments.',
      'Authored technical, comprehensive bug reports and partnered with core developers to validate functional fixes.',
      'Audited client-side code structures to isolate complex visual and functional bugs, lowering debugging lifecycles.',
    ],
  },
  {
    role: 'Advanced Automation & QA Engineering Intensive',
    company: 'Independent Test Automation Sabbatical',
    location: 'Remote',
    period: 'Aug 2023 – Jan 2026',
    highlights: [
      'Completed a multi-year deep dive to master automated scripting architectures, CI/CD gates, and programmatic test verification.',
      'Earned the Simplilearn Certified Automation Test Engineer specialization to deploy algorithmic quality validation models.',
      'Engineered end-to-end programmatic verification suites utilizing Java, Selenium, and Postman API validation.',
    ],
  },
  {
    role: 'System Trainee (QA Specialist)',
    company: 'Credex Technology',
    location: 'Noida, Uttar Pradesh, India',
    period: 'Mar 2022 – Jul 2023',
    highlights: [
      'Supported the QA Lead Engineer in architecting end-to-end test plans for major software rollouts, reducing post-release production defects by 20%.',
      'Participated in code reviews to assess testability parameters, improving overall system coverage and reliability metrics by 15%.',
      'Collaborated cross-functionally across engineering squads to track and resolve critical blocking defects, shortening project delays by 10%.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>CAREER TIMELINE</span>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.timelineDot} />
              </div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineCardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <h4 className={styles.companyTitle}>{exp.company} • <span className={styles.locationText}>{exp.location}</span></h4>
                  </div>
                  <span className={styles.periodBadge}>{exp.period}</span>
                </div>
                <ul className={styles.highlightsList}>
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
