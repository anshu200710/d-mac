import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Visit Us',
      content: '123 Business Avenue, Suite 100\nNew York, NY 10001'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Call Us',
      content: '+1 (555) 123-4567\nMon-Fri 9am-6pm EST'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Us',
      content: 'hello@dmac.com\ninfo@dmac.com'
    }
  ];

  return (
    <main className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.hero__container}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.hero__badge}>
            Get in Touch
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className={styles.hero__title}>
            Let's <span>Connect</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.hero__description}>
            Ready to transform your digital presence? We'd love to hear about 
            your project and discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.content__container}>
          <div className={styles.content__grid}>
            {/* Contact Info */}
            <motion.div
              className={styles.info}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.info__card}
                  variants={fadeInUp}
                >
                  <div className={styles['info__card-icon']}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                </motion.div>
              ))}
              
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className={styles['form-wrapper']}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {!isSubmitted ? (
                <>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                  
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.form__row}>
                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          First Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={styles.form__input}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          Last Name <span></span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={styles.form__input}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          Phone Number <span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={styles.form__input}
                          placeholder="00000 00000"
                          required
                        />
                      </div>

                    <div className={styles.form__row}>
                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          Email <span></span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.form__input}
                          placeholder="john@company.com"
                        />
                      </div>

                    </div>

                    <div className={styles.form__group}>
                      <label className={styles.form__label}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.form__input}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className={styles.form__row}>
                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          Service Interested In <span>*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={styles.form__select}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="video-marketing">Video Marketing</option>
                          <option value="both">Both Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className={styles.form__group}>
                        <label className={styles.form__label}>
                          Estimated Budget
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={styles.form__input}
                          placeholder="e.g., ₹5,000 - ₹10,000"
                        />

                      </div>
                    </div>

                    <div className={styles.form__group}>
                      <label className={styles.form__label}>
                        Message <span>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.form__textarea}
                        placeholder="Tell us about your project and goals..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.form__submit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles['success-message']}>
                  <div className={styles['success-message__icon']}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        budget: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
