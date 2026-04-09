'use client';

import Header from '../../components/Header';
import { useLanguage } from '../../LanguageContext';

export default function TermsClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const content = isAr ? {
    title: 'شروط الاستخدام',
    lastUpdate: 'آخر تحديث: أكتوبر 2024',
    sections: [
      { heading: '١. قبول الشروط', text: 'باستخدام موقع مؤسسة إنسيا، فإنك توافق على الالتزام بهذه الشروط والأحكام.' },
      { heading: '٢. استخدام الموقع', text: 'يُسمح لك باستخدام الموقع للأغراض المشروعة فقط وفيما يتوافق مع هذه الشروط.' },
      { heading: '٣. المحتوى الفكري', text: 'جميع المحتويات المنشورة على الموقع هي ملك لمؤسسة إنسيا ومحمية بموجب قوانين الملكية الفكرية.' },
      { heading: '٤. المحتوى البحثي', text: 'المحتوى البحثي يُقدم لأغراض علمية ومعرفية. الآراء الواردة تعبر عن أصحابها.' },
      { heading: '٥. روابط خارجية', text: 'قد يحتوي الموقع على روابط لمواقع خارجية. لا نتحمل مسؤولية محتواها.' },
      { heading: '٦. الحدود القانونية', text: 'يخضع استخدام هذا الموقع لقوانين المملكة العربية السعودية.' },
      { heading: '٧. التعديلات', text: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت.' },
      { heading: '٨. التواصل', text: 'لأي استفسارات بخصوص هذه الشروط، تواصل معنا عبر نموذج الاتصال.' }
    ]
  } : {
    title: 'Terms of Use',
    lastUpdate: 'Last Updated: October 2024',
    sections: [
      { heading: '1. Acceptance of Terms', text: 'By using the INSYA website, you agree to comply with these terms.' },
      { heading: '2. Website Use', text: 'You may use the website for legitimate purposes only.' },
      { heading: '3. Intellectual Property', text: 'All content on the website is the property of INSYA and protected by IP laws.' },
      { heading: '4. Research Content', text: 'Research content is provided for scientific purposes. Opinions represent their authors.' },
      { heading: '5. External Links', text: 'The website may contain links to external sites. We are not responsible for their content.' },
      { heading: '6. Legal Jurisdiction', text: 'Use of this website is subject to Saudi Arabian law.' },
      { heading: '7. Modifications', text: 'We reserve the right to modify these terms at any time.' },
      { heading: '8. Contact', text: 'For any inquiries, contact us via the contact form.' }
    ]
  };

  return (
    <div className="min-h-screen selection:bg-softAccent selection:text-white flex flex-col bg-bgLight">
      <Header currentPage="" />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 font-arabic">
          <h1 className="text-4xl font-bold text-customText mb-4">{content.title}</h1>
          <p className="text-sm text-customText/50 mb-12">{content.lastUpdate}</p>
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg border border-softAccent/10">
            <div className="space-y-10">
              {content.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-darkAccent mb-3">{section.heading}</h2>
                  <p className="text-customText/70 leading-loose">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-12 border-t border-softAccent/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <a href="/" className="font-futura text-2xl font-bold text-primary tracking-tight">ENSSIA</a>
            <span className="text-xl font-arabic font-semibold text-darkAccent border-s-2 border-softAccent/40 ps-3">إنسيا</span>
          </div>
          <p className="text-sm text-customText/60 font-arabic">
            © {new Date().getFullYear()} {isAr ? 'مؤسسة إنسيا للبحوث.' : 'ENSSIA Research Foundation.'}
          </p>
          <div className="flex gap-6 text-sm font-medium text-customText/80 font-arabic">
            <a href="/privacy" className="hover:text-primary transition-colors">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="/terms" className="hover:text-primary transition-colors">{isAr ? 'شروط الاستخدام' : 'Terms of Use'}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}