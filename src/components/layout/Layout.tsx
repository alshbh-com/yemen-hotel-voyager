
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
