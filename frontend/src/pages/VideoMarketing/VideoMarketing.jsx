import React, { useEffect } from 'react';
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
  useEffect(() => { document.title = 'Video Marketing — D-MAC'; }, []);

  return (
    <div className={styles.videoMarketingPage}>
      /* Hero Section */}
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
            Strategic Video Marketing
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Video-first strategies that convert
          </motion.p>
          <motion.p variants={fadeInUp} className={styles.heroDescription}>
            From campaign-led ads to behind-the-scenes storytelling, we craft video that grows brands and drives measurable ROI.
          </motion.p>
          <motion.button 
            variants={fadeInUp} 
            className="btn btn--accent"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Floating Image Cards */}
      <FloatingImageCards
        sectionTitle="Our Video Marketing Services"
        cardsData={[
          { id: 1, title: 'Ad Video', description: 'Commercial and campaign-focused videos for brand and product launches', route: '/video-marketing/ad-video', image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770186763/1_sobowp.png)' },
          { id: 2, title: 'Ad Video Shoot', description: 'Full-production shoots with directors, crews and post-production', route: '/video-marketing/ad-video-shoot', image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770186763/2_y1h2xz.png)' },
          { id: 3, title: 'Meta Ad Performance', description: 'Short-form paid social ads optimized for Meta platforms', route: '/video-marketing/meta-ad-performance', image: 'url(https://res.cloudinary.com/dgmovv8me/image/upload/v1770186762/3_rgc0y9.png)' }
        ]}
      />

    </div>
  );
};

export default VideoMarketing;
