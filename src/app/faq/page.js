'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqItems, faqCategories } from '@/data/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './faq.module.css';

export default function FAQPage() {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);
  const ref = useScrollReveal();

  const filtered = filter === 'all' ? faqItems : faqItems.filter(f => f.category === filter);

  return (
    <main className="page-enter" style={{ paddingTop: 'var(--navbar-height)' }}>
      <section className={`section-lg ${styles.hero}`}>
        <div className="container">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about working with Kramix. Can't find your answer? Contact us directly." />
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container-narrow">
          <div className={styles.filters}>
            {faqCategories.map(c => (
              <button key={c.id} className={`${styles.filterBtn} ${filter === c.id ? styles.active : ''}`} onClick={() => setFilter(c.id)}>
                {c.label}
              </button>
            ))}
          </div>

          <div className={`${styles.list} reveal`}>
            {filtered.map(item => (
              <div key={item.id} className={`${styles.item} ${openId === item.id ? styles.open : ''}`}>
                <button className={styles.question} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                  <span>{item.question}</span>
                  {openId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={styles.answer}><p>{item.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
