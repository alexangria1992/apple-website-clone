import styles from './Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className={styles.heroContainer}>
      <div className={`${styles.heroWrapper} flex-center`}>
        <p id='hero' className={styles.heroTitle}>
          {' '}
          iPhone 15 Pro
        </p>
        <div className={styles.heroVideoContainer}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className={styles.ctaContainer}>
        <a href='#highlights' className={styles.ctaButton}>
          Buy
        </a>
        <p className={styles.ctaText}>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
