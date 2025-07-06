'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'O nome é obrigatório.';
    if (!formData.email.trim()) newErrors.email = 'O email é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'O formato do email é inválido.';
    if (!formData.subject.trim()) newErrors.subject = 'O assunto é obrigatório.';
    if (!formData.message.trim()) newErrors.message = 'A mensagem é obrigatória.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ocorreu um erro no servidor.');
      }
      
      setSubmitStatus('success');
      setFeedbackMessage('Mensagem enviada com sucesso! Obrigado pelo contato.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário

    } catch (error) {
      setSubmitStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'Não foi possível enviar a mensagem. Tente novamente.';
      setFeedbackMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient mb-4">Entre em Contato</h2>
        <p className="lead max-w-2xl mx-auto">
          Tem um projeto em mente ou uma oportunidade? Adoraria ouvir sobre isso.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto card p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">Nome</label>
              <input type="text" id="name" value={formData.name} onChange={handleInputChange} className={`form-input ${errors.name ? 'border-red-500' : ''}`} disabled={isSubmitting}/>
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="form-label">Seu Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`form-input ${errors.email ? 'border-red-500' : ''}`} disabled={isSubmitting}/>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="form-label">Assunto</label>
            <input type="text" id="subject" value={formData.subject} onChange={handleInputChange} className={`form-input ${errors.subject ? 'border-red-500' : ''}`} disabled={isSubmitting}/>
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="form-label">Sua Mensagem</label>
            <textarea id="message" value={formData.message} onChange={handleInputChange} className={`form-input min-h-[140px] ${errors.message ? 'border-red-500' : ''}`} disabled={isSubmitting} rows={5}/>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
            </button>
            <AnimatePresence>
              {feedbackMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-sm text-center sm:text-left ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}
                >
                  {feedbackMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-border-color text-center">
            <p className="text-text-secondary mb-4">Ou me encontre nas redes:</p>
            <div className="flex justify-center gap-4">
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg></a>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
            </div>
        </div>
      </motion.div>
    </div>
  );
}