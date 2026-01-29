import { motion } from 'framer-motion';
import { VideoMarketingHero, FloatingImageCards } from '../../components/Hero';
import { services } from '../../data/services';
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
      <FloatingImageCards
        sectionTitle="Our Video Marketing Services"
        cardsData={[
          { id: 1, title: 'Meta Ad Performance', description: 'Short-form paid social ads optimized for Meta platforms', route: '/video-marketing/meta-ad-performance', color: 'cyan', image: 'linear-gradient(135deg, #00F5FF 0%, #00D4FF 100%)', icon: '📣' },
          { id: 2, title: 'BTS', description: 'Behind-the-scenes shoots, candid content and short documentary pieces', route: '/video-marketing/bts', color: 'purple', image: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)', icon: '🎥' },
          { id: 3, title: 'Ad Video Shoot', description: 'Full production ad shoots for campaign-quality creative', route: '/video-marketing/ad-video-shoot', color: 'pink', image: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)', icon: '🎬' }
        ]}
      />

    </div>
  );
};

export default VideoMarketing;
