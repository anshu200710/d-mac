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
          { id: 1, title: 'Ad Videos', description: 'Engaging promotional content', route: '/video-marketing/ad-videos', color: 'cyan', image: 'linear-gradient(135deg, #00F5FF 0%, #00D4FF 100%)', icon: '🎬' },
          { id: 2, title: 'Influencer Marketing', description: 'Connect with top creators', route: '/video-marketing/influencer-marketing', color: 'purple', image: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)', icon: '⭐' },
          { id: 3, title: 'Brand Stories', description: 'Authentic brand narratives', route: '/video-marketing/brand-stories', color: 'pink', image: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)', icon: '📖' },
          { id: 4, title: 'Visual Content', description: 'Stunning visual experiences', route: '/video-marketing/visual-content', color: 'green', image: 'linear-gradient(135deg, #00FF88 0%, #00DD77 100%)', icon: '🎨' },
          { id: 5, title: 'Product Demos', description: 'Interactive product showcase', route: '/video-marketing/product-demos', color: 'blue', image: 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)', icon: '🚀' }
        ]}
      />

    </div>
  );
};

export default VideoMarketing;
