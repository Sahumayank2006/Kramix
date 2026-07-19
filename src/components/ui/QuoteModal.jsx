'use client';
import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './QuoteModal.module.css';
import Button from './Button';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'quotes'), {
        ...formData,
        createdAt: serverTimestamp(),
        source: 'Quote Modal'
      });
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', contact: '', details: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Get a Free Quote</h3>
            <p className={styles.subtitle}>Tell us about your project and we'll get back within 24 hours.</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <CheckCircle size={48} className={styles.successIcon} />
            <h4>Thank you!</h4>
            <p>We'll reach out within 24 hours.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="quote-name">Your Name</label>
              <input
                id="quote-name"
                name="name"
                type="text"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="quote-contact">Phone or Email</label>
              <input
                id="quote-contact"
                name="contact"
                type="text"
                placeholder="+91 98765 43210 or you@email.com"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="quote-details">Project Details</label>
              <textarea
                id="quote-details"
                name="details"
                placeholder="Tell us about your project — what you need, your timeline, any specific requirements..."
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              disabled={isSubmitting}
              icon={<Send size={18} />}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
            </Button>

            <p className={styles.note}>
              🔒 Your information is secure and will never be shared. NDA available on request.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
