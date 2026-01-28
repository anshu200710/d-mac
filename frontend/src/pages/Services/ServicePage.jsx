import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../../data/servicesData';
import styles from './ServicePage.module.css';

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
    <main className={styles.servicePage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.lead}>{service.shortDescription}</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2>About this service</h2>
          <p>{service.fullDescription}</p>
          {service.bullets && (
            <ul className={styles.bullets}>
              {service.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>Work & Examples</h2>
          <div className={styles.grid}>
            {service.images.map((src, i) => (
              <img key={i} src={src} alt={`${service.title} example ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className={styles.caseStudies}>
          <div className={styles.container}>
            <h2>Case Studies</h2>
            <div className={styles.cases}>
              {service.caseStudies.map((c, i) => (
                <Link to={c.url || '/portfolio'} key={i} className={styles.case}>
                  <img src={c.image} alt={c.title} />
                  <h4>{c.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={styles.container}>
          <h3>Interested in {service.title}?</h3>
          <Link to="/contact" className="btn btn--primary">Get in touch</Link>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;