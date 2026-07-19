'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code, Layout, TrendingUp, Shield, Rocket, X, CheckCircle, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './team.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function TeamPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      college: formData.get('college'),
      role: formData.get('role'),
      portfolio: formData.get('portfolio'),
      about: formData.get('about'),
      createdAt: serverTimestamp(),
      status: "Pending"
    };

    try {
      await addDoc(collection(db, 'teamApplications'), data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting application: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.bgGlow} />
      <div className={styles.noiseBg} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} className={styles.heroBadge}>
            <Users size={14} /> OUR TEAM
          </motion.div>
          <motion.h1 variants={fadeUp} className={styles.heroTitle}>
            The People Behind <br /><span className={styles.gradientText}>Kramix.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className={styles.heroDesc}>
            Behind every great product is a passionate team. We're designers, engineers, innovators and problem-solvers building technology that creates meaningful impact.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.heroDesc}>
            Every project reflects our commitment to quality, trust and long-term partnerships.
          </motion.p>
          
          <motion.div variants={fadeUp} className={styles.heroMetrics}>
            <div className={styles.metric}>
              <span className={styles.metricNum}>25+</span>
              <span className={styles.metricLabel}>Projects Delivered</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNum}>100%</span>
              <span className={styles.metricLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNum}>24h</span>
              <span className={styles.metricLabel}>Average Response</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNum}>2026</span>
              <span className={styles.metricLabel}>Founded in India 🇮🇳</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Abstract Floating Illustration */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <img src="/images/projects/kramix.png" alt="Kramix Innovation" style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(232, 168, 56, 0.2))' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>Meet Our Core Team</h2>
          <p className={styles.sectionSubtitle}>
            Built by people who believe technology should solve real problems.
          </p>
        </motion.div>

        <div className={styles.foundersGrid}>
          {/* Jyotima Card */}
          <motion.div 
            className={styles.founderCard}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className={styles.founderImageWrapper}>
              <img src="/images/projects/jyotima.jpeg" alt="Jyotima Tomar" className={styles.founderImage} />
            </div>
            <h3 className={styles.founderName}>Jyotima Tomar</h3>
            <p className={styles.founderRole}>Full Stack Developer</p>
            <p className={styles.founderBio}>
              Jyotima is a talented developer building scalable, reliable, and high-performance applications. With a strong eye for detail, she ensures every line of code translates into exceptional digital experiences.
            </p>
            <div className={styles.expertiseTags}>
              {['Frontend', 'Backend', 'Database', 'React', 'Node.js', 'Problem Solving'].map(tag => (
                <span key={tag} className={styles.expertiseTag}>{tag}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/jyotimatomar/" target="_blank" rel="noopener noreferrer" className={styles.founderCta}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect with Jyotima <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Mayank Card */}
          <motion.div 
            className={styles.founderCard}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className={styles.founderImageWrapper}>
              <img src="/images/projects/mayank.png" alt="Mayank Sahu" className={styles.founderImage} />
            </div>
            <h3 className={styles.founderName}>Mayank Sahu</h3>
            <p className={styles.founderRole}>Founder & Lead Engineer</p>
            <p className={styles.founderBio}>
              Mayank leads Kramix with a vision of building technology that genuinely helps businesses, researchers, institutions, and innovators. He specializes in full-stack development, AI-powered applications, scalable systems, and modern product engineering.
            </p>
            <div className={styles.expertiseTags}>
              {['Next.js', 'React', 'Node.js', 'AI', 'Firebase', 'Cloud', 'System Design'].map(tag => (
                <span key={tag} className={styles.expertiseTag}>{tag}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/mrmayanksahu/" target="_blank" rel="noopener noreferrer" className={styles.founderCta}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect with Mayank <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Vaibhav Card */}
          <motion.div 
            className={styles.founderCard}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.founderImageWrapper}>
              <img src="/images/projects/vaibhav.jpeg" alt="Vaibhav" className={styles.founderImage} />
            </div>
            <h3 className={styles.founderName}>Vaibhav</h3>
            <p className={styles.founderRole}>Co-Founder & Product Strategist</p>
            <p className={styles.founderBio}>
              Vaibhav focuses on product strategy, user experience, execution, and ensuring every solution delivers measurable business value. His attention to quality and collaboration helps transform ambitious ideas into successful products.
            </p>
            <div className={styles.expertiseTags}>
              {['Product Strategy', 'UI/UX', 'Business Analysis', 'Client Success', 'Innovation', 'Operations'].map(tag => (
                <span key={tag} className={styles.expertiseTag}>{tag}</span>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/vaibhav-singh-rajawat/" target="_blank" rel="noopener noreferrer" className={styles.founderCta}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect with Vaibhav <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={styles.cultureSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>More Than Developers.<br/>We're Builders.</h2>
        </motion.div>

        <motion.div 
          className={styles.bentoGrid}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
        >
          {[
            { icon: <Rocket size={24} />, title: 'Innovation First', desc: 'We build for the future, embracing modern technologies and AI.' },
            { icon: <Shield size={24} />, title: 'Ownership', desc: 'We treat every client project with the same care as our own startup.' },
            { icon: <BookOpen size={24} />, title: 'Continuous Learning', desc: 'The tech landscape evolves fast, and so do we.' },
            { icon: <CheckCircle size={24} />, title: 'Quality', desc: 'We never compromise on clean code, smooth UI, or secure architecture.' },
            { icon: <Layout size={24} />, title: 'Transparency', desc: 'Clear communication, honest timelines, and straightforward pricing.' },
            { icon: <TrendingUp size={24} />, title: 'Long-term Thinking', desc: 'We build partnerships that last, not just quick projects.' },
          ].map((item, i) => (
            <motion.div key={i} className={styles.bentoCard} variants={fadeUp}>
              <div className={styles.bentoIcon}>{item.icon}</div>
              <h3 className={styles.bentoTitle}>{item.title}</h3>
              <p className={styles.bentoDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Hiring Section */}
      <section className={styles.hiringSection}>
        <motion.div 
          className={styles.hiringCard}
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <h2 className={styles.hiringTitle}>We're Growing Our Team 🚀</h2>
          <p className={styles.hiringDesc}>
            We're looking for curious minds, passionate developers, designers, AI enthusiasts, and problem-solvers who want to build meaningful technology. If you're excited about creating exceptional digital experiences, we'd love to hear from you.
          </p>
          <button className={styles.joinBtn} onClick={() => setIsModalOpen(true)}>
            Join Our Journey <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Join Team Kramix</h2>
                  <p style={{ color: '#888', marginTop: '0.25rem', fontSize: '0.9rem' }}>
                    Fill in a few details. If your profile matches our requirements, we'll contact you soon.
                  </p>
                </div>
                <button className={styles.closeBtn} onClick={closeModal}>
                  <X size={20} />
                </button>
              </div>

              <div className={styles.modalForm}>
                {isSuccess ? (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle size={64} className={styles.successIcon} />
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉 Thank you!</h2>
                    <p style={{ color: '#aaa', lineHeight: 1.6 }}>
                      Our team will review your application and contact you if there's a suitable opportunity.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.label}>Full Name</label>
                      <input type="text" id="fullName" name="fullName" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Email Address</label>
                      <input type="email" id="email" name="email" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>Phone Number</label>
                      <input type="tel" id="phone" name="phone" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="city" className={styles.label}>Current City</label>
                      <input type="text" id="city" name="city" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="college" className={styles.label}>College / Company</label>
                      <input type="text" id="college" name="college" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="role" className={styles.label}>Role Interested</label>
                      <select id="role" name="role" className={styles.input} required defaultValue="">
                        <option value="" disabled>Select a role...</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="AI Engineer">AI Engineer</option>
                        <option value="Research Intern">Research Intern</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="portfolio" className={styles.label}>Portfolio / Resume Link</label>
                      <input type="url" id="portfolio" name="portfolio" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="about" className={styles.label}>Why do you want to join Kramix?</label>
                      <textarea id="about" name="about" className={`${styles.input} ${styles.textarea}`} required />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
