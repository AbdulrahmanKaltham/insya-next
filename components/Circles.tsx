'use client';

import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Circle } from '../types';

const CIRCLES_AR: Circle[] = [
  { title: 'الدائرة التراثية', description: 'تركز على صون وتحقيق المخطوطات والخدمة النصية للعلوم التاريخية.', subUnits: ['مخبر تحقيق النصوص', 'مخبر إعادة الإخراج', 'مخبر خدمة النص البيانية'] },
  { title: 'الدائرة التعريبية والاستشراق', description: 'تُعنى بنقل المعارف الأجنبية وتتبع حركة الاستشراق نقدياً.', subUnits: ['وحدة التعريب والترجمة', 'وحدة النقد الاستشراقية'] },
  { title: 'الدائرة البحثية', description: 'المحرك النظري للمؤسسة لبناء التصنيفات العلمية الجديدة.', subUnits: ['مسار تكوين النظريات', 'مسار تكوين التصنيفات'] },
  { title: 'الدائرة الاستشرافية', description: 'تتخصص في الدراسات المستقبلية للأفكار والنظريات الكبرى.', subUnits: ['دراسة مستقبل الأفكار والنظريات والمعارف والأحداث'] },
  { title: 'دائرة النصوص الأولية', description: 'معمل متخصص لإنتاج المحتوى المعرفي الأصيل والتدوين.', subUnits: ['معمل التأليف', 'معمل التدوين (مقالات – تقارير)'] },
  { title: 'الدائرة الاستشارية', description: 'تقديم الدعم الفني والأكاديمي لمشاريع البحث الخارجي.', subUnits: ['مخبر الاستشارات البحثية', 'مخبر التحكيم العلمي'] },
  { title: 'دائرة التدريب والتوصيف', description: 'بناء الكوادر البحثية وتوصيف المناهج الأكاديمية الحديثة.', subUnits: ['حلقة البورد البحثي', 'حلقة وصف المناهج والمقررات'] },
  { title: 'الدائرة التصنيفية والمعيارية', description: 'وضع المعايير العلمية والمقاييس للدراسات الإنسانية.', subUnits: ['المعيار العلمي للعلوم الإنسانية', 'معيار العلوم الشرعية', 'معيار التأليف العربي'] }
];

const CIRCLES_EN: Circle[] = [
  { title: 'Heritage Circle', description: 'Focuses on preserving and verifying manuscripts and textual services for historical sciences.', subUnits: ['Text Verification Lab', 'Re-edition Lab', 'Textual Commentary Lab'] },
  { title: 'Translation & Orientalism Circle', description: 'Concerned with transferring foreign knowledge and critically tracking Orientalism.', subUnits: ['Translation & Arabization Unit', 'Orientalism Critique Unit'] },
  { title: 'Research Circle', description: 'The theoretical engine of the institution for building new scientific classifications.', subUnits: ['Theory Formation Track', 'Classification Formation Track'] },
  { title: 'Foresight Circle', description: 'Specializes in future studies of major ideas and theories.', subUnits: ['Studying the future of ideas, theories, knowledge and events'] },
  { title: 'Primary Texts Circle', description: 'A specialized lab for producing original knowledge content and documentation.', subUnits: ['Authoring Lab', 'Documentation Lab (articles - reports)'] },
  { title: 'Consultancy Circle', description: 'Providing technical and academic support for external research projects.', subUnits: ['Research Consultations Lab', 'Scientific Peer Review Lab'] },
  { title: 'Training & Description Circle', description: 'Building research cadres and describing modern academic curricula.', subUnits: ['Research Board Circle', 'Curricula & Course Description Circle'] },
  { title: 'Classification & Standards Circle', description: 'Setting scientific standards and measures for humanities studies.', subUnits: ['Scientific Standard for Humanities', 'Sharia Sciences Standard', 'Arabic Authoring Standard'] }
];

const CIRCLES_TITLE = {
  ar: 'خدمات إنسيا',
  en: 'Circles of Interest'
};

const Circles: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const circles = language === 'ar' ? CIRCLES_AR : CIRCLES_EN;

  return (
    <section className="pt-32 pb-24 bg-bgLight">
      <div className="max-w-4xl mx-auto px-6 font-arabic">
        <h2 className="text-4xl font-bold text-customText mb-12 text-center">{CIRCLES_TITLE[language]}</h2>
        <div className="space-y-4">
          {circles.map((circle, i) => (
            <div key={i} className={`accordion-item bg-white border border-softAccent/10 rounded-2xl overflow-hidden transition-all ${openIndex === i ? 'open shadow-lg' : 'shadow-sm'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-right group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-darkAccent group-hover:text-primary'}`}>
                  {circle.title}
                </span>
                <svg className={`accordion-icon w-5 h-5 text-softAccent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="accordion-content px-8">
                <p className="text-customText/70 text-sm mb-6 border-r-2 border-primary/20 pr-4 italic">
                  {circle.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {circle.subUnits.map((unit, j) => (
                    <div key={j} className="flex items-center gap-3 p-3 bg-bgLight rounded-xl text-sm font-medium text-customText/80">
                      <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                      {unit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Circles;