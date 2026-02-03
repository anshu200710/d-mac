import React, { useState } from 'react';
import styles from './VideoReels.module.css';

// Extract YouTube video id from various URL formats or return the id when passed
const getYouTubeId = (input) => {
  if (!input) return null;
  // If already an embed URL
  const embedMatch = input.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  // Watch URL
  const watchMatch = input.match(/[?&]v=([A-Za-z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];
  // Short youtu.be URL
  const shortMatch = input.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  // Plain id
  if (/^[A-Za-z0-9_-]{6,}$/.test(input)) return input;
  return null;
};

const toEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;
const posterFor = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const VideoReels = ({ videos = [], title = 'Portfolio' }) => {
  if (!videos || videos.length === 0) return null;

  const [loaded, setLoaded] = useState(() => videos.map(() => false));

  const handleLoad = (index) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  return (
    <section className={styles.reels}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {videos.map((src, i) => {
            const id = getYouTubeId(src);
            const embed = id ? toEmbedUrl(id) : src;
            const poster = id ? posterFor(id) : null;

            return (
              <div className={styles.reel} key={i}>
                {loaded[i] ? (
                  <iframe
                    src={embed}
                    title={`reel-${i}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className={styles.poster}
                    type="button"
                    aria-label={`Play video ${i + 1}`}
                    onClick={() => handleLoad(i)}
                  >
                    {poster ? (
                      <img src={poster} alt={`Video ${i + 1} poster`} loading="lazy" />
                    ) : (
                      <div className={styles.posterFallback} />
                    )}

                    <span className={styles.playButton} aria-hidden />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoReels;