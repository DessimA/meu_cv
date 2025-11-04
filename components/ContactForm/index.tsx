'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  id: string;
}

const ContactForm = ({ id }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const turnstileRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const watchedFields = watch();

  useEffect(() => {
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  }, [watchedFields]);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setErrorMessage('Por favor, complete a verificação de segurança.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          'cf-turnstile-response': turnstileToken
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTurnstileToken('');
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10 relative"
        >
          Entre em Contato
          <span className="absolute bottom-0 left-1/2 w-32 md:w-40 h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  Nome
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle size={14} className="mr-1" />{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle size={14} className="mr-1" />{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                Assunto
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle size={14} className="mr-1" />{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                Mensagem
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center"><AlertCircle size={14} className="mr-1" />{errors.message.message}</p>
              )}
            </div>

            {/* Turnstile CAPTCHA */}
            <div className="flex justify-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => {
                  setTurnstileToken('');
                  setErrorMessage('Erro na verificação de segurança. Tente novamente.');
                }}
                onExpire={() => setTurnstileToken('')}
                options={{
                  theme: 'auto',
                  size: 'normal'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !turnstileToken}
              className="w-full bg-blue-600 text-white py-2.5 px-5 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-colors shadow-md text-base"
            >
              {isSubmitting ? (
                <Loader className="animate-spin w-4 h-4" />
              ) : (
                <>
                  <Send size={18} />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-2 md:p-3 rounded-md mt-3 md:mt-4 text-sm"
              >
                <CheckCircle size={18} />
                <span>Mensagem enviada com sucesso!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-2 md:p-3 rounded-md mt-3 md:mt-4 text-sm"
              >
                <AlertCircle size={18} />
                <span>{errorMessage || 'Erro ao enviar mensagem. Tente novamente.'}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;