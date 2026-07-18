'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Globe, BrainCircuit, BookOpen, 
  Smartphone, Palette, Cloud, Settings, MonitorPlay, 
  Cpu, Rocket, ShieldCheck, FileCode2, Clock, CheckCircle2 
} from 'lucide-react';
import Button from '@/components/ui/Button';
import QuoteModal from '@/components/ui/QuoteModal';
import styles from './services.module.css';

const categories = [
  { id: 'web', label: 'Web Engineering', icon: Globe, color: '#E8A838' },
  { id: 'ai', label: 'AI & Automation', icon: BrainCircuit, color: '#7C3AED' },
  { id: 'research', label: 'Research & Innovation', icon: BookOpen, color: '#0EA5E9' },
  { id: 'cloud', label: 'Cloud & Backend', icon: Cloud, color: '#10B981' },
  { id: 'uiux', label: 'UI/UX Design', icon: Palette, color: '#F43F5E' },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, color: '#F97316' },
  { id: 'support', label: 'Growth & Support', icon: Settings, color: '#6366F1' },
];

const bentoContent = {
  web: {
    title: 'Web Engineering',
    desc: 'Scalable, high-performance web applications built for growth.',
    features: ['SaaS Platforms', 'Enterprise Portals', 'E-Commerce Systems', 'Custom Dashboards'],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    time: '4-12 Weeks',
    idealFor: 'Startups & Enterprises'
  },
  ai: {
    title: 'AI & Automation',
    desc: 'Intelligent systems that automate workflows and enhance decision-making.',
    features: ['Generative AI', 'Custom LLMs', 'RAG Systems', 'Process Automation'],
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain'],
    time: '6-16 Weeks',
    idealFor: 'Forward-thinking Businesses'
  },
  research: {
    title: 'Research & Innovation',
    desc: 'Specialized platforms for academic and scientific communities.',
    features: ['Academic Portfolios', 'Conference Systems', 'Publication Databases', 'Innovation Portals'],
    tech: ['Next.js', 'GraphQL', 'AWS', 'Elasticsearch'],
    time: '3-8 Weeks',
    idealFor: 'Universities & Labs'
  },
  cloud: {
    title: 'Cloud & Backend',
    desc: 'Secure, scalable infrastructure that powers modern applications.',
    features: ['API Development', 'Database Architecture', 'Cloud Migration', 'Security Audits'],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Firebase'],
    time: 'Ongoing',
    idealFor: 'Scaling Platforms'
  },
  uiux: {
    title: 'UI/UX Design',
    desc: 'Experiences that users instantly understand and intuitively enjoy.',
    features: ['Design Systems', 'Brand Identity', 'Wireframing', 'Motion Design'],
    tech: ['Figma', 'Framer', 'Spline', 'After Effects'],
    time: '2-6 Weeks',
    idealFor: 'Product Launches'
  },
  mobile: {
    title: 'Mobile Apps',
    desc: 'Native and cross-platform applications for iOS and Android.',
    features: ['iOS Development', 'Android Apps', 'React Native', 'Flutter'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    time: '8-16 Weeks',
    idealFor: 'B2C & B2B Solutions'
  },
  support: {
    title: 'Growth & Support',
    desc: 'Continuous monitoring, optimization, and scaling for your digital products.',
    features: ['Performance Tuning', 'SEO Optimization', 'Security Updates', 'Analytics'],
    tech: ['Vercel', 'Datadog', 'Sentry', 'Google Analytics'],
    time: 'Retainer',
    idealFor: 'Live Products'
  }
};

const Counter = ({ value, label, suffix = '' }) => {
  return (
    <div className={styles.counterBox}>
      <div className={styles.counterValue}>
        {value}{suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

export default function ServicesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('web');

  return (
    <main className={styles.pageWrapper}>
      
      {/* ── IMAGE-ONLY HERO ── */}
      <section className={styles.heroImageSection}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/projects/service.png" 
          alt="Our Services" 
          className={styles.heroFullImage} 
        />
      </section>

      {/* ── TRUST BAR ── */}
      <section className={styles.trustBarSection}>
        <div className="container">
          <div className={styles.trustBarGrid}>
            <Counter value="25" suffix="+" label="Projects Delivered" />
            <Counter value="100" suffix="%" label="Client Satisfaction" />
            <Counter value="24" suffix="Hr" label="Average Response" />
            <Counter value="6" suffix="+" label="Technology Domains" />
            <Counter value="98" suffix="%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* ── SERVICE SELECTOR & BENTO SHOWCASE ── */}
      <section className={styles.showcaseSection}>
        <div className="container">
          
          <div className={styles.sectionHeader}>
            <span className={styles.badge}><Sparkles size={14} /> CORE CAPABILITIES</span>
            <h2 className={styles.sectionTitle}>Built for Scale. Designed for Growth.</h2>
            <p className={styles.sectionDesc}>Explore our comprehensive suite of engineering and design services.</p>
          </div>

          <div className={styles.selectorWrapper}>
            {categories.map((c) => (
              <button 
                key={c.id} 
                className={`${styles.selectorTab} ${activeCat === c.id ? styles.selectorTabActive : ''}`}
                onClick={() => setActiveCat(c.id)}
                style={{ '--active-color': c.color }}
              >
                <c.icon size={16} />
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.bentoShowcase}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.bentoGridInner}
              >
                {/* Main Card */}
                <div className={styles.bentoMain}>
                  <div className={styles.bentoMainHeader} style={{ color: categories.find(c => c.id === activeCat)?.color }}>
                    {categories.find(c => c.id === activeCat)?.label}
                  </div>
                  <h3 className={styles.bentoMainTitle}>{bentoContent[activeCat].title}</h3>
                  <p className={styles.bentoMainDesc}>{bentoContent[activeCat].desc}</p>
                  
                  <div className={styles.bentoFeatures}>
                    {bentoContent[activeCat].features.map((f, i) => (
                      <div key={i} className={styles.bentoFeatureItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="md" className={styles.bentoCta} onClick={() => setQuoteOpen(true)}>
                    Start Building <ArrowRight size={16} style={{ marginLeft: 8 }} />
                  </Button>
                </div>

                {/* Tech Stack Card */}
                <div className={styles.bentoSideCard}>
                  <div className={styles.sideCardIcon}><FileCode2 size={24} /></div>
                  <h4>Core Technologies</h4>
                  <div className={styles.techPills}>
                    {bentoContent[activeCat].tech.map(t => (
                      <span key={t} className={styles.techPill}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Timeline & Ideal For */}
                <div className={styles.bentoSideCard}>
                  <div className={styles.sideCardIcon}><Clock size={24} /></div>
                  <h4>Project Blueprint</h4>
                  <div className={styles.blueprintDetails}>
                    <div className={styles.bpRow}>
                      <span>Timeline:</span>
                      <strong>{bentoContent[activeCat].time}</strong>
                    </div>
                    <div className={styles.bpRow}>
                      <span>Ideal For:</span>
                      <strong>{bentoContent[activeCat].idealFor}</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── CLIENT SUCCESS ── */}
      <section className={styles.successSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Helping Great Ideas Become Great Products.</h2>
          </div>
          <div className={styles.successGrid}>
            <div className={styles.successCard}>
              <div className={styles.successDomain}>Startup</div>
              <h3>AI-Powered SaaS Platform</h3>
              <p>Built a generative AI application from scratch to scalable product in 8 weeks.</p>
              <div className={styles.successResult}>Result: 10,000+ Active Users</div>
            </div>
            <div className={styles.successCard}>
              <div className={styles.successDomain}>Enterprise</div>
              <h3>Cloud Migration & Security</h3>
              <p>Modernized legacy infrastructure with zero downtime and improved performance by 4x.</p>
              <div className={styles.successResult}>Result: 99.99% Uptime</div>
            </div>
            <div className={styles.successCard}>
              <div className={styles.successDomain}>University</div>
              <h3>Academic Research Portal</h3>
              <p>Designed and engineered a massive directory for faculty publications and patents.</p>
              <div className={styles.successResult}>Result: 1M+ Pageviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & WHY KRAMIX ── */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Businesses Trust Kramix</h2>
          </div>
          <div className={styles.whyGrid}>
            {['Transparent Pricing', 'Weekly Updates', 'No Hidden Costs', 'Dedicated Team', 'Clean Code', 'Performance Optimized', 'Accessibility', 'Security First'].map((reason, i) => (
              <div key={i} className={styles.whyCard}>
                <ShieldCheck size={24} className={styles.whyIcon} />
                <h4>{reason}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUGE CTA ── */}
      <section className={styles.premiumCta}>
        <div className={styles.ctaBackground} />
        <div className="container relative z-10 text-center">
          <h2 className={styles.ctaTitle}>Let's Build Something<br />Exceptional Together.</h2>
          <p className={styles.ctaDesc}>
            Whether you're building your first startup, modernizing an existing business, launching an AI product, or creating enterprise software—we're ready to turn your vision into reality.
          </p>
          <div className={styles.ctaButtons}>
            <Button variant="primary" size="lg" onClick={() => setQuoteOpen(true)} className={styles.btnPrimary}>
              🚀 Start Your Project
            </Button>
            <Button variant="outline" size="lg" onClick={() => setQuoteOpen(true)} className={styles.btnOutline}>
              📅 Book Free Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
