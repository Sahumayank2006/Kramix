'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import QuoteModal from '@/components/ui/QuoteModal';
import { Shield, FileText, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './pricing.module.css';

export default function PricingPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const ref = useScrollReveal();

  const factors = [
    { icon: <FileText size={24} />, title: 'Project Scope', desc: 'The complexity and number of features directly influence the timeline and investment required.' },
    { icon: <Clock size={24} />, title: 'Timeline', desc: 'Need it faster? Expedited timelines are possible with adjusted pricing.' },
    { icon: <Shield size={24} />, title: 'Technology Stack', desc: 'Different technologies have different development considerations that affect pricing.' },
    { icon: <CheckCircle size={24} />, title: 'Ongoing Support', desc: 'Post-launch maintenance and support plans are available as add-ons.' },
  ];

  const promises = [
    'No hidden fees — ever',
    'Free initial consultation',
    'Detailed quote within 48 hours',
    'Milestone-based payments',
    'NDA available on request',
    'Free revisions during development',
  ];

  return (
    <main className="page-enter" style={{ paddingTop: 'var(--navbar-height)' }}>
      <section className={`section-lg ${styles.hero}`}>
        <div className="container">
          <SectionHeading badge="Pricing" title="Transparent, Quote-Based Pricing" subtitle="Every project is unique. Instead of generic price tables, we provide custom quotes that reflect your exact needs — no surprises, no hidden costs." />
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={styles.factorsGrid}>
            {factors.map((f, i) => (
              <div key={i} className={`${styles.factorCard} reveal delay-${(i + 1) * 100}`}>
                <div className={styles.factorIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.promiseSection}`}>
        <div className="container-narrow">
          <SectionHeading badge="Our Promise" title="What You Get With Every Quote" />
          <div className={`${styles.promiseGrid} reveal`}>
            {promises.map((p, i) => (
              <div key={i} className={styles.promiseItem}>
                <CheckCircle size={20} className={styles.promiseCheck} />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Button variant="primary" size="lg" onClick={() => setQuoteOpen(true)} icon={<ArrowRight size={20} />} iconPosition="right">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
