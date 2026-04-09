'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../LanguageContext';

emailjs.init("icJsRU1_beThB718z");

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const isAr = language === 'ar';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSent(false);

    try {
      await emailjs.sendForm(
        'service_04awaxl',
        'template_x71lm35',
        formRef.current!
      );
      setSent(true);
      (formRef.current as HTMLFormElement).reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const inputClass = `w-full px-5 py-4 rounded-xl border text-sm font-arabic transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
    isAr ? 'text-right' : 'text-left'
  } border-softAccent/20 bg-bgLight/50 text-customText placeholder:text-customText/40`;

  const labelClass = 'block text-sm font-semibold text-darkAccent mb-2 font-arabic';

  return (
    <section className="pt-48 pb-24 bg-bgLight flex items-start justify-center">
      <div className="w-full max-w-2xl mx-auto px-6">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg border border-softAccent/10 font-arabic">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-customText mb-3">
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-customText/60 text-sm">
              {isAr ? 'نسعد بتواصلك معنا. املأ النموذج أدناه وسنرد عليك في أقرب وقت.' : 'We are happy to hear from you. Fill the form below and we will respond soon.'}
            </p>
          </div>

          {sent && (
            <div className="mb-8 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm text-center font-semibold">
              {isAr ? '✓ تم إرسال رسالتك بنجاح!' : '✓ Your message has been sent successfully!'}
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center font-semibold">
              {isAr ? '✗ حدث خطأ. حاول مرة أخرى.' : '✗ An error occurred. Please try again.'}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            <input type="hidden" name="name" value="زائر إنسيا" />
            <input type="hidden" name="time" value={new Date().toLocaleString('ar-SA')} />

            <div>
              <label className={labelClass}>
                {isAr ? 'الموضوع' : 'Subject'} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder={isAr ? 'مثال: استفسار عن خدمة التدقيق العلمي' : 'e.g., Inquiry about peer review service'}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                {isAr ? 'الرسالة' : 'Message'} <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>
                {isAr ? 'الاسم' : 'Name'} <span className="text-customText/30">({isAr ? 'اختياري' : 'optional'})</span>
              </label>
              <input
                type="text"
                name="from_name"
                placeholder={isAr ? 'اسمك الكريم' : 'Your name'}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                {isAr ? 'إيميل التواصل' : 'Email'} <span className="text-customText/30">({isAr ? 'اختياري' : 'optional'})</span>
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="example@email.com"
                className={inputClass}
                dir="ltr"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-primary hover:bg-darkAccent disabled:bg-softAccent text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:cursor-not-allowed text-lg"
            >
              {sending
                ? (isAr ? 'جارِ الإرسال...' : 'Sending...')
                : (isAr ? 'إرسال الرسالة' : 'Send Message')
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;