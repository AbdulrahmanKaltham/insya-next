'use client';

import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { useLanguage } from '../../LanguageContext';

export default function ContactClient() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-softAccent selection:text-white flex flex-col bg-bgLight">
      <Header currentPage="contact" />
      <main className="flex-1 flex flex-col">
        <Contact />
      </main>
      
      <footer className="bg-white py-12 border-t border-softAccent/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <a href="/" className="font-futura text-2xl font-bold text-primary tracking-tight">ENSSIA</a>
            <span className="text-xl font-arabic font-semibold text-darkAccent border-s-2 border-softAccent/40 ps-3">إنسيا</span>
          </div>
          <p className="text-sm text-customText/60 font-arabic">
            © {new Date().getFullYear()} {language === 'ar' ? 'مؤسسة إنسيا للبحوث.' : 'ENSSIA Research Foundation.'} {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm font-medium text-customText/80 font-arabic">
            <a href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}