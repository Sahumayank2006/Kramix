'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Lock, User, Mail, Phone, Building, MapPin, Grid, DollarSign, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './contact.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company') || '',
      city: formData.get('city') || '',
      service: formData.get('service'),
      budget: formData.get('budget'),
      description: formData.get('description'),
      createdAt: serverTimestamp(),
      source: 'Premium Contact Form'
    };

    try {
      await addDoc(collection(db, 'contacts'), data);
      alert("🎉 Thank you! Your request has been sent successfully. We will review your requirements and reach out within 24 hours.");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.pageContainer}>
      {/* Background Effects */}
      <div className={styles.bgGlow} />
      <div className={styles.noiseBg} />
      <div className={styles.gridBg} />

      <section className={styles.contactMain}>
        
        {/* Left Form Container */}
        <motion.div 
          className={styles.formContainer}
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className={styles.formHeader}>
            <div className={styles.badge}>
              <Rocket size={14} /> START YOUR PROJECT
            </div>
            <h1 className={styles.formTitle}>Let's Build Something Extraordinary.</h1>
            <p className={styles.formDesc}>
              Tell us about your idea. We'll review your requirements and get back within one business day with the best approach, estimated timeline, and pricing.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.trustBar}>
            {[
              'Free Consultation',
              'Response within 24 Hours',
              'NDA Available',
              'Transparent Pricing',
              'No Spam',
              '100% Confidential'
            ].map((text, i) => (
              <div key={i} className={styles.trustItem}>
                <CheckCircle size={14} className={styles.trustIcon} /> {text}
              </div>
            ))}
          </motion.div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <motion.div variants={fadeUp} className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <User size={18} className={styles.inputIcon} />
                  <input type="text" id="name" name="name" className={styles.input} placeholder="Rahul Sharma" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Business Email</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input type="email" id="email" name="email" className={styles.input} placeholder="rahul.sharma@gmail.com" required />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <Phone size={18} className={styles.inputIcon} />
                  <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>Company Name</label>
                <div className={styles.inputWrapper}>
                  <Building size={18} className={styles.inputIcon} />
                  <input type="text" id="company" name="company" className={styles.input} placeholder="ABC Technologies Pvt. Ltd." />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city" className={styles.label}>City</label>
                <div className={styles.inputWrapper}>
                  <MapPin size={18} className={styles.inputIcon} />
                  <input type="text" id="city" name="city" className={styles.input} placeholder="Bengaluru, Karnataka" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>Service Required</label>
                <div className={styles.inputWrapper}>
                  <Grid size={18} className={styles.inputIcon} />
                  <input type="text" id="service" name="service" className={styles.input} placeholder="e.g. Website Development" required />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
              <div className={styles.inputWrapper}>
                <DollarSign size={18} className={styles.inputIcon} />
                <input type="text" id="budget" name="budget" className={styles.input} placeholder="e.g. ₹1L - ₹3L or Let's Discuss" required />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.formGroup} style={{ marginBottom: '2rem' }}>
              <label htmlFor="description" className={styles.label}>Project Details</label>
              <textarea 
                id="description" 
                name="description" 
                className={`${styles.input} ${styles.textarea}`} 
                placeholder="Hi Kramix Team,&#10;&#10;We're looking to build a modern business website with an admin dashboard, AI-powered features, and a scalable backend.&#10;&#10;Please share your recommendations, timeline, and estimated quotation."
                required 
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                <Rocket size={18} />
                {isSubmitting ? 'Submitting...' : 'Get My Free Proposal'}
                <ArrowRight size={18} className={styles.btnArrow} />
                <div className={styles.btnShine} />
              </button>
            </motion.div>
          </form>

          <motion.div variants={fadeUp} className={styles.bottomInfo}>
            <Lock size={20} className={styles.lockIcon} />
            <div className={styles.infoText}>
              <strong>Your project information is completely secure.</strong>
              Every inquiry is handled confidentially. NDA available upon request. No spam. No unnecessary follow-ups. Average response time: Within 24 Hours.
            </div>
          </motion.div>

        </motion.div>

        {/* Right Info Panel */}
        <motion.div 
          className={styles.sidePanel}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.contactCard}>
            <h3 className={styles.cardTitle}>Contact Information</h3>
            
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}><Phone size={24} /></div>
              <div className={styles.methodInfo}>
                <h4>Call Us</h4>
                <p>+91 79050 27329</p>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}><MessageCircle size={24} /></div>
              <div className={styles.methodInfo}>
                <h4>WhatsApp</h4>
                <p>Chat instantly</p>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}><Mail size={24} /></div>
              <div className={styles.methodInfo}>
                <h4>Email</h4>
                <p>kramix.service@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}><Clock size={24} /></div>
              <div className={styles.methodInfo}>
                <h4>Working Hours</h4>
                <p>Monday – Saturday</p>
                <p style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>10:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            <div className={styles.indiaProud}>
              <span style={{ fontSize: '20px' }}>🇮🇳</span> Proudly Serving Clients Across India
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}
