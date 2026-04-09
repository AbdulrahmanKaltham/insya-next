'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navLinkClass = (target: string) =>
    `text-lg text-customText font-semibold transition-all duration-300 border-b-2 ${
      currentPage === target
        ? 'border-primary text-primary'
        : 'border-transparent hover:text-primary hover:border-primary'
    }`;

  const mobileLinkClass = (target: string) =>
    `block py-3 text-lg font-semibold transition-colors ${
      currentPage === target
        ? 'text-primary'
        : 'text-customText hover:text-primary'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full py-6 px-[9%] bg-bgLight/80 backdrop-blur-md flex justify-between items-center z-[100] border-b border-softAccent/10">
      <Link href="/" className="logo font-futura text-4xl text-primary font-extrabold cursor-pointer transition-transform duration-500 hover:scale-110">
        ENSSIA
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 font-arabic">
        <Link href="/" className={navLinkClass('home')}>{t('nav.home')}</Link>
        <Link href="/about" className={navLinkClass('about')}>
          {language === 'ar' ? 'من نحن؟' : 'About Us'}
        </Link>
        <Link href="/tracks" className={navLinkClass('tracks')}>{t('nav.tracks')}</Link>
        <Link href="/services" className={navLinkClass('services')}>{t('nav.services')}</Link>
        <Link href="/contact" className={navLinkClass('contact')}>{t('nav.contact')}</Link>
        
        <div className="h-5 w-px bg-softAccent/30 mx-2"></div>
        
        <button 
          onClick={toggleLanguage}
          className="text-xs font-futura font-bold text-darkAccent hover:text-primary border border-darkAccent/20 px-3 py-1 rounded transition-all"
        >
          {language === 'ar' ? 'EN' : 'العربية'}
        </button>
      </nav>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary text-3xl"
        >
          {mobileOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars-staggered"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white z-[200] transition-all duration-300 font-arabic ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ paddingTop: '5rem', paddingBottom: '2rem' }}
      >
        <div className="px-[9%] space-y-2">
          <Link href="/" onClick={() => setMobileOpen(false)} className={mobileLinkClass('home')}>{t('nav.home')}</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className={mobileLinkClass('about')}>
            {language === 'ar' ? 'من نحن؟' : 'About Us'}
          </Link>
          <Link href="/tracks" onClick={() => setMobileOpen(false)} className={mobileLinkClass('tracks')}>{t('nav.tracks')}</Link>
          <Link href="/services" onClick={() => setMobileOpen(false)} className={mobileLinkClass('services')}>{t('nav.services')}</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className={mobileLinkClass('contact')}>{t('nav.contact')}</Link>

          <div className="pt-4 border-t border-softAccent/20">
            <button
              onClick={toggleLanguage}
              className="text-sm font-futura font-bold text-darkAccent hover:text-primary border border-darkAccent/20 px-4 py-2 rounded transition-all"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;