import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../../data/servicesData';
import { motion } from 'framer-motion';
import servicesStyles from './Services.module.css';
import styles from './ServicePage.module.css';
import VideoReels from '../../components/VideoReels/VideoReels';

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

const digitalMarketingFeatures = [
  'Technical SEO & audits',
  'Keyword & content strategy',
  'PPC & paid social integration',
  'Content production & distribution',
  'Analytics & conversion optimization'
];

const videoMarketingFeatures = [
  'Short-form ad creative',
  'Brand films & stories',
  'Product demos & explainers',
  'Social-first visuals',
  'Influencer & creator partnerships'
];

const ServicePage = () => { 
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service && service.meta?.title) document.title = service.meta.title;

    if (service && service.meta?.description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', service.meta.description);
      else {
        meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = service.meta.description;
        document.head.appendChild(meta);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <main className={styles.notFound}>
        <div className={styles.container}>
          <h1>Service Not Found</h1>
          <p>The service you are looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="btn btn--outline">Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={servicesStyles['services-page']}>      {/* Service detail hero (matches Digital Marketing section style) */}
      <section id={service.category === 'digital' ? 'digital-marketing' : 'video-marketing'} className={servicesStyles['service-detail']}>
        <div className={servicesStyles['service-detail__container']}>
          <motion.div
            className={servicesStyles['service-detail__grid']}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={servicesStyles['service-detail__content']}>
              <span className={servicesStyles['service-detail__label']}>Service</span>
              <h2 className={servicesStyles['service-detail__title']}>{service.title}</h2>
              <p className={servicesStyles['service-detail__description']}>{service.fullDescription}</p>

              <div className={servicesStyles['service-detail__features']}>
                {(service.bullets && service.bullets.length ? service.bullets : (service.category === 'digital' ? digitalMarketingFeatures : videoMarketingFeatures)).map((feature, index) => (
                  <div key={index} className={servicesStyles['service-detail__feature']}>
                    <div className={servicesStyles['service-detail__feature-icon']}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                      </svg>
                    </div>
                    <span className={servicesStyles['service-detail__feature-text']}>{feature}</span>
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

            <motion.div variants={fadeInUp} className={servicesStyles['service-detail__visual']}>
              <div className={servicesStyles['service-detail__visual-content']}>
                <div className={servicesStyles['service-detail__visual-icon']}>
                  {service.category === 'digital' ? (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ) : (
                    <>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="23 7 16 12 23 17 23 7"/>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                      </svg>
                    </>
                  )}
                </div>
                <h3 className={servicesStyles['service-detail__visual-title']}>{service.title}</h3>
                <p className={servicesStyles['service-detail__visual-subtitle']}>{service.category === 'digital' ? 'Reach. Engage. Convert.' : 'Captivate. Inspire. Connect.'}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {service.category === 'video' ? (
        // Video reels work section
        <div>
          <VideoReels videos={service.videos} />
        </div>
      ) : (
        <>
          <section className={servicesStyles.gallery}>
            <div className={servicesStyles['service-detail__container']}>
              <h2 className={servicesStyles['service-detail__title']}>Work & Examples</h2>
              {service.images && service.images.length > 0 && (
                <div className={servicesStyles.gallery__grid}>
                  {service.images.map((src, i) => (
                    <figure key={i} className={servicesStyles.gallery__item}>
                      <img
                        src={src}
                        alt={`${service.title} example ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Example'; }}
                      />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>

          {service.caseStudies && service.caseStudies.length > 0 && (
            <section className={servicesStyles.caseStudies}>
              <div className={servicesStyles['service-detail__container']}>
                <h2 className={servicesStyles['service-detail__title']}>Case Studies</h2>
                <div className={servicesStyles.cases}>
                  {service.caseStudies.map((c, i) => (
                    c.url ? (
                      <Link to={c.url} key={i} className={servicesStyles.case} aria-label={c.title}>
                        <div className={servicesStyles['case__media']}>
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            decoding="async"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Case+Study'; }}
                          />
                          <div className={servicesStyles.case__overlay}>
                            <h4>{c.title}</h4>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div key={i} className={servicesStyles.case} aria-label={c.title}>
                        <div className={servicesStyles['case__media']}>
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            decoding="async"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Case+Study'; }}
                          />
                          <div className={servicesStyles.case__overlay}>
                            <h4>{c.title}</h4>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <section className={servicesStyles.cta}>
        <div className={servicesStyles.cta__container}>
          <h3 className={servicesStyles.cta__title}>Interested in <span>{service.title}</span>?</h3>
          <p className={servicesStyles.cta__description}>Let’s discuss how this service can help you achieve your goals and drive measurable growth.</p>
          <div className={servicesStyles.cta__buttons}>
            <Link to="/contact" className="btn btn--primary">Schedule a Consultation</Link>
            <Link to="/portfolio" className="btn btn--outline">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;