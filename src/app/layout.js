import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/shared/WhatsAppFAB';
import ScrollToTop from '@/components/shared/ScrollToTop';
import IdeaPopup from '@/components/shared/IdeaPopup';

export const metadata = {
  title: 'Kramix — Turning Vision into Reality | Premium Technology Partner',
  description: 'Kramix is a premium technology company delivering AI solutions, custom websites, web applications, software development, UI/UX design, automation, cloud solutions, branding, and digital transformation.',
  keywords: 'web development, AI solutions, mobile apps, UI/UX design, software development, India, technology partner, Kramix',
  openGraph: {
    title: 'Kramix — Turning Vision into Reality',
    description: 'A premium technology partner that transforms ideas into real, scalable digital products.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
        </div>
        <Footer />
        <WhatsAppFAB />
        <ScrollToTop />
        <IdeaPopup />
      </body>
    </html>
  );
}
