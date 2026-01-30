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
            <motion.button variants={fadeInUp} className="btn btn--accent">
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
              color: 'indigo',
              image: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
              icon: '💻'
            },
            {
              id: 2,
              title: 'SEO & Content',
              description: 'Long-term organic growth through targeted content and technical SEO',
              route: '/digital-marketing/seo-content',
              color: 'teal',
              image: 'linear-gradient(135deg, #00F5FF 0%, #00FF88 100%)',
              icon: '🔍'
            },
            {
              id: 3,
              title: 'Content Marketing',
              description: 'Funnel-focused content that educates, engages, and converts',
              route: '/digital-marketing/content-marketing',
              color: 'pink',
              image: 'linear-gradient(135deg, #F472B6 0%, #FF7AA8 100%)',
              icon: '✍️'
            },
            {
              id: 4,
              title: 'Google My Business (GMB)',
              description: 'Local SEO & GMB optimization to increase discoverability and local conversions',
              route: '/digital-marketing/google-my-business',
              color: 'amber',
              image: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
              icon: '📍'
            },
            {
              id: 5,
              title: 'Social Media Management',
              description: 'Content strategy, posting, community engagement and growth across platforms',
              route: '/digital-marketing/social-media-management',
              color: 'purple',
              image: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)',
              icon: '📱'
            }
          ]}
        />
      </section>

    </div>
  );
};

export default DigitalMarketing;