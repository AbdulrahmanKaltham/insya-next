'use client';


import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const typingWords = t('hero.typing');
  const [wordIndex, setWordIndex] = useState(0);

  // Manual implementation of typing word cycle if CSS animation is too rigid for dynamic text
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [typingWords]);

  return (
    <section className="home min-h-screen pt-32 pb-20 px-[9%] flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 bg-bgLight">
      {/* Hero Content - order flips based on dir automatically but text alignment might need help */}
      <div className={`home-content order-2 md:order-1 flex-1 ${language === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'} font-arabic`}>
        <h1 className="text-5xl md:text-7xl font-bold text-customText leading-tight mb-4">
          <span className="text-primary">إنسيّا</span> {language === 'ar' ? 'للدراسات والبحوث' : 'For Studies and Research'}
        </h1>
        
        {/* Typing Animation Section */}
        <div className="typing-text mb-6">
          <div className="typing-label mb-1">{t('hero.focus')}</div>
          <div className="typing-word">
            <span className="relative inline-block text-primary font-bold text-3xl after:content-[''] after:absolute after:w-[3px] after:h-[1em] after:bg-primary after:animate-blink after:mx-2">
              {typingWords[wordIndex]}
            </span>
          </div>
        </div>

        <p className={`text-lg text-customText/80 leading-relaxed mb-10 max-w-2xl mx-auto ${language === 'ar' ? 'md:mr-0' : 'md:ml-0'}`}>
          {t('hero.desc')}
        </p>

        {/* Social Icons */}
        <div className={`social-icons flex justify-center ${language === 'ar' ? 'md:justify-start' : 'md:justify-start'} gap-4 mb-10`}>
          <a href="#" className="social-icon-link" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon-link" aria-label="X (Twitter)">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="social-icon-link" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-icon-link" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>

        {/* CTA Button */}
        <div className={`flex justify-center ${language === 'ar' ? 'md:justify-start' : 'md:justify-start'}`}>
          <a href="#about" className="hero-btn">
            {t('hero.cta')}
          </a>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="hero-img-container order-1 md:order-2 flex justify-center items-center">
        <div className="relative">
          <img 
            src="/hero.jpg" 
            alt="Research Foundation"
            className="relative z-10 w-full max-w-[450px] h-auto object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
