import { motion } from 'framer-motion';
import { DigitalMarketingHero } from '../../components/Hero';
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
              Grow your brand with data-driven marketing and measurable ROI
            </motion.p>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              From SEO and paid media to full-funnel growth strategies, we craft campaigns that scale and convert.
            </motion.p>
            <motion.button variants={fadeInUp} className="btn btn--accent">
              Get a Strategy
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for sections to be added: services, case studies, testimonials */}

    </div>
  );
};

export default DigitalMarketing;