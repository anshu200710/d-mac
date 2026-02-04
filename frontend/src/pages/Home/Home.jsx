import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HomeHero } from '../../components/Hero';
import styles from './Home.module.css';

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

const Home = () => {
  useEffect(() => { document.title = 'Home — D-MAC'; }, []);

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      title: 'Video Marketing',
      tagline: 'Story-led video that converts',
      route: '/video-marketing',
      accent: '#A855F7'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Digital Marketing',
      tagline: 'Data-driven growth across channels',
      route: '/digital-marketing',
      accent: '#00F5FF'
    }
  ];

  const testimonials = [
    {
      quote: "D Mac transformed our digital presence completely. Their strategic approach to marketing delivered a 200% increase in qualified leads within 6 months.",
      author: "Pradeep Kumar",
      role: "",
      initials: "PK"
    },
    {
      quote: "The video content they produced exceeded all expectations. Professional, engaging, and perfectly aligned with our brand. Highly recommend their services.",
      author: "Sushmita",
      role: "",
      initials: "SS"
    },
    {
      quote: "Working with D Mac has been a game-changer for our company. Their team understands enterprise needs and delivers results that matter.",
      author: "Ritwik Kaushal",
      role: "",
      initials: "RK"
    }
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__background}>
          <HomeHero />
        </div>
        <div className={styles.hero__container}>
          <motion.div
            className={styles.hero__content}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className={styles.hero__title}>
              Elevate Your Brand with <span>Digital Excellence</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className={styles.hero__description}>
              We craft powerful digital marketing strategies and compelling video content 
              that drive growth, engage audiences, and deliver measurable results for 
              enterprise businesses.
            </motion.p>
            
            <motion.div variants={fadeInUp} className={styles.hero__buttons}>
              <Link to="/contact" className="btn btn--accent">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <button 
                onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn--white"
              >
                View Our Work
              </button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className={styles.hero__stats}>
              <div className={styles.hero__stat}>
                <div className={styles['hero__stat-number']}>150<span>+</span></div>
                <div className={styles['hero__stat-label']}>Projects Delivered</div>
              </div>
              <div className={styles.hero__stat}>
                <div className={styles['hero__stat-number']}>98<span>%</span></div>
                <div className={styles['hero__stat-label']}>Client Satisfaction</div>
              </div>
              <div className={styles.hero__stat}>
                <div className={styles['hero__stat-number']}>12<span>+</span></div>
                <div className={styles['hero__stat-label']}>Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className={styles.services} id="services-section">
        <motion.div
          className={styles.services__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <span className={styles.services__label}>Our Services</span> */}
          <h2 className={styles.services__title}>Comprehensive Digital Solutions</h2>
        </motion.div>

        <motion.div
          className={styles.services__grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.route}
              className={styles['service-card__link-wrapper']}
              aria-label={`View ${service.title} work`}
            >
              <motion.div
                className={`${styles['service-card']} ${index === 0 ? styles['service-card--primary'] : styles['service-card--secondary']}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <span
                  className={styles['service-card__accent']}
                  style={{ background: `radial-gradient(400px 400px at 20% 20%, ${service.accent}10, transparent 30%)` }}
                  aria-hidden
                />

                <div className={styles['service-card__icon']} style={{ boxShadow: `0 0 30px ${service.accent}22` }}>
                  {service.icon}
                </div>

                <h3 className={styles['service-card__title']}>{service.title}</h3>
                <div className={styles['service-card__tagline']}>{service.tagline}</div>

                <div className={styles['service-card__cta']}>
                  <span className="btn btn--white">View Our Work</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <motion.div
          className={styles.testimonials__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.testimonials__label}>Testimonials</span>
          <h2 className={styles.testimonials__title}>What Our Clients Say</h2>
          <p className={styles.testimonials__subtitle}>
            We're proud to partner with industry leaders who trust us to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          className={styles.testimonials__grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles['testimonial-card']}
              variants={fadeInUp}
            >
              <div className={styles['testimonial-card__stars']}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className={styles['testimonial-card__quote']}>"{testimonial.quote}"</p>
              <div className={styles['testimonial-card__author']}>
                <div className={styles['testimonial-card__avatar']}>{testimonial.initials}</div>
                <div className={styles['testimonial-card__info']}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
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
            Ready to <span>Transform</span> Your Digital Presence?
          </h2>
          <p className={styles.cta__description}>
            Let's discuss how we can help you achieve your marketing goals and drive 
            measurable growth for your business.
          </p>
          <div className={styles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
