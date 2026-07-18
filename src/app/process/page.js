'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Compass, Map, Layers, Code2, 
  ShieldCheck, Rocket, CheckCircle2, ShieldAlert,
  Clock, TrendingUp, Cpu, Server
} from 'lucide-react';
import Button from '@/components/ui/Button';
import QuoteModal from '@/components/ui/QuoteModal';
import styles from './process.module.css';

const timelineSteps = [
  {
    id: 1,
    title: 'Discovery',
    icon: Compass,
    color: '#E8A838',
    desc: 'Every successful project starts with understanding your business. We study your goals, audience, competitors, and long-term vision before making any technical decisions.',
    deliverables: ['Discovery Workshop', 'Requirement Analysis', 'Scope Document', 'Timeline', 'Cost Estimate']
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    icon: Map,
    color: '#0EA5E9',
    desc: 'We transform ideas into a clear execution strategy with milestones, architecture, timelines, and technical planning.',
    deliverables: ['System Architecture', 'Sprint Planning', 'Tech Stack Selection', 'Risk Analysis', 'Resource Allocation']
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: Layers,
    color: '#F43F5E',
    desc: 'We design experiences that users instantly understand and enjoy. Every interaction is crafted with usability and elegance in mind.',
    deliverables: ['Wireframing', 'Interactive Prototypes', 'Design System', 'User Testing', 'High-Fidelity UI']
  },
  {
    id: 4,
    title: 'Development',
    icon: Code2,
    color: '#10B981',
    desc: 'Using modern technologies, we transform approved designs into secure, scalable, high-performance applications.',
    deliverables: ['Frontend Development', 'Backend Engineering', 'API Integration', 'Database Design', 'Weekly Sprints']
  },
  {
    id: 5,
    title: 'Testing & Quality Assurance',
    icon: ShieldCheck,
    color: '#F97316',
    desc: 'Every feature is tested across browsers, devices, and real-world scenarios before deployment.',
    deliverables: ['Automated Testing', 'Manual QA', 'Performance Audits', 'Security Checks', 'UAT']
  },
  {
    id: 6,
    title: 'Launch & Growth',
    icon: Rocket,
    color: '#6366F1',
    desc: 'Deployment isn\'t the finish line. We monitor, optimize, improve, and support your product as it grows.',
    deliverables: ['Cloud Deployment', 'SEO Optimization', 'Analytics Setup', 'Monitoring', 'Ongoing Support']
  }
];

const Counter = ({ value, label, suffix = '' }) => (
  <div className={styles.counterBox}>
    <div className={styles.counterValue}>{value}{suffix}</div>
    <div className={styles.counterLabel}>{label}</div>
  </div>
);

export default function ProcessPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <main className={styles.pageWrapper}>
      
      {/* ── IMAGE-ONLY HERO ── */}
      <section className={styles.heroImageSection}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/projects/process.png" 
          alt="Our Process" 
          className={styles.heroFullImage} 
        />
      </section>

      {/* ── TRUST METRICS ── */}
      <section className={styles.metricsSection}>
        <div className="container">
          <div className={styles.metricsGrid}>
            <Counter value="25" suffix="+" label="Projects Delivered" />
            <Counter value="100" suffix="%" label="Client Satisfaction" />
            <Counter value="24" suffix="Hr" label="Average Response" />
            <Counter value="6" suffix="" label="Step Workflow" />
          </div>
        </div>
      </section>

      {/* ── VERTICAL JOURNEY TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className="container relative">
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Development Journey</h2>
            <p className={styles.sectionDesc}>
              No Black Boxes. Just Clear Steps.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {/* The Golden Line */}
            <div className={styles.timelineTrack}>
              <motion.div 
                className={styles.timelineFill}
                style={{ height: lineHeight }}
              />
            </div>

            {timelineSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${styles.timelineStep} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
              >
                {/* Node Icon */}
                <div className={styles.timelineNode} style={{ borderColor: step.color, color: step.color }}>
                  <div className={styles.nodeInner} style={{ background: `${step.color}20` }}>
                    <step.icon size={20} />
                  </div>
                </div>

                {/* Card */}
                <div className={styles.stepCardWrapper}>
                  <div className={styles.stepNumber}>0{step.id}</div>
                  <div className={styles.stepCard}>
                    <h3 style={{ color: step.color }}>{step.title}</h3>
                    <p>{step.desc}</p>
                    <div className={styles.stepDeliverables}>
                      {step.deliverables.map((item, i) => (
                        <span key={i} className={styles.deliverableBadge}>
                          <CheckCircle2 size={12} className={styles.checkIcon} style={{ color: step.color }} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHY OUR PROCESS WORKS (BENTO) ── */}
      <section className={styles.whyProcessSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Our Process Works</h2>
          </div>
          
          <div className={styles.whyBentoGrid}>
            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}><Clock /></div>
              <h4>Weekly Updates</h4>
              <p>You're never left in the dark. We provide transparent, weekly progress reports and standup calls.</p>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}><ShieldAlert /></div>
              <h4>Agile Development</h4>
              <p>We build iteratively. This means faster delivery, regular testing, and the flexibility to adapt to changes.</p>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}><Cpu /></div>
              <h4>Modern Technology</h4>
              <p>We use the latest tech stacks to ensure your product is scalable, secure, and future-proof.</p>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.bentoIcon}><Server /></div>
              <h4>Security First</h4>
              <p>Every line of code is written with security and data integrity as the highest priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT JOURNEY PREVIEW ── */}
      <section className={styles.journeySection}>
        <div className="container">
          <div className={styles.journeyBar}>
            <span>Idea</span>
            <ArrowRight size={16} />
            <span>Planning</span>
            <ArrowRight size={16} />
            <span>Design</span>
            <ArrowRight size={16} />
            <span>Development</span>
            <ArrowRight size={16} />
            <span>Testing</span>
            <ArrowRight size={16} />
            <span>Launch</span>
            <ArrowRight size={16} />
            <span style={{ color: 'var(--color-primary)' }}>Growth</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.premiumCta}>
        <div className={styles.ctaBackground} />
        <div className="container relative z-10 text-center">
          <h2 className={styles.ctaTitle}>Let's Build Something<br />Extraordinary Together.</h2>
          <p className={styles.ctaDesc}>
            Whether you're launching a startup, building an enterprise platform, creating an AI product, or modernizing an existing business—we'll guide you through every step with complete transparency.
          </p>
          <div className={styles.ctaButtons}>
            <Button variant="primary" size="lg" onClick={() => setQuoteOpen(true)} className={styles.btnPrimary}>
              🚀 Start Your Project
            </Button>
            <Button variant="outline" size="lg" onClick={() => setQuoteOpen(true)} className={styles.btnOutline}>
              📅 Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
