'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users, Zap, Eye, ChevronDown, ChevronUp, Globe, Brain, Smartphone, Palette, Database, Rocket } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import QuoteModal from '@/components/ui/QuoteModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { serviceHighlights } from '@/data/services';
import { projects } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { technologies } from '@/data/technologies';
import { processSteps } from '@/data/process';
import { teamMembers } from '@/data/team';
import { faqItems } from '@/data/faq';
import styles from './Home.module.css';

const iconMap = { Globe, Brain, Smartphone, Palette, Database, Rocket };

const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

/* ─── HERO ─── */
function HeroSection({ onQuoteOpen }) {
  return (
    <section className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/projects/kramix.png" alt="Kramix Hero" className={styles.heroImageFull} />
      
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroCtas}>
          <Button variant="primary" size="lg" onClick={onQuoteOpen} icon={<ArrowRight size={20} />} iconPosition="right">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

function HeroStats() {
  const stats = [
    { end: 25, suffix: '+', label: 'Projects Delivered' },
    { end: 15, suffix: '+', label: 'Technologies' },
    { end: 98, suffix: '%', label: 'On-Time Delivery' },
    { end: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <div className={styles.heroStats}>
      {stats.map((stat, i) => (
        <StatItem key={i} {...stat} />
      ))}
    </div>
  );
}

function StatItem({ end, suffix, label }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statNumber}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const ref = useScrollReveal();
  const badges = [
    { icon: <Shield size={20} />, text: 'Transparent Pricing' },
    { icon: <CheckCircle size={20} />, text: 'NDA on Request' },
    { icon: <Users size={20} />, text: 'Dedicated Support' },
    { icon: <Clock size={20} />, text: 'On-Time Delivery' },
    { icon: <Star size={20} />, text: 'Quality Guaranteed' },
  ];

  return (
    <section className={styles.trustBar} ref={ref}>
      <div className="container">
        <div className={styles.trustGrid}>
          {badges.map((b, i) => (
            <div key={i} className={`${styles.trustBadge} reveal delay-${(i + 1) * 100}`}>
              <span className={styles.trustIcon}>{b.icon}</span>
              <span className={styles.trustText}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES OVERVIEW ─── */
function ServicesOverview({ onQuoteOpen }) {
  const ref = useScrollReveal();
  return (
    <section className={`section ${styles.servicesSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="What We Do" title="Services Built for Growth" subtitle="From concept to deployment — we cover the full spectrum of digital product development." />
        <div className={styles.servicesGrid}>
          {serviceHighlights.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Link href={s.link} key={i} className={`${styles.serviceCard} reveal delay-${(i + 1) * 100}`}>
                <div className={styles.serviceIcon}>{Icon && <Icon size={28} />}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <span className={styles.serviceArrow}><ArrowRight size={16} /></span>
              </Link>
            );
          })}
        </div>
        <div className={`${styles.sectionCta} reveal delay-400`}>
          <Button variant="outline" href="/services" icon={<ArrowRight size={18} />} iconPosition="right">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST SECTION ─── */
function InstitutionTrust() {
  const ref = useScrollReveal();
  const reasons = [
    { icon: <Database size={24} />, title: 'Research Focused' },
    { icon: <Star size={24} />, title: 'Academic Quality' },
    { icon: <Zap size={24} />, title: 'Modern Technology' },
    { icon: <Shield size={24} />, title: 'Long Term Support' },
    { icon: <Smartphone size={24} />, title: 'Responsive Design' },
    { icon: <Rocket size={24} />, title: 'Performance Optimized' },
    { icon: <Eye size={24} />, title: 'Accessibility' },
    { icon: <Globe size={24} />, title: 'SEO Ready' },
  ];

  return (
    <section className={`section ${styles.trustSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="Trusted Partner" title="Why Institutions Choose Kramix" subtitle="We build robust, scalable platforms for the academic and enterprise world." />
        <div className={styles.trustGridNew}>
          {reasons.map((r, i) => (
            <div key={i} className={`${styles.trustCardNew} reveal delay-${(i + 1) * 100}`}>
              <div className={styles.trustIconNew}>{r.icon}</div>
              <h3 className={styles.trustTitleNew}>{r.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function ProcessSection() {
  const ref = useScrollReveal();
  return (
    <section className={`section ${styles.processSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="Our Process" title="How We Work" subtitle="A transparent, step-by-step approach that keeps you informed and confident at every stage." />
        <div className={styles.processTimeline}>
          {processSteps.map((step, i) => (
            <div key={step.id} className={`${styles.processStep} reveal delay-${(i + 1) * 100}`}>
              <div className={styles.processStepNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.processStepIcon}>{step.icon}</div>
              <h3 className={styles.processStepTitle}>{step.title}</h3>
              <p className={styles.processStepSub}>{step.subtitle}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.sectionCta} reveal delay-400`}>
          <Button variant="outline" href="/process" icon={<ArrowRight size={18} />} iconPosition="right">
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED PORTFOLIO ─── */
function FeaturedPortfolio() {
  const ref = useScrollReveal();
  const featured = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className={`section ${styles.portfolioSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="Our Work" title="Featured Projects" subtitle="A glimpse of what we've built for businesses, startups, and students." />
        <div className={styles.portfolioGridNew}>
          {featured.map((p, i) => (
            <div key={p.id} className={`${styles.projectCardNew} reveal delay-${(i + 1) * 100}`} style={{ '--project-color': p.color || '#E9A93A' }}>
              <div className={styles.projectCoverNew}>
                {p.image ? (
                  <img src={`/images/projects/${p.image}`} alt={p.title} className={styles.projectCoverImageNew} />
                ) : (
                  <div className={styles.projectCoverInnerNew} style={{ background: `linear-gradient(135deg, ${p.color || '#E9A93A'}22, ${p.color || '#E9A93A'}44)` }}>
                    <span className={styles.projectCoverIconNew} style={{ color: p.color || '#E9A93A' }}>{p.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className={styles.projectInfoNew}>
                <div className={styles.projectTags}>
                  <span className={styles.projectCategory}>{p.category}</span>
                </div>
                <h3 className={styles.projectTitleNew}>{p.title}</h3>
                <p className={styles.projectSummaryNew}>{p.summary}</p>
                
                <div className={styles.techBadges}>
                  {p.techStack && p.techStack.map(tech => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <div className={styles.projectCta}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">View Live Project <ArrowRight size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.sectionCta} reveal delay-400`}>
          <Button variant="outline" href="/our-work" icon={<ArrowRight size={18} />} iconPosition="right">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── TECH SHOWCASE ─── */
function TechShowcase() {
  const ref = useScrollReveal();
  return (
    <section className={`section-sm ${styles.techSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="Tech Stack" title="Technologies We Master" subtitle="Modern, battle-tested technologies for robust, scalable products." />
        <div className={styles.techMarquee}>
          <div className={`${styles.techTrack} marquee-track`}>
            {[...technologies, ...technologies].map((t, i) => (
              <div key={i} className={styles.techItem} title={t.name}>
                <div className={styles.techDot} style={{ background: t.color }} />
                <span className={styles.techName}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  const ref = useScrollReveal();
  const premiumTestimonials = [
    {
      name: "Dr. Ram Kumar",
      designation: "Assistant Professor",
      company: "Department of Mathematics, Amity University",
      quote: "Kramix transformed my academic portfolio into a professional digital presence. Their attention to detail, modern design approach, and technical expertise exceeded my expectations. The final website truly reflects my research and academic journey with elegance.",
      rating: 5
    },
    {
      name: "Dr. Dinesh Sharma",
      designation: "Associate Professor",
      company: "Amity University Madhya Pradesh",
      quote: "We have collaborated with Kramix on multiple academic and technical projects, and every experience has been outstanding. Their professionalism, commitment, and ability to deliver high-quality solutions make them a trusted technology partner.",
      rating: 5
    },
    {
      name: "Faculty & Students",
      designation: "Growing Community",
      company: "Trusted by Students & Faculty",
      quote: "We're currently collaborating with Kramix on multiple academic portfolios, research websites, student showcases, and institutional projects. Their work consistently combines modern design, performance, and reliability. We look forward to many more successful collaborations.",
      rating: 5
    }
  ];

  return (
    <section className={`section ${styles.testimonialsSection}`} ref={ref}>
      <div className="container">
        <SectionHeading badge="Verified Collaboration" title="What Our Clients Say" subtitle="Real feedback from real people we've worked with." />
        <div className={styles.testimonialCardsNew}>
          {premiumTestimonials.map((t, i) => (
            <div key={i} className={`${styles.testimonialCardNew} reveal delay-${(i + 1) * 200}`}>
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#F5B72A" color="#F5B72A" />
                ))}
              </div>
              <p className={styles.testimonialQuoteNew}>"{t.quote}"</p>
              <div className={styles.testimonialAuthorNew}>
                <div className={styles.testimonialAvatarNew}>{t.name.charAt(0)}</div>
                <div className={styles.testimonialAuthorInfo}>
                  <strong className={styles.testimonialNameNew}>{t.name}</strong>
                  <span className={styles.testimonialRoleNew}>{t.designation}</span>
                  <span className={styles.testimonialCompanyNew}>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM TEASER ─── */
function TeamTeaser() {
  const ref = useScrollReveal();

  const team = [
    {
      name: "Jyotima Tomar",
      role: "Full Stack Developer",
      image: "/images/projects/jyotima.jpeg",
      bio: "Talented developer building scalable, reliable, and high-performance applications.",
      linkedin: "https://www.linkedin.com/in/jyotimatomar/"
    },
    {
      name: "Mayank Sahu",
      role: "Founder",
      image: "/images/projects/mayank.png",
      bio: "Visionary leader driving innovation and building technology that genuinely improves lives.",
      linkedin: "#"
    },
    {
      name: "Vaibhav",
      role: "Co-founder",
      image: "/images/projects/vaibhav.jpeg",
      bio: "Strategic thinker focusing on scalable solutions and operational excellence.",
      linkedin: "#"
    }
  ];

  return (
    <section className={`section ${styles.teamSection}`} ref={ref}>
      <div className="container">
        <SectionHeading 
          badge="Meet The Minds Behind Kramix" 
          title="Every exceptional product begins with exceptional people." 
          subtitle="We're carefully building a team of passionate designers, engineers, researchers, and innovators who share one mission— Building technology that genuinely improves lives. As we continue to grow, more brilliant minds will soon join our journey. Stay tuned." 
        />
        <div className={styles.teamGridNew}>
          {team.map((member, idx) => (
            <div key={idx} className={`${styles.teamCardNew} reveal delay-${(idx + 1) * 200}`}>
              <div className={styles.teamAvatarWrapper}>
                <img src={member.image} alt={member.name} className={styles.teamAvatarImage} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className={styles.teamAvatarPlaceholder} style={{ display: 'none' }}>
                  <Users size={32} color="var(--color-primary)" />
                </div>
              </div>
              <h3 className={styles.teamNameNew}>{member.name}</h3>
              <p className={styles.teamRoleNew}>{member.role}</p>
              <p className={styles.teamBioNew}>{member.bio}</p>
              {member.linkedin && (
                <div className={styles.teamSocialsNew}>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.teamLinkedin} aria-label={`${member.name} LinkedIn`}>
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={`${styles.sectionCta} reveal delay-400`}>
          <Button variant="outline" href="/contact" icon={<ArrowRight size={18} />} iconPosition="right">
            Join Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ PREVIEW ─── */
function FAQPreview() {
  const ref = useScrollReveal();
  const [openId, setOpenId] = useState(null);
  const previewFaqs = faqItems.slice(0, 4);

  return (
    <section className={`section ${styles.faqSection}`} ref={ref}>
      <div className="container-narrow">
        <SectionHeading badge="FAQ" title="Common Questions" subtitle="Quick answers to the things people ask us most." />
        <div className={`${styles.faqList} reveal`}>
          {previewFaqs.map((item) => (
            <div key={item.id} className={`${styles.faqItem} ${openId === item.id ? styles.faqOpen : ''}`}>
              <button className={styles.faqQuestion} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                <span>{item.question}</span>
                {openId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.sectionCta} reveal delay-200`}>
          <Button variant="ghost" href="/faq" icon={<ArrowRight size={18} />} iconPosition="right">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── PREMIUM CTA BANNER ─── */
function CTABanner({ onQuoteOpen }) {
  const ref = useScrollReveal();
  return (
    <section className={styles.ctaBanner} ref={ref}>
      <div className={styles.ctaGlow} />
      <div className={styles.ctaNoise} />
      <div className={styles.ctaGridBg} />
      
      <div className={`container ${styles.ctaInner} reveal`}>
        <div className={styles.ctaContentWrapper}>
          <div className={styles.ctaTextContent}>
            <div className={styles.ctaBadge}>
              <span className={styles.ctaBadgeIcon}>✨</span>
              LET'S BUILD SOMETHING EXTRAORDINARY
            </div>
            
            <h2 className={styles.ctaTitle}>
              Have an Idea?<br/>
              Let's Turn It Into <span className={styles.ctaAccent}>Something Remarkable.</span>
            </h2>
            
            <p className={styles.ctaDesc}>
              Every successful product begins with a simple idea.
              Whether you're launching a startup, building a business platform, creating an AI solution, modernizing your organization, or bringing a completely new vision to life—
              <br/><br/>
              we'll partner with you from the very first conversation to design, development, testing, deployment, and long-term growth.
              <br/><br/>
              <strong className={styles.ctaStrong}>You bring the vision. We'll build the technology.</strong>
            </p>

            <div className={styles.ctaTrustStatement}>
              <p>
                From concept to deployment—and beyond—we stay with you every step of the journey. 
                No confusing technical jargon. No hidden surprises. 
                Just honest collaboration, world-class engineering, and a team genuinely invested in your success.
              </p>
            </div>

            <div className={styles.ctaHighlights}>
              {[
                'Free Strategy Consultation',
                'Transparent Development Process',
                'Modern & Scalable Technology',
                'Deployment & Ongoing Support',
                'Fast Response Within 24 Hours',
                'Trusted by Startups, Businesses & Educational Institutions Across India'
              ].map((highlight, idx) => (
                <div key={idx} className={styles.ctaHighlightItem}>
                  <CheckCircle size={16} className={styles.ctaHighlightIcon} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimaryBtn} onClick={onQuoteOpen}>
                🚀 Start Your Project
                <div className={styles.btnShine} />
              </button>
              <button className={styles.ctaSecondaryBtn} onClick={onQuoteOpen}>
                📅 Book a Free Consultation
              </button>
            </div>
            
            <p className={styles.ctaNote}>
              No obligation. No hidden charges. Just a friendly conversation about your idea.
            </p>
          </div>
          
          <div className={styles.ctaVisualArea}>
            <div className={styles.ctaVisualGraphic}>
              <div className={styles.ctaOrb1} />
              <div className={styles.ctaOrb2} />
              <div className={styles.ctaFloatingCards}>
                <div className={`${styles.ctaCard} ${styles.ctaCard1}`}>
                  <div className={styles.ctaCardHeader} />
                  <div className={styles.ctaCardBody} />
                </div>
                <div className={`${styles.ctaCard} ${styles.ctaCard2}`}>
                  <Rocket size={32} className={styles.ctaCardIcon} />
                </div>
                <div className={`${styles.ctaCard} ${styles.ctaCard3}`}>
                  <Database size={24} className={styles.ctaCardIconAlt} />
                  <div className={styles.ctaCardLines}>
                    <div className={styles.ctaLine} />
                    <div className={styles.ctaLine} />
                  </div>
                </div>
              </div>
              <svg className={styles.ctaConnectionLines} viewBox="0 0 400 400">
                <path d="M100,300 C150,200 250,200 300,100" />
                <path d="M100,100 C150,200 250,200 300,300" />
                <circle cx="100" cy="300" r="4" />
                <circle cx="300" cy="100" r="4" />
                <circle cx="100" cy="100" r="4" />
                <circle cx="300" cy="300" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN HOME PAGE ─── */
export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <main>
      <HeroSection onQuoteOpen={() => setQuoteOpen(true)} />
      <HeroStats />
      <InstitutionTrust />
      <ServicesOverview onQuoteOpen={() => setQuoteOpen(true)} />
      <FeaturedPortfolio />
      <TestimonialsSection />
      <TeamTeaser />
      <CTABanner onQuoteOpen={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
