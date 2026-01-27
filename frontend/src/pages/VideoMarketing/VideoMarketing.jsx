import { motion } from 'framer-motion';
import { VideoMarketingHero, FloatingImageCards } from '../../components/Hero';
import styles from './VideoMarketing.module.css';

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

const VideoMarketing = () => {
  return (
    <div className={styles.videoMarketingPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <VideoMarketingHero />
        
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Video Marketing Excellence
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
              Tell Your Story with Compelling Video Content
            </motion.p>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              From concept to production, we create stunning videos that captivate your audience and drive measurable results.
            </motion.p>
            <motion.button variants={fadeInUp} className="btn btn--accent">
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Floating Image Cards */}
      <FloatingImageCards />

    </div>
  );
};

export default VideoMarketing;
