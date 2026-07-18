'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, MessageCircle, Mail, Sparkles } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import QuoteModal from '@/components/ui/QuoteModal';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Process', href: '/process' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <>
      <motion.header 
        className={`${styles.header} ${scrolled ? styles.scrolledHeader : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.navbarWrapper}>
          <nav className={styles.navbar}>
            {/* Dynamic Light Follow */}
            <div 
              className={styles.mouseGlow} 
              style={{
                left: mousePosition.x - 150,
                top: mousePosition.y - 150,
              }}
            />

            <div className={styles.logoWrapper}>
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Logo />
                </motion.div>
              </Link>
            </div>

            <div className={styles.navLinks}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
                return (
                  <div key={link.href} className={styles.navItem}>
                    <Link href={link.href} className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}>
                      {link.label}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className={styles.activePill}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.premiumCtaBtn} 
                onClick={() => setQuoteOpen(true)}
              >
                <span className={styles.ctaText}>Start Your Project</span>
                <span className={styles.ctaIcon}><ArrowRight size={14} /></span>
                <div className={styles.btnShine} />
              </button>

              <button
                className={styles.hamburger}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── MOBILE FULLSCREEN NAVIGATION ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(30px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mobileContainer}>
              <div className={styles.mobileHeader}>
                <Logo />
                <button 
                  className={styles.closeMobileBtn} 
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className={styles.mobileNavGrid}>
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: "easeOut" }}
                  >
                    <Link href={link.href} className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className={styles.mobileQuickActions}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className={styles.qaTitle}><Sparkles size={14}/> QUICK ACTIONS</h4>
                <div className={styles.qaGrid}>
                  <a href="tel:+917905027329" className={styles.qaCard}>
                    <div className={styles.qaIcon}><Phone size={20} /></div>
                    <span>Call Now</span>
                  </a>
                  <a href="https://wa.me/917905027329" className={styles.qaCard}>
                    <div className={styles.qaIcon} style={{ color: '#25D366' }}><MessageCircle size={20} /></div>
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:kramix.service@gmail.com" className={styles.qaCard}>
                    <div className={styles.qaIcon}><Mail size={20} /></div>
                    <span>Email</span>
                  </a>
                  <button onClick={() => { setMobileOpen(false); setQuoteOpen(true); }} className={`${styles.qaCard} ${styles.qaCardHighlight}`}>
                    <div className={styles.qaIcon}><ArrowRight size={20} /></div>
                    <span>Free Quote</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
