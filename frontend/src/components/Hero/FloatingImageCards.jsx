import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FloatingImageCards.module.css';

const FloatingImageCards = ({ cardsData, sectionTitle = 'Our Video Marketing Services' }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const defaultCards = [
    {
      id: 1,
      title: 'Ad Videos',
      description: 'Engaging promotional content',
      color: 'cyan',
      image: 'linear-gradient(135deg, #00F5FF 0%, #00D4FF 100%)',
      icon: '🎬'
    },
    {
      id: 2,
      title: 'Influencer Marketing',
      description: 'Connect with top creators',
      color: 'purple',
      image: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)',
      icon: '⭐'
    },
    {
      id: 3,
      title: 'Brand Stories',
      description: 'Authentic brand narratives',
      color: 'pink',
      image: 'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)',
      icon: '📖'
    },
    {
      id: 4,
      title: 'Visual Content',
      description: 'Stunning visual experiences',
      color: 'green',
      image: 'linear-gradient(135deg, #00FF88 0%, #00DD77 100%)',
      icon: '🎨'
    },
    {
      id: 5,
      title: 'Product Demos',
      description: 'Interactive product showcase',
      color: 'blue',
      image: 'linear-gradient(135deg, #00D4FF 0%, #0099FF 100%)',
      icon: '🚀'
    }
  ];

  const cards = cardsData ?? defaultCards;

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      
      <div className={styles.cardsGrid}>
        {cards.map((card) => {
          if (card.route) {
            return (
              <Link
                key={card.id}
                to={card.route}
                className={`${styles.card} ${styles.cardLink}`}
                style={{ '--card-delay': `${card.id * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`${styles.cardImage} ${hoveredCard === card.id ? styles.blurred : ''}`}
                  style={{ backgroundImage: card.image }}
                >
                  <span className={styles.icon}>{card.icon}</span>
                </div>

                <div className={`${styles.overlay} ${hoveredCard === card.id ? styles.visible : ''}`}>
                  <h3 className={styles.overlayTitle}>{card.title}</h3>
                  <p className={styles.overlayDescription}>{card.description}</p>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
              </Link>
            );
          }

          return (
            <div
              key={card.id}
              className={styles.card}
              style={{ '--card-delay': `${card.id * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`${styles.cardImage} ${hoveredCard === card.id ? styles.blurred : ''}`}
                style={{ backgroundImage: card.image }}
              >
                <span className={styles.icon}>{card.icon}</span>
              </div>

              <div className={`${styles.overlay} ${hoveredCard === card.id ? styles.visible : ''}`}>
                <h3 className={styles.overlayTitle}>{card.title}</h3>
                <p className={styles.overlayDescription}>{card.description}</p>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingImageCards;
