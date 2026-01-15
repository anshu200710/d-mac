import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';

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

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const topics = [
    'Digital Marketing',
    'SEO Tips',
    'Video Production',
    'Social Media',
    'Content Strategy',
    'Brand Building',
    'Analytics',
    'Industry Trends',
    'Case Studies',
    'Marketing Tools'
  ];

  return (
    <main className={styles.blog}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.hero__container}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.hero__badge}>
            Insights & Resources
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className={styles.hero__title}>
            Our <span>Blog</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.hero__description}>
            Expert insights, industry trends, and actionable strategies to help 
            you succeed in digital marketing and video production.
          </motion.p>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section className={styles['coming-soon']}>
        <motion.div
          className={styles['coming-soon__container']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles['coming-soon__icon']}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
              <path d="M2 2l7.586 7.586"/>
              <circle cx="11" cy="11" r="2"/>
            </svg>
          </div>
          
          <h2 className={styles['coming-soon__title']}>Coming Soon</h2>
          <p className={styles['coming-soon__description']}>
            We're working hard to bring you valuable content that will help 
            transform your marketing strategies. Our blog will feature expert 
            insights, case studies, industry trends, and practical tips from 
            our team of marketing professionals.
          </p>
          
          {/* Newsletter Signup */}
          <div className={styles.newsletter}>
            <h3 className={styles.newsletter__title}>Get Notified</h3>
            <p className={styles.newsletter__subtitle}>
              Be the first to know when we launch. Subscribe to our newsletter.
            </p>
            
            {!isSubscribed ? (
              <form className={styles.newsletter__form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletter__input}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className={styles.newsletter__btn}>
                  Subscribe
                </button>
              </form>
            ) : (
              <div className={styles.newsletter__success}>
                ✓ Thanks for subscribing! We'll keep you updated.
              </div>
            )}
          </div>

          {/* Topics Preview */}
          <div className={styles.topics}>
            <h4 className={styles.topics__title}>Topics We'll Cover</h4>
            <div className={styles.topics__list}>
              {topics.map((topic, index) => (
                <span key={index} className={styles.topics__tag}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Blog;
