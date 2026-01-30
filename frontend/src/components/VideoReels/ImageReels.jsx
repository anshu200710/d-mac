import React from 'react';
import styles from './VideoReels.module.css';

const ImageReels = ({ items = [], title = 'Work' }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.reels}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((it, i) => (
            <div className={styles.reel} key={i}>
              <a
                href={it.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.poster}
                aria-label={it.title || `Example ${i + 1}`}
              >
                <img src={it.image} alt={it.title || `Example ${i + 1}`} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageReels;
