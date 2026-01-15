import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServicesHero } from '../../components/Hero';
import styles from './Services.module.css';

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

const Services = () => {
  const digitalMarketingFeatures = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click Advertising (PPC)',
    'Social Media Marketing',
    'Content Marketing Strategy',
    'Email Marketing Campaigns',
    'Marketing Automation',
    'Analytics & Reporting',
    'Conversion Rate Optimization'
  ];

  const videoMarketingFeatures = [
    'Corporate Brand Videos',
    'Product Demonstrations',
    'Customer Testimonials',
    'Explainer Animations',
    'Social Media Content',
    'Event Coverage',
    'Training & Educational Videos',
    'Video Advertising'
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'We dive deep into understanding your business, target audience, and competitive landscape to develop a winning strategy.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our team crafts a comprehensive, data-driven strategy tailored to your specific goals and market opportunities.'
    },
    {
      number: '03',
      title: 'Creative Execution',
      description: 'We bring the strategy to life with compelling content, engaging campaigns, and professional video production.'
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description: 'We deploy campaigns strategically and continuously optimize based on real-time performance data.'
    },
    {
      number: '05',
      title: 'Measure & Report',
      description: 'Transparent reporting with actionable insights ensures you see the impact of every marketing dollar spent.'
    }
  ];

  return (
    <main className={styles['services-page']}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__background}>
          <ServicesHero />
        </div>
        <div className={styles.hero__container}>
          <motion.div
            className={styles.hero__content}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.hero__badge}>
              Enterprise Solutions
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className={styles.hero__title}>
              Our <span>Services</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className={styles.hero__description}>
              Comprehensive digital marketing and video production services designed 
              to elevate your brand and drive measurable business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className={styles['service-detail']}>
        <div className={styles['service-detail__container']}>
          <motion.div
            className={styles['service-detail__grid']}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles['service-detail__content']}>
              <span className={styles['service-detail__label']}>Service 01</span>
              <h2 className={styles['service-detail__title']}>Digital Marketing</h2>
              <p className={styles['service-detail__description']}>
                Our data-driven digital marketing strategies help enterprises cut through 
                the noise and connect with their target audience. From SEO to paid media, 
                we deliver comprehensive solutions that drive qualified traffic and convert 
                visitors into customers.
              </p>
              <div className={styles['service-detail__features']}>
                {digitalMarketingFeatures.map((feature, index) => (
                  <div key={index} className={styles['service-detail__feature']}>
                    <div className={styles['service-detail__feature-icon']}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                      </svg>
                    </div>
                    <span className={styles['service-detail__feature-text']}>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn--primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className={styles['service-detail__visual']}>
              <div className={styles['service-detail__visual-content']}>
                <div className={styles['service-detail__visual-icon']}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3 className={styles['service-detail__visual-title']}>Digital Marketing</h3>
                <p className={styles['service-detail__visual-subtitle']}>Reach. Engage. Convert.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Marketing Section */}
      <section id="video-marketing" className={styles['service-detail']}>
        <div className={styles['service-detail__container']}>
          <motion.div
            className={styles['service-detail__grid']}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles['service-detail__content']}>
              <span className={styles['service-detail__label']}>Service 02</span>
              <h2 className={styles['service-detail__title']}>Video Marketing</h2>
              <p className={styles['service-detail__description']}>
                Capture attention and tell your brand story through powerful video content. 
                Our award-winning video production team creates compelling visual narratives 
                that resonate with your audience and drive engagement across all platforms.
              </p>
              <div className={styles['service-detail__features']}>
                {videoMarketingFeatures.map((feature, index) => (
                  <div key={index} className={styles['service-detail__feature']}>
                    <div className={styles['service-detail__feature-icon']}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                      </svg>
                    </div>
                    <span className={styles['service-detail__feature-text']}>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn--accent">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className={styles['service-detail__visual']}>
              <div className={styles['service-detail__visual-content']}>
                <div className={styles['service-detail__visual-icon']}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
                <h3 className={styles['service-detail__visual-title']}>Video Marketing</h3>
                <p className={styles['service-detail__visual-subtitle']}>Captivate. Inspire. Connect.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <motion.div
          className={styles.process__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.process__label}>Our Process</span>
          <h2 className={styles.process__title}>How We Deliver Results</h2>
          <p className={styles.process__subtitle}>
            A proven methodology that ensures every project exceeds expectations 
            and delivers measurable ROI.
          </p>
        </motion.div>

        <motion.div
          className={styles.process__timeline}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.process__step}
              variants={fadeInUp}
            >
              <div className={styles['process__step-number']}>{step.number}</div>
              <div className={styles['process__step-content']}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
            Ready to <span>Elevate</span> Your Marketing?
          </h2>
          <p className={styles.cta__description}>
            Let's discuss how our services can help you achieve your business goals 
            and drive sustainable growth.
          </p>
          <div className={styles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">
              Schedule a Consultation
            </Link>
            <Link to="/portfolio" className="btn btn--outline">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
