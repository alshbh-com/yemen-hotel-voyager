
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yemen-DEFAULT text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-white">
              {language === 'ar' ? 'فندقي' : 'Fandiqi'}
            </Link>
            <p className="mt-2 text-sm text-white/80">
              {language === 'ar' 
                ? 'منصة حجز الفنادق الأولى في اليمن. اكتشف أفضل الفنادق واحجز بأفضل الأسعار.'
                : 'The premier hotel booking platform in Yemen. Discover the best hotels and book at the best prices.'
              }
            </p>
            <div className="flex mt-4 space-x-4 space-x-reverse:rtl">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hotels" className="text-white/80 hover:text-white transition-colors">
                  {t('hotels')}
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">
                  {t('login')}
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white/80 hover:text-white transition-colors">
                  {t('signup')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Cities */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'أعلى المدن' : 'Top Cities'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hotels?city=صنعاء" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'صنعاء' : 'Sana\'a'}
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=عدن" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'عدن' : 'Aden'}
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=تعز" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'تعز' : 'Taiz'}
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=المكلا" className="text-white/80 hover:text-white transition-colors">
                  {language === 'ar' ? 'المكلا' : 'Al Mukalla'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0 me-2" />
                <span>support@fandiqi.com</span>
              </p>
              <p className="flex items-center text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0 me-2" />
                <span>+967 01 234 5678</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            &copy; {currentYear} {language === 'ar' ? 'فندقي' : 'Fandiqi'}. 
            {language === 'ar' 
              ? ' جميع الحقوق محفوظة.'
              : ' All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
