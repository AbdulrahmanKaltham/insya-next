'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';

const FIELDS_AR = [
  'الدراسات الشرعية الأصيلة',
  'الدراسات الأدبية واللغوية',
  'الدراسات التاريخية',
  'الدراسات الفلسفية',
  'القانون',
  'العلوم السياسية'
];

const FIELDS_EN = [
  'Authentic Sharia Studies',
  'Literary & Linguistic Studies',
  'Historical Studies',
  'Philosophical Studies',
  'Law',
  'Political Science'
];

const FIELDS_TITLES = {
  ar: 'مجالات إنسيا',
  en: 'ENSSIA Fields'
};

const FIELDS_DESC = {
  ar: 'نغطي طيفاً واسعاً من التخصصات الإنسانية والاجتماعية لتقديم رؤية شمولية للمعرفة.',
  en: 'We cover a wide range of humanities and social disciplines to provide a comprehensive vision of knowledge.'
};

const Fields: React.FC = () => {
  const { language } = useLanguage();
  const fields = language === 'ar' ? FIELDS_AR : FIELDS_EN;

  return (
    <section className="pt-32 pb-16 md:pb-28 lg:pb-[120px] 2xl:pb-72 bg-white">
      <div className="max-w-7xl mx-auto px-6 font-arabic">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-customText mb-4">{FIELDS_TITLES[language]}</h2>
            <p className="text-customText/60 leading-relaxed">{FIELDS_DESC[language]}</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {fields.map((field, i) => (
              <div key={i} className="p-6 bg-bgLight border border-softAccent/10 rounded-2xl text-center hover:bg-primary hover:text-white transition-all cursor-default shadow-sm hover:shadow-primary/20">
                <span className="font-bold text-sm">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fields;