
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-9xl font-bold text-yemen-DEFAULT">404</h1>
        <h2 className="text-3xl font-semibold mt-4">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-gray-500 max-w-md mt-2 mb-8">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'Sorry, the page you are looking for doesn\'t exist or has been moved.'
          }
        </p>
        <Link to="/">
          <Button className="bg-yemen-DEFAULT hover:bg-yemen-dark">
            {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
