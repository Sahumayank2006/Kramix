'use client';

import { useState, useEffect } from 'react';
import styles from './IdeaPopup.module.css';
import Button from '../ui/Button';

export default function IdeaPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup after a small delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.glow} />
        
        <button 
          className={styles.closeBtn} 
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.iconWrapper}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21H11ZM15.5 17C16.8807 17 18 15.8807 18 14.5C18 13.0113 17.1508 11.6669 15.8344 11.0264L15.352 10.7915C14.5516 10.4019 14 9.58552 14 8.69408V8.5C14 7.39543 13.1046 6.5 12 6.5C10.8954 6.5 10 7.39543 10 8.5V8.69408C10 9.58552 9.44841 10.4019 8.64797 10.7915L8.1656 11.0264C6.84918 11.6669 6 13.0113 6 14.5C6 15.8807 7.11929 17 8.5 17H15.5ZM16.5 19H7.5C7.22386 19 7 19.2239 7 19.5C7 19.7761 7.22386 20 7.5 20H16.5C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19Z" fill="currentColor"/>
          </svg>
        </div>

        <h2 className={styles.title}>Have an Idea?</h2>
        <h3 className={styles.subtitle}>Let's Turn It Into Something Remarkable.</h3>
        
        <p className={styles.description}>
          Our team of experts is ready to transform your vision into a scalable, high-performing digital product. Whether it's a web app, AI solution, or custom software—let's build it together.
        </p>

        <div className={styles.actions}>
          <Button href="/contact" variant="primary" size="lg" onClick={() => setIsOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
