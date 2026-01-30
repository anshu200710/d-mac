import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  React.useEffect(() => { document.title = 'Portfolio — D-MAC'; }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'video', label: 'Video Marketing' },
    { id: 'branding', label: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCorp Brand Transformation',
      category: 'digital',
      categoryLabel: 'Digital Marketing',
      description: 'Complete digital marketing overhaul resulting in 300% increase in organic traffic.',
      tags: ['SEO', 'Content Strategy', 'PPC'],
      color: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      initials: 'TC'
    },
    {
      id: 2,
      title: 'GlobalFinance Video Series',
      category: 'video',
      categoryLabel: 'Video Marketing',
      description: 'Award-winning corporate video series showcasing financial services.',
      tags: ['Brand Video', 'Animation', 'Social Content'],
      color: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      initials: 'GF'
    },
    {
      id: 3,
      title: 'HealthPlus Digital Campaign',
      category: 'digital',
      categoryLabel: 'Digital Marketing',
      description: 'Integrated digital campaign driving 50K+ app downloads in 3 months.',
      tags: ['Social Media', 'Email Marketing', 'Analytics'],
      color: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      initials: 'HP'
    },
    {
      id: 4,
      title: 'Innovate Labs Brand Identity',
      category: 'branding',
      categoryLabel: 'Branding',
      description: 'Complete brand refresh including visual identity and guidelines.',
      tags: ['Logo Design', 'Brand Guidelines', 'Collateral'],
      color: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      initials: 'IL'
    },
    {
      id: 5,
      title: 'EcoVentures Documentary',
      category: 'video',
      categoryLabel: 'Video Marketing',
      description: 'Environmental documentary series highlighting sustainable practices.',
      tags: ['Documentary', 'Storytelling', 'Motion Graphics'],
      color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      initials: 'EV'
    },
    {
      id: 6,
      title: 'RetailMax Omnichannel Strategy',
      category: 'digital',
      categoryLabel: 'Digital Marketing',
      description: 'Seamless omnichannel experience increasing customer retention by 45%.',
      tags: ['E-commerce', 'CRM Integration', 'Personalization'],
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      initials: 'RM'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    { number: '150', suffix: '+', label: 'Projects Completed' },
    { number: '98', suffix: '%', label: 'Client Satisfaction' },
    { number: '12', suffix: 'M+', label: 'Views Generated' },
    { number: '45', suffix: '+', label: 'Awards Won' }
  ];

  return (
    <main className={styles.portfolio}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.hero__container}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.hero__badge}>
            Our Work
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className={styles.hero__title}>
            Our <span>Portfolio</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.hero__description}>
            Explore our collection of successful projects and case studies 
            that showcase our expertise in digital marketing and video production.
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className={styles.filters__container}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filters__btn} ${activeFilter === filter.id ? styles['filters__btn--active'] : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projects}>
        <div className={styles.projects__container}>
          <motion.div
            className={styles.projects__grid}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className={styles['project-card']}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles['project-card__image']}>
                    <div 
                      className={styles['project-card__image-placeholder']}
                      style={{ background: project.color }}
                    >
                      {project.initials}
                    </div>
                    <div className={styles['project-card__overlay']}>
                      <Link to="/contact" className={styles['project-card__overlay-btn']}>
                        View Case Study
                      </Link>
                    </div>
                  </div>
                  <div className={styles['project-card__content']}>
                    <span className={styles['project-card__category']}>{project.categoryLabel}</span>
                    <h3 className={styles['project-card__title']}>{project.title}</h3>
                    <p className={styles['project-card__description']}>{project.description}</p>
                    <div className={styles['project-card__tags']}>
                      {project.tags.map((tag, i) => (
                        <span key={i} className={styles['project-card__tag']}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stats__container}>
          <motion.div
            className={styles.stats__grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles['stat-card']}
                variants={fadeInUp}
              >
                <div className={styles['stat-card__number']}>
                  {stat.number}<span>{stat.suffix}</span>
                </div>
                <div className={styles['stat-card__label']}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            Ready to Create Your <span>Success Story</span>?
          </h2>
          <p className={styles.cta__description}>
            Let's discuss how we can help transform your business with our 
            proven digital marketing and video production expertise.
          </p>
          <div className={styles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">
              Start Your Project
            </Link>
            <Link to="/services" className="btn btn--outline">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Portfolio;
