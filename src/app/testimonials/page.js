'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';
import { Star } from 'lucide-react';
import styles from './testimonials.module.css';

export default function TestimonialsPage() {
  const ref = useScrollReveal();

  return (
    <main className="page-enter" style={{ paddingTop: 'var(--navbar-height)' }}>
      <section className={`section-lg ${styles.hero}`}>
        <div className="container">
          <SectionHeading badge="Testimonials" title="Hear From Our Clients" subtitle="Real feedback from real people. These are unedited testimonials from businesses, students, and professionals we've worked with." />
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={styles.grid}>
            {testimonials.map((t, i) => (
              <div key={t.id} className={`${styles.card} reveal delay-${Math.min((i + 1) * 100, 600)}`}>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                  ))}
                </div>
                <p className={styles.quote}>"{t.quote}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.designation}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
