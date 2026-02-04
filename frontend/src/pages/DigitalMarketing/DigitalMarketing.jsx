import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DigitalMarketingHero, FloatingImageCards } from '../../components/Hero';
import styles from './DigitalMarketing.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const DigitalMarketing = () => {
  useEffect(() => { document.title = 'Digital Marketing — D-MAC'; }, []);

  return (
    <div className={styles.digitalMarketingPage}>
      <section className={styles.hero}>
        <DigitalMarketingHero />

        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Digital Marketing Solutions
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
              Grow Your Brand With Data-Driven Marketing
            </motion.p>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              From SEO and web development to full-funnel growth strategies, we craft campaigns that scale and convert.
            </motion.p>
            <motion.button variants={fadeInUp} className="btn btn--accent" onClick={() => window.location.href = '/contact'}>
              Get a Strategy
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services cards (reuses FloatingImageCards with digital marketing content) */}
      <section>
        <FloatingImageCards
          sectionTitle="Our Digital Marketing Services"
          cardsData={[
           {
              id: 1,
              title: 'Web Development',
              description: 'Modern web experiences built for performance, accessibility, and conversion',
              route: '/digital-marketing/web-development',
              image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770198397/4_iehjbr.svg)',
            },
            {
              id: 2,
              title: 'SEO & Content',
              description: 'Long-term organic growth through targeted content and technical SEO',
              route: '/digital-marketing/seo-content',
              color: 'teal',
              image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770198395/5_yll6yz.svg)',
            },
            {
              id: 3,
              title: 'Content Marketing',
              description: 'Funnel-focused content that educates, engages, and converts',
              route: '/digital-marketing/content-marketing',
              color: 'pink',
              image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770198395/6_nvjcfz.svg)',
            },
            {
              id: 4,
              title: 'Google My Business (GMB)',
              description: 'Local SEO & GMB optimization to increase discoverability and local conversions',
              route: '/digital-marketing/google-my-business',
              color: 'amber',
              image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770198404/7_k6ei60.svg)',
            },
            {
              id: 5,
              title: 'Social Media Management',
              description: 'Content strategy, posting, community engagement and growth across platforms',
              route: '/digital-marketing/social-media-management',
              color: 'purple',
              image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770199662/8_h4v7zx.svg)',
            }
          ]}
        />
      </section>

    </div>
  );
};

export default DigitalMarketing;