'use client';

import Header from '../../components/Header';
import { useLanguage } from '../../LanguageContext';

export default function PrivacyClient() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const content = isAr ? {
    title: 'سياسة الخصوصية',
    lastUpdate: 'آخر تحديث: أكتوبر 2024',
    sections: [
      { heading: '١. مقدمة', text: 'نحن في مؤسسة إنسيا للبحوث نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.' },
      { heading: '٢. المعلومات التي نجمعها', text: 'نجمع الاسم (اختياري)، البريد الإلكتروني (اختياري)، محتوى الرسائل، وبيانات التصفح التلقائية.' },
      { heading: '٣. كيف نستخدم المعلومات', text: 'نستخدم المعلومات للرد على استفساراتك وتحسين تجربة المستخدم.' },
      { heading: '٤. حماية البيانات', text: 'نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به.' },
      { heading: '٥. مشاركة البيانات', text: 'لا نبيع أو نتاجر معلوماتك الشخصية إلى أطراف ثالثة.' },
      { heading: '٦. ملفات تعريف الارتباط', text: 'يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح.' },
      { heading: '٧. حقوقك', text: 'لديك الحق في طلب الوصول إلى بياناتك أو حذفها.' },
      { heading: '٨. التعديلات', text: 'نحتفظ بالحق في تحديث هذه السياسة في أي وقت.' }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdate: 'Last Updated: October 2024',
    sections: [
      { heading: '1. Introduction', text: 'At INSYA Research Foundation, we respect your privacy and are committed to protecting your personal data.' },
      { heading: '2. Information We Collect', text: 'We collect name (optional), email (optional), message content, and automatic browsing data.' },
      { heading: '3. How We Use Information', text: 'We use the information to respond to your inquiries and improve user experience.' },
      { heading: '4. Data Protection', text: 'We take appropriate security measures to protect your information.' },
      { heading: '5. Data Sharing', text: 'We do not sell or trade your personal information to third parties.' },
      { heading: '6. Cookies', text: 'Our website uses cookies to improve your browsing experience.' },
      { heading: '7. Your Rights', text: 'You have the right to request access to or deletion of your data.' },
      { heading: '8. Changes', text: 'We reserve the right to update this policy at any time.' }
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