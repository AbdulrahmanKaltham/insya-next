'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const stats = t('about.stats');

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="font-arabic">
          <h2 className="text-4xl font-bold text-customText mb-8 flex items-center gap-4">
            {t('about.title')}
            <span className="h-1 w-12 bg-primary"></span>
          </h2>
          <div className={`space-y-6 text-customText/80 leading-relaxed text-lg ${language === 'ar' ? 'text-justify' : 'text-left'}`}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
        
        <div className={`relative ${language === 'en' ? 'order-first lg:order-last' : ''}`}>
          <div className={`absolute inset-0 bg-softAccent/5 rounded-3xl ${language === 'ar' ? '-rotate-2' : 'rotate-2'}`}></div>
          <div className="relative p-8 bg-bgLight border border-softAccent/20 rounded-3xl shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat: any, i: number) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-softAccent/10 text-center group hover:border-primary transition-all">
                  <div className="font-futura text-3xl font-bold text-primary mb-1">{stat.val}</div>
                  <div className="font-arabic text-sm text-customText/60">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 p-6 bg-white/50 border border-softAccent/10 rounded-2xl italic font-arabic text-darkAccent text-sm leading-loose ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('about.quote')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;