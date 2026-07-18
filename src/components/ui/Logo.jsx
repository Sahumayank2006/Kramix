'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href="/">
      <motion.div 
        className={styles.logoContainer}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.logoK}>K</span>
        <span className={styles.logoText}>ramix</span>
        <div className={styles.logoGlow} />
      </motion.div>
    </Link>
  );
}
