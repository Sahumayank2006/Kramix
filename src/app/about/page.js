'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle, Quote, Star, Shield, Cpu, Users, Zap, Briefcase, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './about.module.css';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const countVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main className={styles.pageContainer} ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            
            {/* Left Side */}
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariants} className={styles.sectionBadge}>
                ABOUT KRAMIX
              </motion.div>
              <motion.h1 variants={fadeUpVariants} className={styles.heroTitle}>
                We Build <span className={styles.gradientText}>Technology</span><br/>
                That Moves Businesses <span className={styles.accentText}>Forward.</span>
              </motion.h1>
              <motion.div variants={fadeUpVariants}>
                <p className={styles.heroDesc} style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                  We're not just developers.
                </p>
                <p className={styles.heroDesc}>
                  We're engineers, designers, strategists, and problem-solvers who help ambitious businesses transform ideas into exceptional digital products.
                  <br/><br/>
                  Every project is built with craftsmanship, transparency, and long-term thinking.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUpVariants} className={styles.heroActions}>
                <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight size={18} />} iconPosition="right">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" href="#story">
                  Explore Our Journey
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className={styles.heroPanel}>
                <div className={styles.statList}>
                  {[
                    { icon: <CheckCircle size={24} />, text: '120+ Successful Projects' },
                    { icon: <Star size={24} />, text: '98.7% Client Satisfaction' },
                    { icon: <Award size={24} />, text: '4.9★ Average Rating' },
                    { icon: <Zap size={24} />, text: '24 Hour Response Time' },
                    { icon: <Globe size={24} />, text: '2+ Countries Served' },
                    { icon: <Briefcase size={24} />, text: '3+ Years of Experience' }
                  ].map((stat, i) => (
                    <motion.div key={i} className={styles.statItem} 
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <span className={styles.statIcon}>{stat.icon}</span>
                      <span>{stat.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className={styles.trustStrip}>
        <div className="container-wide">
          <p className={styles.trustTitle}>Trusted by startups, enterprises and fast-growing businesses</p>
          <div className={styles.marqueeTrack}>
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              style={{ display: "flex", gap: "4rem" }}
            >
              {['AI', 'FinTech', 'Healthcare', 'Education', 'SaaS', 'Retail', 'Government', 'AI', 'FinTech', 'Healthcare', 'Education', 'SaaS', 'Retail', 'Government'].map((ind, i) => (
                <div key={i} className={styles.trustLogo}>{ind}</div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section id="story" className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={styles.storyContent}
            >
              <motion.h2 variants={fadeUpVariants} className={styles.sectionTitle}>
                Why Kramix Exists
              </motion.h2>
              <motion.p variants={fadeUpVariants} style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                Most software companies sell code.<br/>
                We build <span className={styles.accentText}>confidence.</span>
              </motion.p>
              <motion.p variants={fadeUpVariants}>
                Kramix was created to bridge the gap between business ideas and meaningful technology. We believe technology should solve real problems—not create new ones.
              </motion.p>
              <motion.p variants={fadeUpVariants}>
                Every solution begins with understanding your business before writing a single line of code. That philosophy has helped us build products that scale, perform, and create measurable business value.
              </motion.p>
              
              <motion.div variants={fadeUpVariants} className={styles.signatureBlock}>
                <p style={{ fontStyle: 'italic', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  "Technology changes every day. Our passion for building never does."
                </p>
                <strong>Founders, Kramix</strong>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className={styles.storyImageWrapper}
            >
              <div className={styles.storyImagePlaceholder}>
                <img src="/images/projects/editoital.png" alt="Editorial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className={styles.missionVisionContainer}
          >
            <motion.div variants={fadeUpVariants} className={styles.missionCard}>
              <span className={styles.mvLabel}>Mission</span>
              <p className={styles.mvText}>Making world-class technology accessible to businesses of every size.</p>
            </motion.div>
            <motion.div variants={fadeUpVariants} className={styles.visionCard}>
              <span className={styles.mvLabel}>Vision</span>
              <p className={styles.mvText}>To become the most trusted technology partner for ambitious companies around the world.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className={styles.pillarsGrid}
          >
            {[
              { title: 'Innovation', icon: <Cpu size={32} /> },
              { title: 'Craftsmanship', icon: <Award size={32} /> },
              { title: 'Integrity', icon: <Shield size={32} /> }
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUpVariants} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. VALUES (BENTO GRID) */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
            <div className={styles.sectionBadge}>OUR VALUES</div>
            <h2 className={styles.sectionTitle}>What Drives Us</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className={styles.bentoGrid}
          >
            {[
              { title: 'Client Success First', desc: 'We measure our success by the growth and impact we create for our clients.', icon: <Star size={28} /> },
              { title: 'Craftsmanship', desc: 'Every detail matters—from design to deployment.', icon: <Award size={28} /> },
              { title: 'Transparency', desc: 'Clear communication. Honest timelines. No surprises.', icon: <CheckCircle size={28} /> },
              { title: 'Innovation', desc: 'We embrace emerging technologies to create lasting competitive advantages.', icon: <Zap size={28} /> },
              { title: 'Ownership', desc: 'Every project is treated as if it were our own company.', icon: <Shield size={28} /> },
              { title: 'Long-Term Relationships', desc: 'We build partnerships—not transactions.', icon: <Users size={28} /> }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUpVariants} className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>{val.icon}</div>
                <h3 className={styles.bentoTitle}>{val.title}</h3>
                <p className={styles.bentoDesc}>{val.desc}</p>
                <div className={styles.bentoGlow} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} style={{ textAlign: 'center' }}>
            <div className={styles.sectionBadge}>HOW WE WORK</div>
            <h2 className={styles.sectionTitle}>A Process Built for Scale</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className={styles.processContainer}
          >
            {[
              { num: '01', title: 'Discovery', desc: 'Understanding your business' },
              { num: '02', title: 'Strategy', desc: 'Planning the architecture' },
              { num: '03', title: 'Design', desc: 'UI/UX & Prototyping' },
              { num: '04', title: 'Development', desc: 'Agile engineering' },
              { num: '05', title: 'Launch', desc: 'Deployment & Growth' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUpVariants} className={styles.processStep}>
                <div className={styles.processIcon}>{step.num}</div>
                <div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (COMPARISON) */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
            <div className={styles.sectionBadge}>THE KRAMIX DIFFERENCE</div>
            <h2 className={styles.sectionTitle}>Why Ambitious Teams Choose Us</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className={styles.comparisonGrid}
          >
            <div className={`${styles.compCol} ${styles.compTraditional}`}>
              <h3 className={styles.compHeader}>Traditional Agencies</h3>
              <div className={styles.compList}>
                {['Slow Communication', 'Generic Templates', 'Hidden Costs', 'Poor Documentation', 'Short-Term Thinking'].map((item, i) => (
                  <div key={i} className={styles.compItem}>
                    <span className={styles.compIconBad}>❌</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.compCol} ${styles.compKramix}`}>
              <h3 className={styles.compHeader} style={{ color: 'var(--color-primary)' }}>Kramix</h3>
              <div className={styles.compList}>
                {['Dedicated Team', 'Transparent Workflow', 'Modern Technology', 'Business-Focused Solutions', 'Long-Term Partnership'].map((item, i) => (
                  <div key={i} className={styles.compItem}>
                    <span className={styles.compIconGood}>✓</span>
                    <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. NUMBERS THAT MATTER */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className={styles.statsGrid}
          >
            {[
              { num: '25+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '24H', label: 'Average Response' },
              { num: '2+', label: 'Countries Served' },
              { num: '3+', label: 'Years of Experience' }
            ].map((stat, i) => (
              <motion.div key={i} variants={countVariants} className={styles.statBlock}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statText}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
            <div className={styles.sectionBadge}>TESTIMONIALS</div>
            <h2 className={styles.sectionTitle}>Don't Just Take Our Word For It</h2>
          </motion.div>

          <div className={styles.testimonialCarousel}>
            {[
              { quote: "Kramix didn't just build our product. They became an extension of our team.", role: "Founder", company: "SaaS Company" },
              { quote: "The level of engineering quality and transparency is unmatched. A true partner.", role: "CTO", company: "Enterprise Solutions" },
              { quote: "They took our complex requirements and delivered an elegant, scalable platform.", role: "Director", company: "EdTech Startup" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.6 }}
                className={styles.testimonialCard}
              >
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.testimonialText}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.role.charAt(0)}</div>
                  <div className={styles.authorInfo}>
                    <h4>{t.role}</h4>
                    <p>{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OUR CULTURE */}
      <section className={`${styles.section} ${styles.sectionBorderTop}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ textAlign: 'center' }}>
            <motion.h2 variants={fadeUpVariants} className={styles.sectionTitle}>
              Built by Curious Minds.<br/>
              Powered by Great People.
            </motion.h2>
            <motion.p variants={fadeUpVariants} className={styles.sectionDesc} style={{ margin: '0 auto' }}>
              Behind every successful product is a team that genuinely enjoys solving difficult problems. At Kramix, we value curiosity, ownership, collaboration, and continuous learning. Technology changes every day. Our passion for building never does.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />
        <div className={`container ${styles.ctaContent}`}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUpVariants} className={styles.ctaTitle}>
              Let's Build Something<br/><span className={styles.gradientText}>Extraordinary</span> Together.
            </motion.h2>
            <motion.p variants={fadeUpVariants} className={styles.ctaDesc}>
              Whether you're launching a startup, modernizing an existing platform, or scaling with AI, we're ready to help turn ambitious ideas into remarkable digital experiences.
            </motion.p>
            <motion.div variants={fadeUpVariants} className={styles.ctaButtons}>
              <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight size={18} />} iconPosition="right">
                Book a Free Strategy Call
              </Button>
              <Button variant="outline" size="lg" href="/our-work">
                View Our Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

function Globe({ size, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
