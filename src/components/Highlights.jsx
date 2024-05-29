import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './Highlights.module.css';
import { rightImg, watchImg } from '../utils';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id='highlights'
      className={`${styles.highlightsSectionContainer} bg-zinc`}
    >
      <div className={styles.highlightsHeadingContainer}>
        <div className={styles.highlightsHeadingWrapper}>
          <h1 id='title' className={styles.highlightsHeading}>
            Get the highlights.
          </h1>
          <div className={styles.highlightsSubHeadingWrapper}>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='' className={styles.highlightsImg} />
            </p>
            <p className='link'>
              Watch the Event
              <img src={rightImg} alt='' className={styles.highlightsImg} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
