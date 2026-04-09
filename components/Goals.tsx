'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Goal } from '../types';

const GOALS_AR: Goal[] = [
  { title: 'إنتاج المعرفة العلمية', bullets: ['إجراء دراسات نوعية وكمية معمقة.', 'تطوير نظريات ورؤى جديدة.'] },
  { title: 'تحليل القضايا الفكرية', bullets: ['دراسة التحديات المعاصرة.', 'تقديم مقترحات لصياغة السياسات.'] },
  { title: 'تنمية القدرات البحثية', bullets: ['تنظيم برامج تدريبية لرفع كفاءة الباحثين.', 'دعم إنتاج الأبحاث الأكاديمية.'] },
  { title: 'تعزيز دور العلوم الإنسانية', bullets: ['تقديم استشارات معرفية لصناع القرار.', 'ربط الدراسات بالممارسات التنموية.'] },
  { title: 'نشر المعرفة', bullets: ['تنظيم مؤتمرات وندوات علمية.', 'إصدار منشورات ودوريات متخصصة.'] },
  { title: 'تشجيع التكامل المعرفي', bullets: ['تعزيز التعاون بين مختلف التخصصات.', 'تطوير دراسات عابرة للتخصصات.'] },
  { title: 'بناء الشراكات', bullets: ['التعاون مع الجامعات العالمية.', 'دعم مشاريع بحثية مشتركة دولياً.'] },
  { title: 'خدمة المجتمع', bullets: ['تقديم مبادرات لرفع الوعي العام.', 'تعزيز قيم التعايش والفكر النقدي.'] }
];

const GOALS_EN: Goal[] = [
  { title: 'Scientific Knowledge Production', bullets: ['Qualitative and quantitative studies.', 'Developing new theories.'] },
  { title: 'Intellectual Issue Analysis', bullets: ['Studying contemporary challenges.', 'Policy public proposals.'] },
  { title: 'Research Capacity Building', bullets: ['Training programs for efficiency.', 'Supporting academic research.'] },
  { title: 'Enhancing Humanities Role', bullets: ['Consultancy for decision makers.', 'Linking studies to development.'] },
  { title: 'Knowledge Dissemination', bullets: ['Organizing scientific conferences.', 'Specialized publications.'] },
  { title: 'Encouraging Integration', bullets: ['Cooperation between disciplines.', 'Interdisciplinary studies.'] },
  { title: 'Building Partnerships', bullets: ['Cooperation with universities.', 'Global research projects.'] },
  { title: 'Community Service', bullets: ['Awareness initiatives.', 'Critical thinking values.'] }
];

const Goals: React.FC = () => {
  const { t, language } = useLanguage();
  const goals = language === 'ar' ? GOALS_AR : GOALS_EN;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 font-arabic">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-customText mb-4">{t('goals.title')}</h2>
          <p className="text-customText/60 max-w-2xl mx-auto">{t('goals.subtitle')}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <div key={i} className="p-8 rounded-2xl border border-softAccent/10 bg-bgLight/30 hover:bg-white hover:shadow-lg transition-all border-b-4 border-b-softAccent/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-futura font-bold mb-6">
                {i + 1}
              </div>
              <h4 className="font-bold text-darkAccent mb-4">{goal.title}</h4>
              <ul className="space-y-2">
                {goal.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-customText/70 flex gap-2">
                    <span className="text-primary">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
