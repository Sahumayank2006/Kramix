'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { projects } from '@/data/portfolio';
import styles from './our-work.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function OurWorkPage() {
  // Filter out the collection item for the main grid
  const mainProjects = projects.filter(p => !p.isCollection);
  const collectionProject = projects.find(p => p.isCollection);

  return (
    <main className={styles.pageContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroImageSection}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/projects/ourwork.png" 
          alt="Our Work" 
          className={styles.heroFullImage} 
        />
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mainProjects.map((p) => (
              <motion.a 
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={p.id}
                className={styles.card}
                variants={itemVariants}
                whileHover="hover"
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/images/projects/${p.image}`} 
                    alt={p.title}
                    className={styles.image}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{p.category}</span>
                  </div>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.summary}>{p.summary}</p>
                  
                  <div className={styles.techList}>
                    {p.techStack.map(tech => (
                      <span key={tech} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.buttonWrapper}>
                    <span>Live Project</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Collection Section (Mayank & Dr. Ram) */}
          {collectionProject && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} style={{ marginTop: '6rem', textAlign: 'center' }}>
                <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {collectionProject.title}
                </h2>
                <p className={styles.heroDesc} style={{ marginBottom: '2rem' }}>
                  {collectionProject.summary}
                </p>
                <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/images/projects/${collectionProject.image || 'portfolio.png'}`} 
                    alt={collectionProject.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </motion.div>
              
              <div className={styles.collectionGrid}>
                {collectionProject.profiles.map((profile, i) => (
                  <motion.a 
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className={styles.profileCard}
                    variants={itemVariants}
                  >
                    <div className={styles.imageWrapper}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`/images/projects/${profile.image}`} 
                        alt={profile.name}
                        className={styles.image}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className={styles.profileContent}>
                      <span className={styles.profileSubtitle}>{profile.subtitle}</span>
                      <h3 className={styles.profileName}>{profile.name}</h3>
                      <p className={styles.summary}>{profile.description}</p>
                      <div className={styles.buttonWrapper} style={{ marginTop: 'auto' }}>
                        <span>View Portfolio</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className={styles.comingSoon}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.comingSoonTitle}>Building More Digital Experiences Every Day</h2>
            <p className={styles.comingSoonDesc}>
              Our portfolio continues to grow with innovative products across AI, SaaS, Education, Healthcare, Government, Automation, and Enterprise Software.<br/><br/>
              If you're looking to build something exceptional, we'd love to collaborate.
            </p>
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight size={18} />} iconPosition="right">
              Let's Build Together
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
