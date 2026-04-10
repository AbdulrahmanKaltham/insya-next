import type { Metadata } from "next";
import { Jost, IBM_Plex_Sans_Arabic, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../LanguageContext";

const jost = Jost({ 
  subsets: ["latin"], 
  variable: '--font-futura',
  weight: ['400', '600', '700', '800']
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"], 
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700']
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "إنسيا — مركز الدراسات والبحوث الإنسانية",
  description: "مؤسسة بحثية رائدة تأسست عام 2015م بهدف تعزيز البحث العلمي في مجالات العلوم الإنسانية.",
  openGraph: {
    title: "إنسيا — مركز الدراسات والبحوث الإنسانية",
    description: "مؤسسة بحثية رائدة تأسست عام 2015م بهدف تعزيز البحث العلمي في مجالات العلوم الإنسانية.",
    images: ["/og-image.png"],
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
          <link rel="icon" href="/icon.png" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  />
      </head>
      <body className={`${jost.variable} ${ibmPlexArabic.variable} ${poppins.variable} font-arabic`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}