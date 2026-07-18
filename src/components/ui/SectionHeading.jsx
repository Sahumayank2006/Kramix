'use client';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ badge, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${light ? styles.light : ''}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider} />
    </div>
  );
}
