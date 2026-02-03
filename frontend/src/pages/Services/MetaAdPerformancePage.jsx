import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './MetaAdPerformancePage.module.css';
import servicesStyles from './Services.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const MetaAdPerformancePage = () => {
  useEffect(() => {
    document.title = 'Meta Ad Performance — D-MAC';
    
    let meta = document.querySelector('meta[name="description"]');
    const description = 'Maximize your Meta advertising performance with data-driven strategies and expert optimization.';
    if (meta) meta.setAttribute('content', description);
    else {
      meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  const sections = [
    {
      id: 1,
      position: 'left',
      title: 'Detailed Targeting in Meta Ads',
      description: 'Precision targeting is the foundation of successful Meta advertising. We leverage Meta\'s advanced targeting capabilities to reach the exact audience most likely to convert, ensuring every advertising dollar is spent efficiently.',
      points: [
        'Maximize relevance and minimize wasted impressions',
        'Segment audiences by detailed criteria',
        'Improve ad performance and ROI',
        'Reduce cost-per-acquisition (CPA)'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 2,
      position: 'right',
      title: 'Core Audiences',
      description: 'Target users based on explicit criteria that define your ideal customer. Core audiences allow you to build detailed profiles using demographics, interests, behaviors, and location data.',
      points: [
        'Demographics: Age, gender, education, job title, relationship status',
        'Interests: Hobbies, pages liked, topics followed (e.g., fitness, travel)',
        'Behaviors: Purchase behavior, device usage, travel patterns',
        'Location: Countries, cities, zip codes, or radius around physical stores'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 3,
      position: 'left',
      title: 'Custom Audiences',
      description: 'Re-engage people who already know your business. Custom audiences help you reconnect with warm leads and existing customers through targeted messaging.',
      points: [
        'Website visitors: Retarget people who visited your site',
        'Customer lists: Upload emails and phone numbers for direct targeting',
        'Facebook/Instagram engagement: Target people who engaged with your content, pages, or videos'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 4,
      position: 'right',
      title: 'Lookalike Audiences',
      description: 'Expand your reach by finding new prospects who share traits and behaviors with your best customers. Lookalike audiences unlock growth by targeting high-intent users at scale.',
      points: [
        'Create a "source" audience: Use your best customers as the baseline',
        'Facebook finds similar users: Meta identifies new prospects with matching traits',
        'Scale acquisition efficiently: Reach qualified prospects who match your ideal profile'
      ],
      visual: 'https://placehold.co/800x650'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      {/* <section className={styles.hero}>
        <div className={styles.hero__container}>
          <motion.div
            className={styles.hero__content}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className={styles.hero__label}>
              Service
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.hero__title}>
              Meta Ad Performance
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.hero__description}>
              Unlock the full potential of your Meta advertising campaigns with data-driven strategies and expert optimization that deliver measurable results.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.hero__cta}>
              <Link to="/contact" className="btn btn--primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

            <motion.h1 variants={fadeInUp} className={styles.hero__title__ad}>
             // Meta Ad Performance
            </motion.h1>

      {/* Zigzag Sections */}
      <section className={styles.content}>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`${styles.section} ${styles[`section--${section.position}`]}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className={styles.section__visual} variants={fadeInUp}>
              <img
                src={section.visual}
                alt={section.title}
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div className={styles.section__content} variants={fadeInUp}>
              <h2 className={styles.section__title}>{section.title}</h2>
              <p className={styles.section__description}>{section.description}</p>
              
              <ul className={styles.section__points}>
                {section.points.map((point, i) => (
                  <li key={i} className={styles.section__point}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className={servicesStyles.cta}>
        <div className={servicesStyles.cta__container}>
          <h3 className={servicesStyles.cta__title}>Interested in <span>Meta Ad Performance</span>?</h3>
          <p className={servicesStyles.cta__description}>Let's discuss how this service can help you achieve your goals and drive measurable growth.</p>
          <div className={servicesStyles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MetaAdPerformancePage;
