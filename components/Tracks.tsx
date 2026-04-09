'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Track } from '../types';

const TRACKS_AR: Track[] = [
  {
    title: 'البحوث الأكاديمية',
    bullets: ['إجراء بحوث أساسية ومتقدمة.', 'تطوير برامج بحثية بينية.', 'نشر البحوث في مجلات محكَّمة.'],
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'المشاريع التطبيقية',
    bullets: ['مشاريع بالتعاون مع جهات حكومية.', 'تطوير حلول للتحديات المعاصرة.', 'المشاركة في صياغة السياسات.'],
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.782 0l-.691-.34a6 6 0 00-3.86-.517l-2.388.477a2 2 0 00-1.022.547l-.53.53a1 1 0 000 1.415l.31.31a1 1 0 010 1.414l-.31.31a1 1 0 000 1.415l.53.53a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.691-.34a2 2 0 011.782 0l.691.34a6 6 0 003.86.517l2.388-.477a2 2 0 001.022-.547l.53-.53a1 1 0 000-1.415l-.31-.31a1 1 0 010-1.414l.31-.31a1 1 0 000-1.415l-.53-.53z'
  },
  {
    title: 'بناء القدرات',
    bullets: ['برامج تدريبية للمهارات البحثية.', 'إنشاء شبكات تعاون دولية.', 'استقطاب الكفاءات المتميزة.'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'نشر المعرفة',
    bullets: ['إصدار منشورات بعدة لغات.', 'تطوير منصات رقمية تفاعلية.', 'تنظيم فعاليات وندوات علمية.'],
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  }
];

const TRACKS_EN: Track[] = [
  {
    title: 'Academic Research',
    bullets: ['Conducting basic and advanced research.', 'Developing interdisciplinary programs.', 'Publishing in peer-reviewed journals.'],
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Applied Projects',
    bullets: ['Projects with government entities.', 'Developing solutions for contemporary challenges.', 'Participating in policy-making.'],
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.782 0l-.691-.34a6 6 0 00-3.86-.517l-2.388.477a2 2 0 00-1.022.547l-.53.53a1 1 0 000 1.415l.31.31a1 1 0 010 1.414l-.31.31a1 1 0 000 1.415l.53.53a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.691-.34a2 2 0 011.782 0l.691.34a6 6 0 003.86.517l2.388-.477a2 2 0 001.022-.547l.53-.53a1 1 0 000-1.415l-.31-.31a1 1 0 010-1.414l.31-.31a1 1 0 000-1.415l-.53-.53z'
  },
  {
    title: 'Capacity Building',
    bullets: ['Training programs for research skills.', 'Establishing international cooperation networks.', 'Attracting distinguished competencies.'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Knowledge Dissemination',
    bullets: ['Publishing in multiple languages.', 'Developing interactive digital platforms.', 'Organizing scientific events and seminars.'],
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  }
];

const TRACKS_TITLES = {
  ar: 'مسارات إنسيا',
  en: 'ENSSIA Tracks'
};

const Tracks: React.FC = () => {
  const { language } = useLanguage();
  const tracks = language === 'ar' ? TRACKS_AR : TRACKS_EN;

  return (
    <section className="pt-48 pb-12 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 font-arabic">
        <h2 className="text-4xl font-bold text-customText mb-16 text-center">{TRACKS_TITLES[language]}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-softAccent/10 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-softAccent/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={track.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-darkAccent mb-6">{track.title}</h3>
              <ul className="space-y-3">
                {track.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-customText/70 flex gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-softAccent mt-2"></span>
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

export default Tracks;