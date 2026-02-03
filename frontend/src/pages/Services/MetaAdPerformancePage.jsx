import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './MetaAdPerformancePage.module.css';

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
      title: 'Performance Analytics',
      description: 'Get comprehensive insights into your Meta ad campaigns with detailed performance metrics. We track every important KPI to help you understand what\'s working and where optimization opportunities exist.',
      points: [
        'Real-time campaign tracking',
        'Detailed ROI analysis',
        'Audience insight dashboards',
        'Budget allocation optimization'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 2,
      position: 'right',
      title: 'Creative Optimization',
      description: 'Our experts test and refine your ad creatives to maximize engagement and conversions. We use A/B testing to identify which variations resonate best with your target audience.',
      points: [
        'A/B testing frameworks',
        'Creative performance benchmarks',
        'Design iteration workflows',
        'Audience preference analysis'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 3,
      position: 'left',
      title: 'Audience Targeting',
      description: 'Reach the right people at the right time with laser-focused targeting strategies. We leverage Meta\'s advanced tools to segment audiences and create personalized messaging that drives results.',
      points: [
        'Lookalike audience creation',
        'Behavioral targeting',
        'Demographic refinement',
        'Custom audience segmentation'
      ],
      visual: 'https://placehold.co/800x650'
    },
    {
      id: 4,
      position: 'right',
      title: 'Conversion Tracking',
      description: 'Accurately measure and optimize for conversions across all touchpoints. We implement robust tracking systems to ensure you understand exactly where your customers are coming from.',
      points: [
        'Pixel implementation & setup',
        'Multi-touch attribution',
        'Conversion funnel analysis',
        'Event tracking optimization'
      ],
      visual: 'https://placehold.co/800x650'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
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
      </section>

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
      <section className={styles.cta}>
        <motion.div
          className={styles.cta__container}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.cta__title}>
            Ready to Transform Your <span>Meta Ads</span>?
          </h2>
          <p className={styles.cta__description}>
            Let's discuss how our Meta ad optimization strategies can drive growth and maximize your advertising ROI.
          </p>
          <div className={styles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default MetaAdPerformancePage;
