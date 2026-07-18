'use client';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Globe } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <div className={styles.footerGlow} />
        <div className={styles.footerParticles} />
      </div>
      
      <div className="container relative z-10">
        <div className={styles.footerGrid}>
          
          {/* Brand Col */}
          <div className={styles.footerCol}>
            <Logo />
            <p className={styles.brandDesc}>
              Kramix helps startups, businesses, and enterprises build modern digital products with exceptional design, scalable engineering, and long-term support.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/services" className={styles.footerLink}>Services</Link>
              <Link href="/our-work" className={styles.footerLink}>Projects</Link>
              <Link href="/process" className={styles.footerLink}>Our Process</Link>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Resources</h4>
            <div className={styles.footerLinks}>
              <Link href="/team" className={styles.footerLink}>Our Team</Link>
              <Link href="/pricing" className={styles.footerLink}>Pricing</Link>
              <Link href="/testimonials" className={styles.footerLink}>Testimonials</Link>
              <Link href="/faq" className={styles.footerLink}>FAQ</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Newsletter</h4>
            <p className={styles.brandDesc} style={{ marginBottom: '1rem' }}>
              Subscribe to get the latest insights on technology, design, and business growth.
            </p>
            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.glassInput} 
                required 
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Kramix. All Rights Reserved.
          </p>
          
          <p className={styles.madeIn}>
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
