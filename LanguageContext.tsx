'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabase';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      tracks: 'المسارات',
      services: 'خدمات',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'إنسيا للدراسات والبحوث',
      focus: 'نحن نركز على',
      desc: 'نعمل على تطوير أبحاث العلوم الإنسانية من خلال منهجيات رصينة ورؤى بينية متخصصة. نسعى لجسّر الفجوة بين الفكر الإنساني والمنهج العلمي لتحقيق أثر معرفي مستدام.',
      cta: 'اكتشف المزيد',
      typing: ["أبحاث إنسانية رصينة", "تحليل اجتماعي وثقافي", "دراسات بينية حديثة", "إنتاج معرفي متطور", "حلول مجتمعية فعالة"]
    },
    about: {
      title: 'ما هي إنسيا؟',
      p1: 'إنسيا مؤسسة بحثية رائدة تأسست عام 2015م بهدف تعزيز البحث العلمي في مجالات العلوم الإنسانية. وتعمل المؤسسة على استكشاف وتحليل القضايا الاجتماعية والثقافية والفكرية التي تمس حياة الإنسان وثقافته.',
      p2: 'يضم إنسيا فريقًا بحثيًا متعدد التخصصات، يعتمد على منهجيات نوعية وكمية وأدوات علمية متطورة لإنتاج معرفة رصينة وتقديم حلول عملية للتحديات المعاصرة.',
      p3: 'يسعى مركز إنسيا إلى الإسهام في صياغة السياسات التنموية وصناعة القرار، والدفع نحو إحداث أثر إيجابي ومستدام في المجتمع.',
      stats: [
        { label: 'عام التأسيس', val: '2015' },
        { label: 'باحث متخصص', val: '+45' },
        { label: 'دراسة منشورة', val: '+120' },
        { label: 'شراكة دولية', val: '12' }
      ],
      quote: '"المعرفة هي الجسر الوحيد الذي يربط ماضينا الإنساني بمستقبلنا الحضاري."'
    },
    vision: {
      vTitle: 'الرؤية',
      vText: 'أن يكون مركزًا بحثيًا رائدًا في مجالات العلوم الإنسانية، يسهم في إنتاج المعرفة وتوظيفها لفهم الإنسان والمجتمع وصياغة مستقبل أفضل.',
      mTitle: 'الرسالة',
      mText: 'إجراء أبحاث ودراسات متخصصة تعزز الفهم العميق للقضايا الاجتماعية والثقافية، وتوفير منصات معرفية تُمكّن الباحثين وصناع القرار من تطوير مهاراتهم لخدمة المجتمع.',
      valTitle: 'القيم الجوهرية',
      vals: [
        { t: 'الموضوعية', d: 'الالتزام بالحياد والدقة في البحث.' },
        { t: 'الإبداع', d: 'ابتكار منهجيات لفهم التحديات.' },
        { t: 'التكامل', d: 'الجمع بين مختلف العلوم.' },
        { t: 'المسؤولية', d: 'ربط المعرفة باحتياجات المجتمع.' }
      ]
    },
    goals: {
      title: 'أهداف إنسيا',
      subtitle: 'نسعى لتحقيق رؤية شاملة للنهوض بالعلوم الإنسانية من خلال محاور استراتيجية متكاملة.'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام'
    }
  },
  en: {
    nav: {
      home: 'Home',
      tracks: 'Tracks',
      services: 'Services',
      contact: 'Contact Us'
    },
    hero: {
      title: 'ENSSIA for Studies & Research',
      focus: 'We Focus On',
      desc: 'We work to advance humanities research through rigorous methodologies and specialized interdisciplinary perspectives. We strive to bridge the gap between human thought and the scientific method.',
      cta: 'Learn More',
      typing: ["Humanities Research", "Social & Cultural Analysis", "Interdisciplinary Studies", "Knowledge Production", "Evidence-Based Insights"]
    },
    about: {
      title: 'What is ENSSIA?',
      p1: 'INSYA is a leading research foundation established in 2015 to promote scientific research in the humanities. We explore and analyze social and cultural issues.',
      p2: 'INSYA includes a multi-disciplinary research team relying on qualitative and quantitative methodologies and advanced scientific tools.',
      p3: 'The center contributes to development policies and decision-making, driving towards a sustainable positive impact on society.',
      stats: [
        { label: 'Founded', val: '2015' },
        { label: 'Specialists', val: '+45' },
        { label: 'Publications', val: '+120' },
        { label: 'Partnerships', val: '12' }
      ],
      quote: '"Knowledge is the only bridge that connects our human past to our civilizational future."'
    },
    vision: {
      vTitle: 'Vision',
      vText: 'To be a leading research center in humanities, contributing to knowledge production to understand humans and society.',
      mTitle: 'Mission',
      mText: 'Conducting specialized research that enhances deep understanding of issues and providing platforms to empower researchers.',
      valTitle: 'Core Values',
      vals: [
        { t: 'Objectivity', d: 'Commitment to neutrality and accuracy.' },
        { t: 'Creativity', d: 'Innovating methodologies for challenges.' },
        { t: 'Integration', d: 'Combining various sciences.' },
        { t: 'Responsibility', d: 'Linking knowledge to society.' }
      ]
    },
    goals: {
      title: 'ENSSIA Goals',
      subtitle: 'We seek to achieve a comprehensive vision for the advancement of humanities through integrated strategic pillars.'
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [cmsData, setCmsData] = useState<Record<string, string>>({});

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

useEffect(() => {
    async function fetchContent() {
      if (!supabase) return;
      const { data } = await supabase!
        .from('site_content')
        .select('key, value');

      if (data) {
        const map: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          map[row.key] = row.value;
        });
        setCmsData(map);
      }
    }
    fetchContent();
  }, []);

const t = (path: string) => {
    if (language === 'ar') {
      const cmsKey = path.replace('.', '_');
      if (cmsData[cmsKey]) {
        try {
          return JSON.parse(cmsData[cmsKey]);
        } catch {
          return cmsData[cmsKey];
        }
      }
    }

    return path.split('.').reduce((obj, key) => obj?.[key], translations[language] as any);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};