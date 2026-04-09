'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';

const Vision: React.FC = () => {
  const { t, language } = useLanguage();
  const values = t('vision.vals');

  return (
    <section className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 rounded-[30px] shadow-sm border border-softAccent/10 hover:shadow-xl transition-all font-arabic">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-customText mb-4 italic underline decoration-softAccent decoration-4 underline-offset-8">
              {t('vision.vTitle')}
            </h3>
            <p className="text-customText/70 leading-loose">
              {t('vision.vText')}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-[30px] shadow-sm border border-softAccent/10 hover:shadow-xl transition-all font-arabic">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-customText mb-4 italic underline decoration-softAccent decoration-4 underline-offset-8">
              {t('vision.mTitle')}
            </h3>
            <p className="text-customText/70 leading-loose">
              {t('vision.mText')}
            </p>
          </div>

          {/* Values */}
          <div className="bg-darkAccent p-10 rounded-[30px] shadow-xl text-white font-arabic">
            <h3 className="text-2xl font-bold mb-8 italic underline decoration-primary decoration-4 underline-offset-8">
              {t('vision.valTitle')}
            </h3>
            <ul className="space-y-4">
              {values.map((val: any, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="text-primary font-bold">●</span>
                  <div>
                    <span className="font-bold text-softAccent ml-1">{val.t}:</span>
                    <span className="text-sm opacity-80">{val.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
